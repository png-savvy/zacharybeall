axios = require('axios').default;

var token = ""
const options = {
  method: 'POST',
  url: 'https://bravenewcoin.p.rapidapi.com/oauth/token',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-key': 'c82e54e894mshf547db01668712dp16354ajsnf9b2b32ee16d',
    'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com'
  },
  data: {
    audience: 'https://api.bravenewcoin.com',
    client_id: 'oCdQoZoI96ERE9HY3sQ7JmbACfBf55RY',
    grant_type: 'client_credentials'
  }
};

axios.request(options).then(function (response) {
    token = response.data.access_token 

    const options = {
        method: 'GET',
        url: 'https://bravenewcoin.p.rapidapi.com/market-cap',
        params: {assetId: 'f1ff77b6-3ab4-4719-9ded-2fc7e71cff1f'},
        headers: {
          authorization: `Bearer ${token}`,
          'x-rapidapi-key': 'c82e54e894mshf547db01668712dp16354ajsnf9b2b32ee16d',
          'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
      	console.log(response.data);
      }).catch(function (error) {
      	console.error(error);
      });


}).catch(function (error) {
	console.error(error);
});

