import {createSlice} from '@reduxjs/toolkit';
import { IDetailForecast } from '../../models/IDetailForecast';
import { IWeatherError } from '../../models/IWeatherError';

interface ForecastState {
    forecast: IDetailForecast;
    isLoading: boolean;
    error: IWeatherError;
}

const initialState = {
    forecast: {},
    isLoading: false,
    error: {}
} as ForecastState;

export const forecastSlice = createSlice({
    name: "forecast",
    initialState,
    reducers: {
        forecastFetching(state) {
            state.isLoading = true;
        },
        forecastFetchingSucces(state, action) {
            state.isLoading = false;
            state.error = {
                cod: "",
                message: "",
            };
            state.forecast = action.payload;
        },
        forecastFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default forecastSlice.reducer;