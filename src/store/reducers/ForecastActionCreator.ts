import openWeather from "../../axios/openWeatherApi";
import { IDetailForecast } from "../../models/IDetailForecast";
import { AppDispatch } from "../store";
import { forecastSlice } from "./ForecastSlice";

export const fetchForecast = (city: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(forecastSlice.actions.forecastFetching());
        const response = await openWeather.get<IDetailForecast>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric`);
        dispatch(forecastSlice.actions.forecastFetchingSucces(response.data))
    } catch (e: any) {
        dispatch(forecastSlice.actions.forecastFetchingError({cod: e.response.data.cod, message: e.response.data.message}))
    }
}

