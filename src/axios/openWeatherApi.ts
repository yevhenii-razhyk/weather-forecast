import axios from "axios";

const openWeatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
})

openWeatherApi.interceptors.request.use(config => {
    config.url = `${config.url}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
    return config
})

export default openWeatherApi;