import markovify
from pathlib import Path


class Generator:

    def __init__(self, data_path="data.txt", model_name="model.json"):
        self.__text = ""
        self.__text_model = None

        self.load_training_data(data_path)
        self.__model_name = model_name

    def build_model(self):
        model_saved = Path(self.__model_name)

        if model_saved.is_file():
            self.load_model()
            print("Loading from cache")
        else:
            self.__text_model = markovify.Text(self.__text)
            self.save_model()
            print("Saving to cache")

    def generate(self):
        return self.__text_model.make_sentence()

    def save_model(self):
        with open(self.__model_name, 'w') as file:
            file.write(self.__text_model.to_json())

    def load_model(self):
        with open(self.__model_name, 'r') as file:
            self.__text_model = markovify.Text.from_json(file.read())

    def load_training_data(self, path):
        with open(path, encoding="utf8") as f:
            self.__text = f.read()


if __name__ == "__main__":
    generator = Generator()
    generator.build_model()
    print(generator.generate())
