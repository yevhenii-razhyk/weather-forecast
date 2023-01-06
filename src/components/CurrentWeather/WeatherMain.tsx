import { ICurrentWeather } from "../../models/ICurrentWeather";
import { checkPositive } from "../../utils/checkPositive";
import dayjs from "dayjs";

interface WeatherMainProps {
    currentWeather: ICurrentWeather
}

const WeatherMain: React.FC<WeatherMainProps> = ({currentWeather}) => {
    return (
        <div className="weather-main">
            <img className="weather-main__image" src={require(`../../assets/icons/weather-icons/${currentWeather.weather[0].icon}.png`)} alt=""/>
            <span className="weather-main__temp">{checkPositive(Math.round(currentWeather.main.temp))}°C</span>
            <span className="weather-main__city">{`${currentWeather.name}, ${currentWeather.sys.country}`}</span>
            <span className="weather-main__date">
                <span className="weather-main__date-day">{dayjs().format("DD dddd, ")}</span>
                <span className="weather-main__date-time">{dayjs().format("HH:mm")}</span>
            </span>
        </div>
    )
}

export default WeatherMain;