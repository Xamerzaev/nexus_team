import asyncio
import re
import sqlite3
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

import aiosmtplib
from aiogram import Bot

from data import config
from logger import logger

bot = Bot(token=config.API_TOKEN)


# Асинхронная функция для отправки электронного письма
async def send_email_async(subject, recipient, message_text):
    msg = MIMEMultipart()
    msg["From"] = config.SMTP_USERNAME
    msg["To"] = recipient
    msg["Subject"] = subject
    msg.attach(MIMEText(message_text, "plain"))

    try:
        async with aiosmtplib.SMTP(
            hostname=config.SMTP_SERVER, port=config.SMTP_PORT, use_tls=True
        ) as server:
            await server.login(config.SMTP_USERNAME, config.SMTP_PASSWORD)
            await server.send_message(msg)
            logger.info(f"Письмо успешно отправлено на адрес {recipient}")
            return True
    except aiosmtplib.SMTPException as e:
        # Обработка ошибок SMTP
        logger.error(
            f"Ошибка SMTP при отправке письма на адрес {recipient}: {e}")
    except asyncio.TimeoutError as e:
        # Обработка ошибок тайм-аута
        logger.error(f"Тайм-аут при отправке письма на адрес {recipient}: {e}")
    except Exception as e:
        # Обработка всех других исключений
        logger.error(
            f"Неожиданная ошибка при отправке письма на адрес {recipient}: {e}"
        )
        return False


# Функция для замены имени в тексте сообщения
def replace_name(message_text, name):
    return message_text.replace("{{name}}", name.capitalize())


# Функция для проверки валидности email-адреса
def is_valid_email(email):
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return re.match(pattern, email) is not None


# Функция для отправки рассылки
async def newsletter_send(user_id, subject, message_text):
    if user_id != config.ADMIN_ID:
        await bot.send_message(user_id, "Извините, бот не для вас")
        return 0, 0

    # Функция для получения списка адресов
    def get_subscribers():
        with sqlite3.connect(
            "C:\\Nexus_backend\\nexus_team\\openresty\\backend\\db.sqlite3"
        ) as conn:
            return (
                conn.cursor()
                .execute("SELECT email, name FROM nexus_subscription")
                .fetchall()
            )

    records = get_subscribers()

    if not records:
        await bot.send_message(user_id, "База данных пуста. Рассылка не выполнена ❌")
        return 0, 0

    tasks = [
        send_email_async(subject, email, replace_name(message_text, name))
        for email, name in records
        if is_valid_email(email)
    ]

    results = await asyncio.gather(*tasks, return_exceptions=True)
    successful_count = results.count(True)

    response_message = (
        f"Итого адресов: {len(records)}\n"
        f"Успешных рассылок: {successful_count}\n"
        f"Неудачных рассылок: {len(tasks) - successful_count}"
    )
    await bot.send_message(user_id, response_message)

    return successful_count, len(tasks)
