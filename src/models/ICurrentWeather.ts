import Coord from "../types/Coord";
import Weather from "../types/Weather";
import Main from "../types/Main";
import Wind from "../types/Wind";
import Clouds from "../types/Clouds";

type Sys = {
    country: string,
    sunrise: string,
    sunset: string,
}

export interface ICurrentWeather {
    coord: Coord,
    weather: Weather[],
    base: '',
    main: Main,
    visibility: number,
    wind: Wind,
    clouds: Clouds,
    dt: number,
    sys: Sys,
    timezone: number,
    id: number,
    name: '',
    cod: number,
}