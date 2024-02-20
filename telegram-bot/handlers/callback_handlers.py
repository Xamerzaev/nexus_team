from aiogram import Dispatcher, types
from keyboards import get_processed_keyboard  # Подключаем функцию создания клавиатуры
from logger import logger

# Глобальная переменная для отслеживания состояния кнопки
processed_clicked = False

# Обработчик callback от кнопки
async def process_callback(callback_query: types.CallbackQuery):
    try:
        message = callback_query.message
        message_text = message.text
        
        # Проверяем, было ли сообщение уже обработано
        if "Обработано ✅" not in message_text:
            keyboard, updated_message_text = get_processed_keyboard(message_text)
            
            # Обновляем сообщение с новым текстом и клавиатурой
            await message.edit_text(updated_message_text, reply_markup=keyboard)
            
            logger.info("Сообщение обработано для: %s", callback_query.from_user.id)
        else:
            # Если сообщение уже обработано, просто отвечаем пользователю
            await callback_query.answer("Кнопка уже была обработана")
    except Exception as e:
        logger.error("Ошибка при обработке callback: %s", str(e))

# Обработчик callback от кнопки, если кнопка уже была обработана
async def register_callback_handlers(callback_query: types.CallbackQuery):
    await callback_query.answer("Кнопка уже была обработана")

# Функция для регистрации обработчиков
def register_handlers(dp: Dispatcher):
    # Регистрируем обработчик для нажатия на кнопку, если она еще не была обработана
    dp.register_callback_query_handler(process_callback, lambda c: c.data == 'processed' and not processed_clicked)
    # Регистрируем обработчик для нажатия на кнопку, если она уже была обработана
    dp.register_callback_query_handler(register_callback_handlers, lambda c: c.data == 'processed' and processed_clicked)
