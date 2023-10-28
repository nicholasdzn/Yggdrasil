import langdetect
from googletrans import Translator

class Translator:

    @staticmethod
    def detect_language(text: str) -> str:
        return langdetect.detect(text)
    
    @staticmethod
    def translate_text(text: str) -> str:
        return Translator().translate_text(text)


    