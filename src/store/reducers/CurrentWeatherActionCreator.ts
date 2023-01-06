import openWeatherApi from "../../axios/openWeatherApi";
import { ICurrentWeather } from "../../models/ICurrentWeather";
import { AppDispatch } from "../store";
import {currentWeatherSlice} from "./CurrentWeatherSlice"

export const fetchCurrentWeather = (city: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.weatherFetching())
        const response = await openWeatherApi.get<ICurrentWeather>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`);
        dispatch(currentWeatherSlice.actions.weatherFetchingSucces(response.data))
    } catch (e: any) {
        dispatch(currentWeatherSlice.actions.weatherFetchingError({cod: e.response.data.cod, message: e.response.data.message}))
    }
}