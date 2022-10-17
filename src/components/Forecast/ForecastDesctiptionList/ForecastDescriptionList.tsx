import ForecastDescriptionItem from "./ForecastDescriptionItem/ForecastDescriptionItem"
import "./ForecastDescriptionList.scss"

const ForecastDescriptionList: React.FC = () => {
    return (
        <ul className="forecast-description-list">
            <ForecastDescriptionItem icon={"time"} text={"Time"}/>
            <ForecastDescriptionItem icon={"unknown"} text={"Icon"}/>
            <ForecastDescriptionItem icon={"thermometer"} text={"Temp"}/>
            <ForecastDescriptionItem icon={"feels-like"} text={"Feels like"}/>
            <ForecastDescriptionItem icon={"pressure"} text={"Pressure"}/>
            <ForecastDescriptionItem icon={"humidity"} text={"Humidity"}/>
            <ForecastDescriptionItem icon={"cloudiness"} text={"Cloudiness"}/>
            <ForecastDescriptionItem icon={"wind"} text={"Wind"}/>
            <ForecastDescriptionItem icon={"wind-gust"} text={"Wind gust"}/>
        </ul>
    )
}

export default ForecastDescriptionList