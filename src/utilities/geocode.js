const request = require('request');

function geocode(location, callback) {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    location +
    '.json?limit=1&access_token=pk.eyJ1Ijoidml6YWllIiwiYSI6ImNreDYwdGo3dDE3MmwzMG54aXVhb3lzOHIifQ.22ML5_eMBtNmhZuF1T5fpw';
  request.get({ url, json: true }, (error, response) => {
    if (error) {
      callback(error);
    } else if (response.body.features.length == 0) {
      callback('unable to find location. Please give a proper location.');
    } else {
      const lat = response.body.features[0].center[1];
      const long = response.body.features[0].center[0];
      console.log(lat);
      callback(undefined, { lat, long });
    }
  });
}

module.exports = geocode;
