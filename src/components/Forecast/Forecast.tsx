import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import {useEffect} from 'react';

import dayjs from 'dayjs';

import ForecastDescriptionList from './ForecastDesctiptionList/ForecastDescriptionList';
import ForecastValuesList from './ForecastValuesList/ForecastValuesList';

import ForecastListElem from "../../types/ForecastListElem";

import "./Forecast.scss"
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchForecast } from '../../store/reducers/ForecastActionCreator';


const Forecast: React.FC = () => {

    const dispatch = useAppDispatch();
    const {forecast, isLoading, error} = useAppSelector(state => state.forecastReducer);
    const city = useAppSelector(state => state.city.city);

    useEffect(() => {
        dispatch(fetchForecast(city))
    }, [city]) 

    const getMinOrMaxTemp = (array: ForecastListElem[], marker: string) => {
        let tempArray = array.map(item => {
            return Math.round(item.main.temp)
        })
        if (marker === "min") {
            return Math.min.apply(null, tempArray);
        } else {
            return Math.max.apply(null, tempArray);
        }
    }

    return (
        <section className='forecast'>
            {isLoading &&
                <svg width="110" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity=".3" d="M110 55c0 30.376-24.624 55-55 55S0 85.376 0 55 24.624 0 55 0s55 24.624 55 55Zm-92.85 0c0 20.904 16.946 37.85 37.85 37.85S92.85 75.904 92.85 55 75.904 17.15 55 17.15 17.15 34.096 17.15 55Z" fill="#25C8A8"/>
                    <path d="M101.425 55c4.736 0 8.643-3.862 7.908-8.54A54.999 54.999 0 0 0 63.54.667C58.862-.068 55 3.84 55 8.575c0 4.736 3.887 8.478 8.502 9.542a37.843 37.843 0 0 1 18.262 10.119 37.85 37.85 0 0 1 10.119 18.262C92.947 51.113 96.689 55 101.425 55Z" fill="#25C8A8"/>
                </svg>
            }
            {error.cod && error.message ? 
                <div className="forecast__error">
                    <span className="forecast__error-cod">{error.cod}</span>
                    <p className="forecast__error-text">{error.message}</p>
                </div>: <></>
            }
            {!isLoading && !error.cod && forecast.cnt === 40 ? 
                <Accordion>
                    {forecast.list.map((day, idx) => (
                        <AccordionItem key={idx}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="forecast__short">
                                        <p className="forecast__short-date">
                                            <span className="forecast__short-date-day">{dayjs(Number(day[0].dt+ "000")).format("dddd, ")}</span>
                                            <span className="forecast__short-date-time">{dayjs(Number(day[0].dt + "000")).format("DD MMMM")}</span>
                                        </p>
                                        <p className="forecast__short-temp">
                                            <svg width="56" height="56" viewBox='0 0 56 56' fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M46.375 14.875a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25ZM40.25 17.5a6.125 6.125 0 1 1 12.25 0 6.125 6.125 0 0 1-12.25 0ZM26.25 5.25A5.25 5.25 0 0 0 21 10.5v21.656h-1.75l1.077 1.38a9.625 9.625 0 1 0 11.846 0 1.75 1.75 0 0 1-.673-1.38V10.5a5.25 5.25 0 0 0-5.25-5.25ZM17.5 31.34V10.5a8.75 8.75 0 0 1 17.5 0v20.84a13.125 13.125 0 1 1-17.5 0Z" fill="#2F90FF"/>
                                                <path d="M26.25 38.5a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Zm-6.125 2.625a6.125 6.125 0 1 1 12.25 0 6.125 6.125 0 0 1-12.25 0Z" fill="#2F90FF"/>
                                                <path d="M26.25 17.5c.966 0 1.75.784 1.75 1.75v17.5a1.75 1.75 0 1 1-3.5 0v-17.5c0-.966.784-1.75 1.75-1.75Z" fill="#2F90FF"/>
                                            </svg>
                                            <span className="forecast__short-temp-box">
                                                <span className="forecast__short-temp-box-value">{getMinOrMaxTemp(day, "min")} °C</span>
                                                <span className="forecast__short-temp-box-value">{getMinOrMaxTemp(day, "max")} °C</span>
                                            </span>
                                        </p>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="forecast__detail">
                                    <ForecastDescriptionList/>
                                    <div className="forecast__detail-values">
                                        {
                                            day.map((hourForecast, idx) => (
                                                <ForecastValuesList key={idx} hourForecast={hourForecast}/>
                                            ))
                                        }
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            : <></>}
        </section>
    )
}

export default Forecast;