from django.urls import path
from . import views

urlpatterns = [
    path("sentence", views.generate_sentence, name="api_sentence"),
    path("paragraph/<str:sentence_number>", views.generate_paragraph, name="api_paragraph"),
]
