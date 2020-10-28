/*
    Functions to call the https://openweathermap.org api to get the weather data of that location.
*/

/*
    Note: Make sure to make interactions using the JSON format.
*/

const axios = require('axios')

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const API_KEY = process.env.OPEN_WEATHER_MAP_API || "13fe6c2601bd7c8549c14a35c7238aef";

/**
 *
 * @param {Object} location
 * @param {string} location.cityName
 * @param {string} [location.stateCode='']
 * @param {string} [location.countryCode='']
 * @returns {JSON}
 */
const GET_WEATHER = async ({ cityName, stateCode = '', countryCode = '' }) => {
    const url = `${BASE_URL}/weather?appid=${API_KEY}&q=${cityName},${stateCode},${countryCode}`
    let response = await axios.get(url)
    if (response) { response = JSON.parse(response) }
    return response
};

module.exports = GET_WEATHER
