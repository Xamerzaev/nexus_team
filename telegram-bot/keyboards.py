from aiogram import types

# Функция для создания клавиатуры стартового экрана
def get_start_keyboard():
    keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
    keyboard.add(types.KeyboardButton("/send_newsletter 📧 Send Newsletter"))  # Добавляем кнопку для отправки рассылки
    return keyboard

# Функция для создания клавиатуры подтверждения или редактирования
def get_confirm_edit_keyboard():
    keyboard = types.InlineKeyboardMarkup(row_width=2)
    confirm_button = types.InlineKeyboardButton("✅ Подтвердить", callback_data="confirm")  # Кнопка подтверждения
    edit_button = types.InlineKeyboardButton("📝 Редактировать", callback_data="edit")  # Кнопка редактирования
    keyboard.add(confirm_button, edit_button)
    return keyboard

# Функция для создания клавиатуры выбора редактирования (темы или текста)
def get_edit_choice_keyboard():
    keyboard = types.InlineKeyboardMarkup(row_width=2)
    edit_subject_button = types.InlineKeyboardButton("📩 Тема", callback_data="edit_subject")  # Кнопка выбора редактирования темы
    edit_message_button = types.InlineKeyboardButton("📝 Текст", callback_data="edit_message")  # Кнопка выбора редактирования текста
    keyboard.add(edit_subject_button, edit_message_button)
    return keyboard

# Функция для создания клавиатуры сообщения об успешной завершенной рассылке
def get_completed_keyboard():
    keyboard = types.InlineKeyboardMarkup()
    completed_button = types.InlineKeyboardButton(text="Рассылка выполнена ✅", callback_data="already_confirmed")  # Кнопка сообщения о завершении рассылки
    keyboard.add(completed_button)
    return keyboard

# Функция для создания клавиатуры с обработанным статусом
def get_processed_keyboard(message_text: str):
    if "Обработано ✅" not in message_text:
        message_text += "\nОбработано ✅"  # Добавляем статус обработки
    keyboard = types.InlineKeyboardMarkup()
    processed_button = types.InlineKeyboardButton(text="Обработано ✅", callback_data="processed")  # Кнопка обработанного статуса
    keyboard.add(processed_button)
    return keyboard, message_text
