import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getCurrentWeatherByZip: function(zipCode) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&appid=" + API_KEY)
    },

    getWeatherByCityAndState: function(cityAndState) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityAndState + "&appid=" + API_KEY)
    }
};

