import {createSlice} from '@reduxjs/toolkit';

import { ICurrentWeather } from '../../models/ICurrentWeather';
import { IWeatherError } from '../../models/IWeatherError';

interface CurrentWeatherState {
    currentWeather: ICurrentWeather;
    isLoading: boolean;
    error: IWeatherError;
}

const initialState = {
    currentWeather: {},
    isLoading: false,
    error: {},
} as CurrentWeatherState;

export const currentWeatherSlice = createSlice({
    name: 'current weather',
    initialState,
    reducers: {
        weatherFetching(state) {
            state.isLoading = true;
        },
        weatherFetchingSucces(state, action) {
            state.isLoading = false;
            state.error = {
                cod: "",
                message: "",
            };
            state.currentWeather = action.payload;
        },
        weatherFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default currentWeatherSlice.reducer;