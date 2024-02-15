import os

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import requests
import logging
import json
from dotenv import load_dotenv
load_dotenv()

from nexus.serializers import SubscriptionSerializer, ContactUsSerializer


logger = logging.getLogger('django.db.backends')


class SubscribeView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = SubscriptionSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ContactUsView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ContactUsSerializer(data=request.data)

        if serializer.is_valid():
            message = f"New contact form submission:\n\n{serializer.data}"
            send_telegram_message(message)
            return Response({'message': 'Form submitted successfully!'}, status=status.HTTP_201_CREATED)
        else:
            logger.warning("Invalid data received for contact form: %s", request.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def send_telegram_message(message):
    bot_token = os.getenv('TELEGRAM_BOT_TOKEN')
    chat_id = os.getenv('TELEGRAM_CHAT_ID')

    # Формируем inline-кнопку
    reply_markup = {
        "inline_keyboard": [[
            {"text": "Обработан", "callback_data": "processed"}
        ]]
    }

    if bot_token and chat_id:
        url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        data = {
            'chat_id': chat_id, 
            'text': message, 
            'reply_markup': json.dumps(reply_markup)
        }

        try:
            response = requests.post(url, json=data)
            response.raise_for_status()
            logger.info("Message successfully sent to Telegram.")
        except requests.exceptions.RequestException as e:
            logger.error("Failed to send message to Telegram. Error: %s", str(e))
    else:
        logger.warning("Telegram bot token or chat ID not configured.")
