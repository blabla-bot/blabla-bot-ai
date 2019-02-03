from django.urls import path
from . import views

urlpatterns = [
    path("sentence", views.generate_sentence, name="api_sentence"),
]
