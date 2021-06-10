axios = require('axios').default;
// import axios from "axios";
function get_price() {

  var token = ""
  // Request Token
  const auth_response = {
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

axios.request(auth_response).then(function (auth_response) {
    token = auth_response.data.access_token 

    // Use Token to get price
    const coin_info_options = {
        method: 'GET',
        url: 'https://bravenewcoin.p.rapidapi.com/market-cap',
        params: {assetId: '7bb2339e-b6eb-408c-836f-2894c8751c6d'},
        headers: {
          authorization: `Bearer ${token}`,
          'x-rapidapi-key': 'c82e54e894mshf547db01668712dp16354ajsnf9b2b32ee16d',
          'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com'
        }
      };
      
      axios.request(coin_info_options).then( response => {
        doge_price = response.data.content[0].price

        // document.write(doge_price)
        // document.write(doge_price)
        // document.getElementById('doge_price').innerHTML = doge_price;
        
        return doge_price
      }).then(doge_price => {
          console.log(doge_price)
          const html =  `<p>${doge_price}</p>`;   
          // document.querySelector("#doge_price").insertAdjacentHTML("afterbegin",html)
      }).catch(function (error) {
      	console.error(error);
      });

}).catch(function (error) {
	console.error(error);
});
}

get_price();
