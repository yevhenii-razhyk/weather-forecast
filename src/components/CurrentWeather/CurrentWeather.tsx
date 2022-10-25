import {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCurrentWeather } from '../../store/reducers/CurrentWeatherActionCreator';
import "./CurrentWeather.scss";
import Error from "../Error/Error"
import Loader from '../Loader/Loader';
import WeatherMain from '../WeatherMain/WeatherMain';
import WeatherList from '../WeatherList/WeatherList';

const CurrentWeather: React.FC = () => {

    const dispatch = useAppDispatch();
    const {currentWeather, isLoading, error} = useAppSelector(state => state.currentWeatherReducer);
    const city = useAppSelector(state => state.city.city);

    useEffect(() => {
        dispatch(fetchCurrentWeather(city))
    }, [city, dispatch])

    return (
        <div className="current-weather">
            <div className="current-weather__main">
                {error.cod && error.message ? <Error error={error}/> : <></>}
                {isLoading && <Loader color={"#FFF"}/>}
                {!isLoading && !error.cod && currentWeather.cod === 200 ? <WeatherMain currentWeather={currentWeather}/> :<></>
                }
            </div>
            <div className="current-weather__detail">
                {error.cod && error.message ? <Error error={error}/> : <></>}
                {isLoading && <Loader color={"#25C8A8"}/>}
                {!isLoading && !error.cod && currentWeather.cod === 200 ? <WeatherList currentWeather={currentWeather}/> :<></>
                }
            </div>
        </div>
    )
}

export default CurrentWeather