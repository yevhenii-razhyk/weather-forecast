import axios from "axios";

const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
})

api.interceptors.request.use(config => {
    config.url = `${config.url}&appid=${process.env.REACT_APP_API_KEY}`;
    return config
})

export default api;