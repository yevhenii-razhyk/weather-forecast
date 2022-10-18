interface ForecastListItemProps {
    text: string,
    marker: string,
}

const ForecastListItem: React.FC<ForecastListItemProps> = ({text, marker}) => {
    return (
        <li className="forecast__detail-list-item">
            {marker === "text" 
            ?
                <span className="forecast__detail-list-item-text">{text}</span>
            :                 
                <img className="forecast__detail-list-item-image" src={require(`../../../assets/icons/weather-icons/${text}.png`)} alt="" />
            }
        </li>
    )
}

export default ForecastListItem;