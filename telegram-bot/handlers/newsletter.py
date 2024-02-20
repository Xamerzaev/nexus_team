from aiogram import Bot, types, Dispatcher
from aiogram.dispatcher import FSMContext
from keyboards import get_confirm_edit_keyboard, get_edit_choice_keyboard
from states import Newsletter
from utils import newsletter_send

# Функция для обработки сообщения с темой рассылки
async def newsletter_message(message: types.Message, state: FSMContext):
    # Сохраняем тему рассылки в состоянии
    async with state.proxy() as data:
        data['subject'] = message.text
    # Переходим к следующему шагу
    await Newsletter.next()
    # Запрашиваем текст письма для рассылки
    await message.reply("Введите текст письма для рассылки:")

# Функция для изменения темы рассылки
async def newsletter_change_subject(message: types.Message, state: FSMContext):
    # Изменяем тему рассылки и сохраняем новую тему в состоянии
    async with state.proxy() as data:
        data['subject'] = message.text
    await newsletter_confirm(message, state)

# Функция для редактирования темы письма
async def edit_subject(query: types.CallbackQuery, state: FSMContext):
    # Устанавливаем состояние для редактирования темы рассылки
    await Newsletter.subject.set()
    dispatcher = Dispatcher.get_current()
    bot = dispatcher.bot
    # Отправляем запрос на ввод новой темы письма
    await bot.send_message(query.from_user.id, "📩 Введите новую тему письма:")

# Функция для редактирования текста письма
async def edit_message(query: types.CallbackQuery, state: FSMContext):
    # Устанавливаем состояние для редактирования текста рассылки
    await Newsletter.message.set()
    dispatcher = Dispatcher.get_current()
    bot = dispatcher.bot
    # Отправляем запрос на ввод нового текста письма
    await bot.send_message(query.from_user.id, "✍️ Введите новый текст письма:")

# Функция для подтверждения рассылки
async def newsletter_confirm(message: types.Message, state: FSMContext):
    # Сохраняем текст письма в состоянии
    async with state.proxy() as data:
        data['message'] = message.text
    # Отправляем сообщение с подтверждением рассылки и кнопками для дальнейших действий
    keyboard = get_confirm_edit_keyboard()
    await message.reply(f"📨 <b>Тема:</b> '{data['subject']}'\n\n<b>─────────────</b>\n\n📝 <b>Текст:</b>\n{data['message']}\n\nВыберите действие:", reply_markup=keyboard, parse_mode='HTML')

# Функция для выбора редактирования после подтверждения рассылки
async def newsletter_edit(query: types.CallbackQuery, state: FSMContext):
    dispatcher = Dispatcher.get_current()
    bot = dispatcher.bot
    await Newsletter.editing.set()
    # Отправляем запрос на выбор редактирования темы или текста
    keyboard = get_edit_choice_keyboard()
    await bot.send_message(query.from_user.id, "Что вы хотите редактировать? 🤔", reply_markup=keyboard)

# Функция для отправки рассылки и завершения работы с состоянием
async def confirm_callback(query: types.CallbackQuery, state: FSMContext):
    # Получаем данные из состояния
    async with state.proxy() as data:
        subject = data['subject']
        message_text = data['message']
    # Отправляем рассылку
    await newsletter_send(query.from_user.id, subject, message_text)
    await state.finish()
    # Отправляем сообщение об успешной отправке рассылки
    dispatcher = Dispatcher.get_current()
    bot = dispatcher.bot
    await bot.send_message(query.from_user.id, "Рассылка выполнена ✅")

# Регистрируем обработчики
def register_handlers(dp: Dispatcher):
    dp.register_message_handler(newsletter_message, state=Newsletter.subject)
    dp.register_message_handler(newsletter_change_subject, state=Newsletter.subject)
    dp.register_callback_query_handler(edit_subject, lambda query: query.data == "edit_subject", state=Newsletter.editing)
    dp.register_callback_query_handler(edit_message, lambda query: query.data == "edit_message", state=Newsletter.editing)
    dp.register_message_handler(newsletter_confirm, state=Newsletter.message)
    dp.register_callback_query_handler(newsletter_edit, lambda query: query.data == "edit", state=Newsletter.message)
    dp.register_callback_query_handler(confirm_callback, lambda query: query.data == "confirm", state=Newsletter.message)

