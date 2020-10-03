const { argv } = require('./config/yargs');
const { getPlacesLatLon } = require('./place/place');
const { getWeather } = require('./weather/weather');
const colors = require('colors');

getPlacesLatLon(argv.address)
  .then(response => { return getWeather(response.lat, response.lng) })
  .then(response => {
    console.log(' ')
    console.log(`The weather in ${argv.address.green} is ${colors.red(response)}°c`)
  })
  .catch(err => console.log(err))
