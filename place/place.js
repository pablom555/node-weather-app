const axios = require('axios');

const getPlacesLatLon = async (address) => {

  const encodedUrl = encodeURI(address)
  
  const resp = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodedUrl}&key=661cba12d74e4b669ceaacc01939e416`);

  if (resp.data.results.length === 0) {
    throw new Error(`There are not results for address: ${ address }`);
  }
  
  const data = resp.data.results[0];
  const dir = data.formatted
  const lat = data.geometry.lat
  const lng = data.geometry.lng

  return {
    dir,
    lat,
    lng,
  }
  
}

module.exports = {
  getPlacesLatLon,
}
