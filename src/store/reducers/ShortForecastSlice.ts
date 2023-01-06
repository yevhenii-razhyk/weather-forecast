import { createSlice } from "@reduxjs/toolkit";
import { IShortForecast } from "../../models/IShortForecast";
import { IWeatherError } from "../../models/IWeatherError";

interface ShortForecastState {
    shortForecast: IShortForecast;
    shortForecastIsLoading: boolean;
    shortForecastError: IWeatherError;
}

const initialState = {
    shortForecast: {},
    shortForecastIsLoading: false,
    shortForecastError: {}
} as ShortForecastState;

export const shortForecastSlice = createSlice({
    name: "short forecast",
    initialState,
    reducers: {
        shortForecastFetching(state) {
            state.shortForecastIsLoading = true;
        },
        shortForecastFetchingSucces(state, action) {
            state.shortForecastIsLoading = false;
            state.shortForecastError = {
                cod: "",
                message: "",
            };
            state.shortForecast = action.payload;
        },
        shortForecastFetchingError(state, action) {
            state.shortForecastIsLoading = false;
            state.shortForecastError = action.payload
        }
    }
});

export default shortForecastSlice.reducer;