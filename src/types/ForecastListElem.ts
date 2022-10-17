import Clouds from "./Clouds";
import Main from "./Main";
import Weather from "./Weather";
import Wind from "./Wind";

type ForecastListElem = {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: {
        pod: string;
    }
    dt_txt: string; 
}

export default ForecastListElem;