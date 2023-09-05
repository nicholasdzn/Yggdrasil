import datetime
import pytz
from time import perf_counter


class Utils:

    @staticmethod
    def get_current_time() -> str:

        brazil_timezone = pytz.timezone('America/Sao_Paulo')

        current_time = datetime.datetime.utcnow()
        brazil_time = current_time.astimezone(brazil_timezone)
        brazil_time = brazil_time.strftime('%Y-%m-%d %H:%M:%S')

        return brazil_time
    
    def perfect_counter() -> float:
        return perf_counter()