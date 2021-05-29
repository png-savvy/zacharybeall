axios = require('axios').default;

const options = {
    method: 'GET',
    url: 'https://bravenewcoin.p.rapidapi.com/asset',
    params: {symbol: 'DOGE', status: 'ACTIVE'},
    headers: {
      'x-rapidapi-key': 'c82e54e894mshf547db01668712dp16354ajsnf9b2b32ee16d',
      'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });