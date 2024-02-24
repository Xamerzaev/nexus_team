import re
from rest_framework import serializers
from django.core.validators import validate_email
from django.core.exceptions import ValidationError as DjangoValidationError


from nexus.models import Subscription


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = ['name', 'email']

    def validate_name(self, value):
        # Регулярное выражение для проверки имени
        if not re.match(r"^[а-яА-ЯёЁa-zA-Z\s'-]+$", value):
            raise serializers.ValidationError("Имя должно содержать только буквы, пробелы, дефисы")
        return value

    def validate_email(self, value):
        # Проверка корректности формата email
        try:
            validate_email(value)
        except DjangoValidationError:
            raise serializers.ValidationError("Некорректный формат email.")

        # Проверка на существование email в базе данных
        if Subscription.objects.filter(email=value).exists():
            raise serializers.ValidationError("Этот email уже используется!")

        return value

            


class ContactUsSerializer(serializers.Serializer):
    name = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    message = serializers.CharField(required=True)

    def validate_name(self, value):
        # Регулярное выражение для проверки имени
        if not re.match(r"^[а-яА-ЯёЁa-zA-Z\s'-]+$", value):
            raise serializers.ValidationError("Имя должно содержать только буквы, пробелы, дефисы!")
        return value
