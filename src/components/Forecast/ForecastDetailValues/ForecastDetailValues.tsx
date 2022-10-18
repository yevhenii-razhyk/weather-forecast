import dayjs from "dayjs";

import ForecastListElem from "../../../types/ForecastListElem";

import ForecastListItem from "../ForecastListItem/ForecastListItem";

interface ForecastValuesListProps {
    hourForecast: ForecastListElem
}

const ForecastDetailValues: React.FC<ForecastValuesListProps> = ({hourForecast}) => {
    return (
        <ul className="forecast__detail-list">
            <ForecastListItem text={dayjs(Number(hourForecast.dt + "000")).format("HH:mm")} marker={"text"}/>
            <ForecastListItem text={hourForecast.weather[0].icon} marker={"icon"}/>
            <ForecastListItem text={Math.round(hourForecast.main.temp) + "°C"} marker={"text"}/>
            <ForecastListItem text={Math.round(hourForecast.main.feels_like) + "°C"} marker={"text"}/>
            <ForecastListItem text={Math.round(hourForecast.main.pressure * 0.75) + "mm"} marker={"text"}/>
            <ForecastListItem text={hourForecast.main.humidity + "%"} marker={"text"}/>
            <ForecastListItem text={hourForecast.clouds.all + "%"} marker={"text"}/>
            <ForecastListItem text={hourForecast.wind.speed.toFixed(1) + "m/s"} marker={"text"}/>
            <ForecastListItem text={hourForecast.wind.gust.toFixed(1) + "m/s"} marker={"text"}/>
        </ul>
    )
}

export default ForecastDetailValues;