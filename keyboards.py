from aiogram import types


# Функция для создания клавиатуры стартового экрана
def get_start_keyboard():
    keyboard = types.ReplyKeyboardMarkup(
        resize_keyboard=True, one_time_keyboard=True)
    keyboard.add(types.KeyboardButton("📧 Рассылка"))
    return keyboard


# Функция для создания клавиатуры подтверждения или редактирования
def get_confirm_edit_keyboard():
    keyboard = types.InlineKeyboardMarkup(row_width=2)
    confirm_button = types.InlineKeyboardButton(
        "✅ Подтвердить", callback_data="confirm"
    )  # Кнопка подтверждения
    edit_button = types.InlineKeyboardButton(
        "📝 Редактировать", callback_data="edit"
    )  # Кнопка редактирования
    cancel_button = types.InlineKeyboardButton(
        "❌ Отменить", callback_data="exit"
    )  # Кнопка для отмены
    keyboard.add(confirm_button, edit_button, cancel_button)
    return keyboard


# Функция для создания клавиатуры выбора редактирования (темы или текста)
def get_edit_choice_keyboard():
    keyboard = types.InlineKeyboardMarkup(row_width=2)
    edit_subject_button = types.InlineKeyboardButton(
        "📩 Тема", callback_data="edit_subject"
    )  # Кнопка выбора редактирования темы
    edit_message_button = types.InlineKeyboardButton(
        "📝 Текст", callback_data="edit_message"
    )  # Кнопка выбора редактирования текста
    keyboard.add(edit_subject_button, edit_message_button)
    return keyboard


# Функция для создания клавиатуры сообщения об успешной завершенной рассылке
def get_completed_keyboard():
    keyboard = types.InlineKeyboardMarkup()
    completed_button = types.InlineKeyboardButton(
        text="Рассылка выполнена ✅", callback_data="already_confirmed"
    )  # Кнопка сообщения о завершении рассылки
    keyboard.add(completed_button)
    return keyboard


# Функция для создания клавиатуры с обработанным статусом
def get_processed_keyboard(callback_data):
    keyboard = types.InlineKeyboardMarkup()

    if callback_data == "processed":
        # меняет на "Обработано ✅" уже полученную с Post запроса кнопку
        button = types.InlineKeyboardButton(
            text="Обработано ✅", callback_data="cancel"
        )
    elif callback_data == "cancel":
        # меняет на кнопку на "Отмена"
        button = types.InlineKeyboardButton(
            text="Отмена", callback_data="reset")
    else:
        # Возвращает к исходному состоянию "Обработано"
        button = types.InlineKeyboardButton(
            text="Обработано", callback_data="processed"
        )

    keyboard.add(button)
    return keyboard
