import City from "../types/City";
import ForecastListElem from "../types/ForecastListElem";


export interface IForecast {
    cod: string;
    message: number | string;
    cnt: number;
    list: ForecastListElem[];
    city: City;
}