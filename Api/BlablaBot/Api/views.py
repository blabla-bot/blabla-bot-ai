from django.shortcuts import render
from django.http import HttpResponse
from .Generator.Generator import Generator


# Create your views here.
def generate_sentence(request):
    generator = Generator()
    generator.build_model()
    return HttpResponse(generator.generate())

