from flask import Flask
from flask import request
from flask import redirect

import cohere
import logging
import datetime
import pytz
from time import perf_counter

app = Flask(__name__)

co = cohere.Client('co9mRYxG05RI42Tn8aq3QI7I1W6OpcMxUdMZ9MtF')

logging.basicConfig(filename='app.log', level=logging.DEBUG)

def get_current_time():

    brazil_timezone = pytz.timezone('America/Sao_Paulo')

    current_time = datetime.datetime.utcnow()
    brazil_time = current_time.astimezone(brazil_timezone)
    brazil_time = brazil_time.strftime('%Y-%m-%d %H:%M:%S')

    return brazil_time


@app.route('/')
def hello_world():
	return 'Working World!'


@app.route('/predict/', methods=['POST'])
def model_predict():

    
    print('Started processing request')
    logging.debug(f'{get_current_time()} - Started processing request')
    
    start = perf_counter()

    try:
        
        request_json = request.get_json()
        content = request_json['content']
        logging.debug(f'{get_current_time()} - Received content: {content}')

    
    except Exception as ex:

        logging.debug(f'Unable to get content from request, {str(ex)}')
        return f'Unable to get content from request, {str(ex)}'

    response = co.generate(
        model='command',
        prompt=content,
        max_tokens=300,
        temperature=0.9,
        k=0,
        stop_sequences=[],
        return_likelihoods='NONE'
    )

    result = response.generations[0].text

    end = perf_counter()

    logging.debug(f'Model Response: {result}')
    logging.debug(f'{get_current_time()} - Request finished in {end-start:.2f} seconds')

    return result

if __name__ == '__main__':
    # app.run(host='0.0.0.0', port=8000, debug=True)
    app.run(debug=True)