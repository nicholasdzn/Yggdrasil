

class Config:


    class CohereDefaultModel:
        
        cohere_default_model_name: str = 'command'
        max_tokens: int = 300
        temperature: float = 0.9
        k: int = 0
        stop_sequence: list[str] = []
        return_likelihoods: str = 'NONE'
