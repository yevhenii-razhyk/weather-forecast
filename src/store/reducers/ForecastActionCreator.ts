import axios from "axios";
import { IForecast } from "../../models/IForecast";
import { AppDispatch } from "../store";
import { forecastSlice } from "./ForecastSlice";

const restructuriseArray = (data:any) => {
    let restructurisedArray:any = [[]];
    for (let j = 0, a = 0, b = 0; j < 40; j++) {
        restructurisedArray[a][b] = data[j];
        b++;
        if (new Date(+(data[j].dt + "000")).getHours() >= 21 && j != 39) {
            restructurisedArray.push([])
            b = 0;
            a++;
        }
    }
    return restructurisedArray;
}


export const fetchForecast = (city: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(forecastSlice.actions.forecastFetching());
        const response = await axios.get<IForecast>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=15329a0fa39b7a56125985c2de13197b`);
        dispatch(forecastSlice.actions.forecastFetchingSucces(Object.assign(response.data, {list: restructuriseArray(response.data.list)})))
    } catch (e: any) {
        dispatch(forecastSlice.actions.forecastFetchingError({cod: e.response.data.cod, message: e.response.data.message}))
    }
}

