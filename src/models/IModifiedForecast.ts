import City from "../types/City";
import ForecastListElem from "../types/ForecastListElem";


export interface IModifiedForecast {
    cod: string;
    message: number | string;
    cnt: number;
    list: [ForecastListElem[]];
    city: City;
}