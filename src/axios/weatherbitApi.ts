import axios from "axios";

const weatherbitApi = axios.create({
    baseURL: "https://api.weatherbit.io/v2.0",
})

weatherbitApi.interceptors.request.use(config => {
    config.url = `${config.url}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`;
    return config
})

export default weatherbitApi;