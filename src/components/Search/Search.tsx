import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useEffect} from 'react';

import "./Search.scss";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { citySearch } from '../../store/reducers/CitySliceActionCreator';
import { fetchCurrentWeather } from '../../store/reducers/CurrentWeatherActionCreator';

const schema = yup.object().shape({
    city: yup.string().required().min(2).max(50),
}).required();

const Search: React.FC = () => {

    const dispatch = useAppDispatch();

    const city = useAppSelector(state => state.city.city);

    const { register, handleSubmit, reset} = useForm({
        resolver: yupResolver(schema),
    });

    const strip = (str:string) => {
        return str.split(' ').filter(item => item).join(' ')
    }

    const changeSearchCity = (d: any) => {
        dispatch(citySearch(strip(d.city)));
        reset();
    }
    
    useEffect (() => {
        dispatch(fetchCurrentWeather(city))
    }, [city, dispatch])

    return (
        <form className="search" onSubmit={handleSubmit(d => changeSearchCity(d))}>
            <input 
                className="search__input" 
                placeholder="City"
                {...register("city")}
                type="text"
            />
            <button className="search__button" type="submit">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="#2F90FF" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5m0-2C5.1 2 2 5.1 2 9s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"/>
                    <path d="M22 20.3 20.3 22 14 15.7V14h1.7z"/>
                    <path d="m12.693 13.574.849-.848 2.545 2.545-.848.849z"/>
                </svg>
            </button>
        </form>
    )
}

export default Search;