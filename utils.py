import sqlite3
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from aiogram import Bot
from data import config  # Импортируем конфигурационные данные
from logger import logger  # Импортируем логгер для записи информации о действиях

# Функция для отправки электронного письма
def send_email(subject, recipient, message_text):
    # Создаем объект MIMEMultipart для формирования сообщения
    msg = MIMEMultipart()
    msg['From'] = config.SMTP_USERNAME  # Устанавливаем отправителя
    msg['To'] = recipient  # Устанавливаем получателя
    msg['Subject'] = subject  # Устанавливаем тему письма
    msg.attach(MIMEText(message_text, 'plain'))  # Добавляем текст сообщения

    try:
        # Подключаемся к SMTP-серверу и отправляем письмо
        server = smtplib.SMTP_SSL(config.SMTP_SERVER, config.SMTP_PORT)
        server.login(config.SMTP_USERNAME, config.SMTP_PASSWORD)
        server.sendmail(config.SMTP_USERNAME, recipient, msg.as_string())
        server.quit()
        logger.info(f"Письмо успешно отправлено на адрес {recipient}")  # Записываем информацию в лог
    except Exception as e:
        logger.error(f"Ошибка при отправке письма на адрес {recipient}: {e}")  # Записываем ошибку в лог

# Функция для замены имени в тексте сообщения
def replace_name(message_text, name):
    return message_text.replace('{{name}}', name.capitalize())

# Функция для отправки рассылки
async def newsletter_send(user_id, subject, message_text):
    # Проверяем, является ли пользователь администратором
    if user_id == config.ADMIN_ID:
        # Подключаемся к базе данных SQLite и получаем список адресов электронной почты
        conn = sqlite3.connect('C:\\Nexus_backend\\nexus_team\\openresty\\backend\\db.sqlite3')
        cursor = conn.cursor()
        cursor.execute("SELECT email, name FROM nexus_subscription")
        records = cursor.fetchall()
        conn.close()

        # Проходимся по каждой записи в базе данных и отправляем письмо
        for record in records:
            email = record[0]
            name = record[1]
            replaced_message_text = replace_name(message_text, name)
            send_email(subject, email, replaced_message_text)
    else:
        # Если пользователь не является администратором, отправляем сообщение о том, что бот не для него
        await Bot.send_message(user_id, "Извините, бот не для вас")

# Функция для замены имени в тексте сообщения
def replace_name(message_text, name):
    return message_text.replace('{{name}}', name.capitalize())
