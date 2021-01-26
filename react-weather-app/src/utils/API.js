import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getCurrentWeatherByZip: function(zipCode) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&appid=70119e630a796a4d1afeaa38cf356a28")
    },

    getWeatherByCityAndState: function(cityAndState) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityAndState + "&appid=70119e630a796a4d1afeaa38cf356a28")
    }
};

