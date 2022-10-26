import ForecastListElem from "../../types/ForecastListElem";
import ForecastDetailValues from "../ForecastDetailValues/ForecastDetailValues";
import ForecastListItem from "../ForecastListItem/ForecastListItem";

import "./ForecastDetail.scss"

interface ForecastDetailProps {
    day: ForecastListElem[]
}

const ForecastDetail: React.FC<ForecastDetailProps> = ({day}) => {
    return (
        <div className="forecast-detail" style={{"gridTemplateColumns": `100px repeat(${day.length < 9 ? 8 : day.length}, 1fr)`}}>
            <ul className="forecast-detail__list">
                <ForecastListItem text={"Time"} marker={"text"}/>
                <ForecastListItem text={"unknown"} marker={"icon"}/>
                <ForecastListItem text={"Temp"} marker={"text"}/>
                <ForecastListItem text={"Feels like"} marker={"text"}/>
                <ForecastListItem text={"Pressure"} marker={"text"}/>
                <ForecastListItem text={"Humidity"} marker={"text"}/>
                <ForecastListItem text={"Cloudiness"} marker={"text"}/>
                <ForecastListItem text={"Wind"} marker={"text"}/>
                <ForecastListItem text={"Wind gust"} marker={"text"}/>
                <ForecastListItem text={"Precipitation"} marker={"text"}/>
            </ul>
            {
                day.map((hourForecast, idx) => (
                    <ForecastDetailValues key={idx} hourForecast={hourForecast}/>
                ))
            }
        </div>
    )
}

export default ForecastDetail;