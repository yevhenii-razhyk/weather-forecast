import weatherbitApi from "../../axios/weatherbitApi";
import { IShortForecast } from "../../models/IShortForecast";
import { AppDispatch } from "../store";
import { shortForecastSlice } from "./ShortForecastSlice";

export const fetchShortForecast = (city: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(shortForecastSlice.actions.shortForecastFetching());
        const response = await weatherbitApi.get<IShortForecast>(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}`);
        dispatch(shortForecastSlice.actions.shortForecastFetchingSucces(response.data))
    } catch (e: any) {
        dispatch(shortForecastSlice.actions.shortForecastFetchingError({cod: e.code, message: e.message}))
    }
}