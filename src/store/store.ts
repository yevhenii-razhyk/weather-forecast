import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from './reducers/CurrentWeatherSlice';
import city from "./reducers/CitySlice";
import forecastReducer from "./reducers/ForecastSlice"


const rootReducer = combineReducers({
    currentWeatherReducer,
    forecastReducer,
    city
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']