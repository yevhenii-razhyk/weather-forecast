import {useEffect} from 'react';

import "./Forecast.scss"
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchForecast } from '../../store/reducers/ForecastActionCreator';
import Loader from '../Loader/Loader';
import Error from "../Error/Error"
import ForecastDaysList from './FocastsDaysList';
import { restructuriseForecastArray } from '../../utils/restructuriseForecastArray';
import { fetchShortForecast } from '../../store/reducers/ShortForecastActionCreator';


const Forecast: React.FC = () => {

    const dispatch = useAppDispatch();
    const {forecast, isLoading, error} = useAppSelector(state => state.forecastReducer);
    const {shortForecast, shortForecastIsLoading, shortForecastError} = useAppSelector(state => state.shortForecastReducer)
    const city = useAppSelector(state => state.city.city);

    useEffect(() => {
        dispatch(fetchForecast(city));
        dispatch(fetchShortForecast(city))
    }, [city, dispatch])

    return (
        <section className='forecast'>
            {error.cod && error.message 
            ?   <div className='forecast__error'>
                    <p>Hourly forecast error</p>
                    <Error error={error}/>
                </div> 
            :   <></>}

            {shortForecastError.cod && shortForecastError.message 
            ?   <div className='forecast__error'>
                    <p>Daily forecast error</p>
                    <Error error={shortForecastError}/>
                </div>  
            :   <></>}

            {isLoading && shortForecastIsLoading ? <Loader color={"#25C8A8"} /> : <></>}
            {
                !isLoading && 
                !shortForecastIsLoading &&
                !error.cod && 
                !shortForecastError.cod &&
                forecast.cod === "200"  &&
                shortForecast.country_code 
                ? 
                    <ForecastDaysList list={(restructuriseForecastArray(forecast.list)).slice(0, 5)} shortList={shortForecast}/>
                :   <></>
            }
        </section>
    )
}

export default Forecast;