from aiogram import types, Dispatcher
from data import config
from keyboards import get_start_keyboard
from states import Newsletter

# Функция для отправки приветственного сообщения администратору
async def send_welcome(message: types.Message):
    # Проверяем, что отправитель является администратором
    if message.from_user.id == config.ADMIN_ID:
        # Получаем имя администратора
        admin_name = message.from_user.first_name
        # Отправляем приветственное сообщение с кнопкой для начала рассылки
        await message.reply(f"Привет, {admin_name}! Нажмите кнопку для начала рассылки⬇️.", reply_markup=get_start_keyboard())
    else:
        # Если отправитель не является администратором, отправляем сообщение об ошибке
        await message.reply("Извините, бот не для вас.")

# Функция для начала рассылки
async def newsletter_start(message: types.Message):
    # Проверяем, что отправитель является администратором
    if message.from_user.id == config.ADMIN_ID:
        # Устанавливаем состояние для ввода темы рассылки
        await Newsletter.subject.set()
        # Отправляем запрос на ввод темы письма для рассылки
        await message.reply("Введите тему письма для рассылки:")
    else:
        # Если отправитель не является администратором, отправляем сообщение об ошибке
        await message.reply("Извините, бот не для вас")

# Функция для регистрации обработчиков
def register_handlers(dp: Dispatcher):
    # Регистрируем обработчик для команды /start
    dp.register_message_handler(send_welcome, commands=['start'])
    # Регистрируем обработчик для команды /send_newsletter
    dp.register_message_handler(newsletter_start, commands=['send_newsletter'], state=None)
