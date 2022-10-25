import {useEffect} from 'react';

import "./Forecast.scss"
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchForecast } from '../../store/reducers/ForecastActionCreator';
import Loader from '../Loader/Loader';
import Error from "../Error/Error"
import ForecastDaysList from '../ForecastDaysList/FocastsDaysList';


const Forecast: React.FC = () => {

    const dispatch = useAppDispatch();
    const {forecast, isLoading, error} = useAppSelector(state => state.forecastReducer);
    const city = useAppSelector(state => state.city.city);

    useEffect(() => {
        dispatch(fetchForecast(city))
    }, [city, dispatch]) 

    return (
        <section className='forecast'>
            {error.cod && error.message ? <Error error={error}/> : <></>}
            {isLoading && <Loader color={"#25C8A8"}/>}
            {!isLoading && !error.cod && forecast.cnt === 40 ? <ForecastDaysList list={forecast.list}/>: <></>}
        </section>
    )
}

export default Forecast;