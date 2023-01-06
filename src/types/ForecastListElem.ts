import Main from "./Main";
import Weather from "./Weather";
import Clouds from "./Clouds";
import Wind from "./Wind";

type ForecastListElem = {
    dt: string,
    visibility: number,
    pop: number,
    dt_txt: string,
    main: Main,
    weather: Weather[],
    clouds: Clouds,
    wind: Wind,
    sys: {
        pod: string
    }
}

export default ForecastListElem;