from django.urls import path

from nexus.views import SubscribeView, ContactUsView

urlpatterns = [
    path('api/subscribe/', SubscribeView.as_view(), name='subscribe'),
    path('api/contactus/', ContactUsView.as_view(), name='contactus'),
]
