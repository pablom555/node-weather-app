const axios = require('axios');

const getWeather = async (lat, lng) => {

  try {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b034dd79a874eb2c6279d3322baa6f3e`);  
    return resp.data.main.temp

  } catch (error) {
    throw new Error(`The weather can not get, lat: ${lng} lng: ${lng}`)
  }

}

module.exports = {
  getWeather,
}
