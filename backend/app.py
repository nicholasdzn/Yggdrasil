import cohere
import logging
from flask import Flask, request

from Translator import Translator
from Utils import Utils
from Config import Config

logging.basicConfig(filename='app.log', level=logging.DEBUG)
co = cohere.Client('co9mRYxG05RI42Tn8aq3QI7I1W6OpcMxUdMZ9MtF')

app = Flask(__name__)

@app.route('/predict/', methods=['POST'])
def predict():

    start = Utils.perfect_counter()

    logging.debug(f'{Utils.get_current_time()} - Started processing request')
    
    try:
        
        request_json = request.get_json()

        content = request_json['content']
        
        logging.debug(f'{Utils.get_current_time()} - Received content: {content}')

    except Exception as ex:

        logging.debug(f'Unable to get content from request, {str(ex)}')

        return f'Unable to get content from request, {str(ex)}'
    
    detected_language = Translator.detect_language(content)
    
    if detected_language != 'en':
        logging.debug(f'Detected Language: {detected_language} - Converting to English')
        content = Translator.translate_text(content)
        logging.debug(f'Converted text: {content}')
         

    response = co.generate(
        model=Config.CohereDefaultModel.cohere_default_model_name,
        prompt=content,
        max_tokens=Config.CohereDefaultModel.max_tokens,
        temperature=Config.CohereDefaultModel.temperature,
        k=Config.CohereDefaultModel.k,
        stop_sequences=Config.CohereDefaultModel.stop_sequence,
        return_likelihoods=Config.CohereDefaultModel.return_likelihoods
    )

    result = response.generations[0].text
    logging.debug(f'Model Response: {result}')
    
    model_response_language = Translator.detect_language(result)

    if model_response_language != 'pt':
        logging.debug(f'Translating model response from {model_response_language} to Portuguese')
        result = Translator.translate(result, dest='pt')
    
    logging.debug(f'Final Response: {result}')

    end = Utils.perfect_counter()

    logging.debug(f'{Utils.get_current_time()} - Request finished in {end-start:.2f} seconds')

    return result

if __name__ == '__main__':
    # app.run(host='0.0.0.0', port=8000, debug=True)
    app.run(debug=True)