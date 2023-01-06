import dayjs from "dayjs";
import { checkPositive } from "../../utils/checkPositive";
import ForecastShortElem from "../../types/ForecastShortElem";

interface ForecastShortProps {
    day: ForecastShortElem
}

const ForecastShort: React.FC<ForecastShortProps> = ({day}) => {
    return (
        <div className="forecast-short">
            <p className="forecast-short__date">
                <span className="forecast-short__date-day">{dayjs(new Date(day.valid_date).getTime()).format("DD")}</span>
                <span>
                    <span className="forecast-short__date-day-of-week">{dayjs(new Date(day.valid_date).getTime()).format("dddd")}</span>
                    <span className="forecast-short__date-month">{dayjs(new Date(day.valid_date).getTime()).format("MMMM")}</span>
                </span>
            </p>
            <div className="forecast-short__info">
                <div>
                    <img className="forecast-short__info-status" src={require(`../../assets/icons/weather-icons/${day.weather.icon}.png`)} alt="" />
                    <span>{day.weather.description}</span>
                </div>
                <div>
                    <img className="forecast-short__info-wind" src={require("../../assets/icons/arrow.png")} style={{"transform": `rotate(${day.wind_dir}deg)`}} alt="" />
                    <span>{day.wind_spd} m/s</span>
                </div>
            </div>
            <p className="forecast-short__temp">
                <svg width="56" height="56" viewBox='0 0 56 56' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.375 14.875a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25ZM40.25 17.5a6.125 6.125 0 1 1 12.25 0 6.125 6.125 0 0 1-12.25 0ZM26.25 5.25A5.25 5.25 0 0 0 21 10.5v21.656h-1.75l1.077 1.38a9.625 9.625 0 1 0 11.846 0 1.75 1.75 0 0 1-.673-1.38V10.5a5.25 5.25 0 0 0-5.25-5.25ZM17.5 31.34V10.5a8.75 8.75 0 0 1 17.5 0v20.84a13.125 13.125 0 1 1-17.5 0Z" fill="#2F90FF"/>
                    <path d="M26.25 38.5a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Zm-6.125 2.625a6.125 6.125 0 1 1 12.25 0 6.125 6.125 0 0 1-12.25 0Z" fill="#2F90FF"/>
                    <path d="M26.25 17.5c.966 0 1.75.784 1.75 1.75v17.5a1.75 1.75 0 1 1-3.5 0v-17.5c0-.966.784-1.75 1.75-1.75Z" fill="#2F90FF"/>
                </svg>
                <span className="forecast-short__temp-box">
                    <span className="forecast-short__temp-box-value">{checkPositive(+(day.min_temp).toFixed())} °C<span> - min</span></span>
                    <span className="forecast-short__temp-box-value">{checkPositive(+(day.max_temp).toFixed())} °C<span> - max</span></span>
                </span>
            </p>
        </div>
    )
}

export default ForecastShort;