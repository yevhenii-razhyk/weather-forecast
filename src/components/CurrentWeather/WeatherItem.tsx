interface WeatherItemProps {
    icon: string,
    text: string,
    value: string
}

const WeatherItem: React.FC<WeatherItemProps> = ({icon, text, value}) => {
    return(
        <li  className="weather-item">
            <img className="weather-item__image" src={require(`../../assets/icons/${icon}.svg`)} alt=""/>
            <p className="weather-item__text">{text}</p>
            <span className="weather-item__value">{value}</span>
        </li>
    )
}

export default WeatherItem;