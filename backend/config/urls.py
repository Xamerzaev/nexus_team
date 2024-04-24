from django.urls import path, include


urlpatterns = [
    path('', include('nexus.urls')),
]
