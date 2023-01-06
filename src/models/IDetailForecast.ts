import ForecastListElem from "../types/ForecastListElem";
import City from "../types/City";

export interface IDetailForecast {
    cod: string,
    message: string | number,
    list: ForecastListElem[],
    city: City
}