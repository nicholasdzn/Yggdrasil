import axios from 'axios';

const apiUrl = 'https://api.cohere.ai/v1/generate';

const generateText = async (userPrompt) => {
    const options = {
        method: 'POST',
        url: apiUrl,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer co9mRYxG05RI42Tn8aq3QI7I1W6OpcMxUdMZ9MtF'
        },
        data: {
            truncate: 'END',
            return_likelihoods: 'NONE',
            prompt: userPrompt
        }
    };

    try {
        const response = await axios.request(options);
        return response.data.generations[0].text;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default generateText;
