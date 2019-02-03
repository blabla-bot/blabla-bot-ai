from django.shortcuts import render
from django.http import HttpResponse
from .Generator.Generator import Generator


# Create your views here.
def generate_sentence(request):
    generator = Generator()
    generator.build_model()
    return HttpResponse(generator.generate(1)[0])


def generate_paragraph(request, sentence_number=6):
    generator = Generator()
    generator.build_model()

    sentences = generator.generate(int(sentence_number))

    return HttpResponse(" ".join(sentences))
