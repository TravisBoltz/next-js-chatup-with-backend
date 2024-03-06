const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/search',
  params: {
    term: 'kiss the rain',
    locale: 'en-US',
    offset: '0',
    limit: '5'
  },
  headers: {
    'X-RapidAPI-Key': '7cd1408cedmsh661c44b8a5d1d33p1a0da4jsn806e9e2f8922',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}