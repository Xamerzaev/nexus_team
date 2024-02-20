from aiogram.dispatcher.filters.state import State, StatesGroup

class Newsletter(StatesGroup):
    subject = State()
    message = State()
    editing = State()

