import {createSlice} from '@reduxjs/toolkit';
import { IModifiedForecast } from '../../models/IModifiedForecast';
import { IWeatherError } from '../../models/IWeatherError';

interface ForecastState {
    forecast: IModifiedForecast;
    isLoading: boolean;
    error: IWeatherError;
}

const initialState: ForecastState = {
    forecast: {
        cod: "",
        message: 0,
        cnt: 0,
        list: [[]],
        city: {
            id: 0,
            name: "",
            coord: {
                lat: 0,
                lon: 0,
            },
            country: "",
            population: 0,
            timezone: 0,
            sunrise: 0,
            sunset: 0,
        }
    },
    isLoading: false,
    error: {
        cod: "",
        message: "",
    },
}

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