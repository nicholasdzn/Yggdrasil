// pages/api/cohere.js

import axios from "axios";

export default async (req, res) => {
  const { prompt } = req.body;

  const options = {
    method: 'POST',
    url: 'https://api.cohere.ai/v1/generate',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer co9mRYxG05RI42Tn8aq3QI7I1W6OpcMxUdMZ9MtF',
    },
    data: {
      max_tokens: 20,
      truncate: 'END',
      return_likelihoods: 'NONE',
      prompt: prompt, 
    },
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data.generations[0].text);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
