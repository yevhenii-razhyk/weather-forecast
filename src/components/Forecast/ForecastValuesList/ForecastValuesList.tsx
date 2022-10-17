import "./ForecastValuesList.scss";
import ForecastListElem from "../../../types/ForecastListElem";
import dayjs from 'dayjs';

interface ForecastValuesListProps {
    hourForecast: ForecastListElem
}

const ForecastValuesList: React.FC<ForecastValuesListProps> = ({hourForecast}) => {
    return(
        <ul className="forecast-values-list">
            <li className="forecast-values-list__item">
                <span>{dayjs(Number(hourForecast.dt + "000")).format("HH:mm")}</span>
            </li>
            <li className="forecast-values-list__item">
                <img className="forecast-values-list__item-image" src={require(`../../../assets/icons/weather-icons/${hourForecast.weather[0].icon}.png`)} alt="" />
            </li>
            <li className="forecast-values-list__item">
                <span>{Math.round(hourForecast.main.temp)}°C</span>
            </li>
            <li className="forecast-values-list__item">
                <span>{Math.round(hourForecast.main.feels_like)}°C</span>
            </li>
            <li className="forecast-values-list__item">
                <span>{Math.round(hourForecast.main.pressure * 0.75)}mm</span>
            </li>
            <li className="forecast-values-list__item">
                <span>{hourForecast.main.humidity}%</span>
            </li>
            <li className="forecast-values-list__item">
                <span>{hourForecast.clouds.all}%</span>
            </li>
            <li className="forecast-values-list__item">
                <span>{hourForecast.wind.speed.toFixed(1)}m/s</span>
            </li>
            <li className="forecast-values-list__item">
                <span>{hourForecast.wind.gust.toFixed(1)}m/s</span>
            </li>
        </ul>
    )
}

export default ForecastValuesList