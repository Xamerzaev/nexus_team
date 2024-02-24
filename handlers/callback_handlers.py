from aiogram import Dispatcher, types
from keyboards import get_processed_keyboard


# Обработчик callback от кнопки
async def process_callback(callback_query: types.CallbackQuery):
    message = callback_query.message
    callback_data = callback_query.data
    bot = callback_query.bot

    # Получаем соответствующую клавиатуру на основе callback_data
    keyboard = get_processed_keyboard(callback_data)

    await bot.edit_message_reply_markup(
        chat_id=message.chat.id, message_id=message.message_id, reply_markup=keyboard
    )


# Функция для регистрации обработчиков
def register_handlers(dp: Dispatcher):
    dp.register_callback_query_handler(
        process_callback, lambda c: c.data in ["processed", "cancel", "reset"]
    )
