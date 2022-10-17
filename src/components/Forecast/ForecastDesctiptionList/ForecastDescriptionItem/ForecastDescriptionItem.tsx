import "./ForecastDescriptionItem.scss"

interface ForecastDescriptionItemProps {
    icon: string,
    text: string,
}

const ForecastDescriptionItem: React.FC<ForecastDescriptionItemProps> = ({icon, text}) => {
    return (
        <li className="forecast-description-list-item">
            <img src={require(`../../../../assets/icons/${icon}.svg`)} alt="" />
            <span>{text}</span>
        </li>
    )
}

export default ForecastDescriptionItem;