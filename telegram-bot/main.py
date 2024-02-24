import logging

from aiogram import Bot, Dispatcher, executor
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.contrib.middlewares.logging import LoggingMiddleware

from data import config
from handlers import callback_handlers, newsletter, start

logging.basicConfig(level=logging.INFO)
bot = Bot(token=config.API_TOKEN)
dp = Dispatcher(bot, storage=MemoryStorage())

dp.middleware.setup(LoggingMiddleware())

# Регистрация обработчиков
start.register_handlers(dp)
newsletter.register_handlers(dp)
callback_handlers.register_handlers(dp)

if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True)

