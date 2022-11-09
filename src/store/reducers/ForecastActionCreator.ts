import api from "../../axios";
import { IForecast } from "../../models/IForecast";
import { restructuriseForecastArray } from "../../utils/restructuriseForecastArray";
import { AppDispatch } from "../store";
import { forecastSlice } from "./ForecastSlice";

export const fetchForecast = (city: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(forecastSlice.actions.forecastFetching());
        const response = await api.get<IForecast>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric`);
        dispatch(forecastSlice.actions.forecastFetchingSucces(Object.assign(response.data, {list: restructuriseForecastArray(response.data.list)})))
    } catch (e: any) {
        dispatch(forecastSlice.actions.forecastFetchingError({cod: e.response.data.cod, message: e.response.data.message}))
    }
}

