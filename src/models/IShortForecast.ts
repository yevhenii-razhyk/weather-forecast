import ForecastShortElem from "../types/ForecastShortElem";

export interface IShortForecast {
    city_name: string,
    country_code: string,
    data: ForecastShortElem[],
    lat: string,
    lon: string,
    state_code: string,
    timezone: string
}