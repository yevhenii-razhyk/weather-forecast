import "./ForecastListItem.scss"

interface ForecastListItemProps {
    text: string,
    marker: "text" | "icon",
}

const ForecastListItem: React.FC<ForecastListItemProps> = ({text, marker}) => {
    return (
        <li className="forecast-list-item">
            {marker === "text" 
            ?   <span className="forecast-list-item__text">{text}</span>
            :   <img className="forecast-list-item__image" src={require(`../../assets/icons/weather-icons/${text}.png`)} alt="" />
            }
        </li>
    )
}

export default ForecastListItem;