import {createSlice} from '@reduxjs/toolkit';

import { ICurrentWeather } from '../../models/ICurrentWeather';
import { IWeatherError } from '../../models/IWeatherError';

interface CurrentWeatherState {
    currentWeather: ICurrentWeather;
    isLoading: boolean;
    error: IWeatherError;
}

const initialState: CurrentWeatherState = {
    currentWeather: {
        coord: {
            lat: 0,
            lon: 0,
        },
        weather: [{
            description: "",
            icon: "unknown",
            id: 0,
            main: "",
        }],
        base: '',
        main: {
            feels_like: 0,
            grnd_level: 0,
            humidity: 0,
            pressure: 0,
            sea_level: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0,
        },
        visibility:	0,
        wind: {
            deg: 0,
            gust: 0,
            speed: 0,
        },
        clouds: {
            all: 0,
        },
        dt:	0,
        sys:	{
            country: "",
            sunrise: "",
            sunset: "",
        },
        timezone: 0,
        id: 0,
        name: "",
        cod: 0,
    },
    isLoading: false,
    error: {
        cod: "",
        message: "",
    },
}

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