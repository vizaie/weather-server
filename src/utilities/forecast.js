const request = require('request');

function forecast({ lat, lon }, callback) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4559b743bead197cfbb427ca001c6df9`;

  request.get({ url, json: true }, (error, response) => {
    if (error) {
      console.log('error occured');
      callback("Can't connect to weather service");
    } else if (response.body.cod === 400) {
      callback(response.body.message);
    } else {
      callback(undefined, response.body);
    }
  });
}

module.exports = forecast;
