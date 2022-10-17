import {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCurrentWeather } from '../../store/reducers/CurrentWeatherActionCreator';
import "./CurrentWeather.scss";
import WeatherItem from "./WeatherItem/WeatherItem";
import Error from "../Error/Error"
import dayjs from 'dayjs';

const CurrentWeather: React.FC = () => {

    const dispatch = useAppDispatch();
    const {currentWeather, isLoading, error} = useAppSelector(state => state.currentWeatherReducer);
    const city = useAppSelector(state => state.city.city);

    useEffect(() => {
        dispatch(fetchCurrentWeather(city))
    }, [city])

    return (
        <div className="current-weather">
            <div className="current-weather__main">
                {error.cod && error.message ? <Error error={error}/> : <></>}
                {isLoading && 
                    <svg width="110" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity=".3" d="M110 55c0 30.376-24.624 55-55 55S0 85.376 0 55 24.624 0 55 0s55 24.624 55 55Zm-92.85 0c0 20.904 16.946 37.85 37.85 37.85S92.85 75.904 92.85 55 75.904 17.15 55 17.15 17.15 34.096 17.15 55Z" fill="#FFF"/>
                        <path d="M101.425 55c4.736 0 8.643-3.862 7.908-8.54A54.999 54.999 0 0 0 63.54.667C58.862-.068 55 3.84 55 8.575c0 4.736 3.887 8.478 8.502 9.542a37.843 37.843 0 0 1 18.262 10.119 37.85 37.85 0 0 1 10.119 18.262C92.947 51.113 96.689 55 101.425 55Z" fill="#FFF"/>
                    </svg>
                }
                {!isLoading && !error.cod && currentWeather.cod === 200 ?
                    <div className="current-weather__main-info">
                        <img className="current-weather__main-image" src={require(`../../assets/icons/weather-icons/${currentWeather.weather[0].icon}.png`)} alt=""/>
                        <span className="current-weather__main-temp">{Math.round(currentWeather.main.temp)}°C</span>
                        <span className="current-weather__main-city">{currentWeather.name}</span>
                        <span className="current-weather__main-date">
                            <span className="current-weather__main-date-day">{dayjs(Number(currentWeather.dt + "000")).format("dddd, ")}</span>
                            <span className="current-weather__main-date-time">{dayjs().format("HH:mm")}</span>
                        </span>
                    </div>:<></>
                }
            </div>
            <div className="current-weather__detail">
                {error.cod && error.message ? <Error error={error}/> : <></>}
                {isLoading && 
                    <svg width="110" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity=".3" d="M110 55c0 30.376-24.624 55-55 55S0 85.376 0 55 24.624 0 55 0s55 24.624 55 55Zm-92.85 0c0 20.904 16.946 37.85 37.85 37.85S92.85 75.904 92.85 55 75.904 17.15 55 17.15 17.15 34.096 17.15 55Z" fill="#25C8A8"/>
                        <path d="M101.425 55c4.736 0 8.643-3.862 7.908-8.54A54.999 54.999 0 0 0 63.54.667C58.862-.068 55 3.84 55 8.575c0 4.736 3.887 8.478 8.502 9.542a37.843 37.843 0 0 1 18.262 10.119 37.85 37.85 0 0 1 10.119 18.262C92.947 51.113 96.689 55 101.425 55Z" fill="#25C8A8"/>
                    </svg>
                }
                {!isLoading && !error.cod && currentWeather.cod === 200 ?
                    <ul className="current-weather__detail-list">
                        <WeatherItem icon={"wind"} text={"Wind"} value={`${currentWeather.wind.speed.toFixed(1)} m/s`}/>
                        <WeatherItem icon={"humidity"} text={"Humidity"} value={`${currentWeather.main.humidity}%`}/>
                        <WeatherItem icon={"cloudiness"} text={"Cloudiness"} value={`${currentWeather.clouds.all}%`}/>
                        <WeatherItem icon={"thermometer"} text={"Temp"} value={`${Math.round(currentWeather.main.temp)}°C`}/>
                        <WeatherItem icon={"sunrise"} text={"Sunrise"} value={dayjs(Number(currentWeather.sys.sunrise + "000")).format("HH:mm")}/>
                        <WeatherItem icon={"sunset"} text={"Sunset"} value={dayjs(Number(currentWeather.sys.sunset + "000")).format("HH:mm")}/>
                    </ul>:<></>
                }
            </div>
        </div>
    )
}

export default CurrentWeather