/*
    Functions to call the http://worldtimeapi.org/ api to get the time data of that location.
*/
import axios from 'axios';
/*
    Note: Make sure to make interactions using the JSON format.
*/

// TODO: API base url for http://worldtimeapi.org/
const BASE_URL = "http://worldtimeapi.org/api/timezone"
/*
    TODO: Query the endpoint for the json format of time data for the location.
    parameters : location, and anything else the endpoint requires.
    returns : processed json weather data
*/
const GET_TIME= async ({ area, location }) => {
    try {
    	let response = await axios.get(`${BASE_URL}/${area}/${location}`)
    	response = response && response.data;
    	return response;
    }
    catch (error) {
    	return error
    }
};

export default {
   GET_TIME
}
