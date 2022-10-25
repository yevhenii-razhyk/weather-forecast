import "./WeatherList.scss"
import dayjs from "dayjs";
import { ICurrentWeather } from "../../models/ICurrentWeather";
import { checkPositive } from "../../utils/checkPositive";
import WeatherItem from "../WeatherItem/WeatherItem";

interface WeatherListProps {
    currentWeather: ICurrentWeather
}

const WeatherList: React.FC<WeatherListProps> = ({currentWeather}) => {
    return (
        <ul className="weather-list">
            <WeatherItem icon={"wind"} text={"Wind"} value={`${currentWeather.wind.speed.toFixed(1)} m/s`}/>
            <WeatherItem icon={"humidity"} text={"Humidity"} value={`${currentWeather.main.humidity}%`}/>
            <WeatherItem icon={"cloudiness"} text={"Cloudiness"} value={`${currentWeather.clouds.all}%`}/>
            <WeatherItem icon={"thermometer"} text={"Temp"} value={`${checkPositive(Math.round(currentWeather.main.temp))}°C`}/>
            <WeatherItem icon={"sunrise"} text={"Sunrise"} value={dayjs(Number(currentWeather.sys.sunrise + "000")).format("HH:mm")}/>
            <WeatherItem icon={"sunset"} text={"Sunset"} value={dayjs(Number(currentWeather.sys.sunset + "000")).format("HH:mm")}/>
        </ul>
    )
} 

export default WeatherList;