interface WeatherItemProps {
    icon: string,
    text: string,
    value: string
}

const WeatherItem: React.FC<WeatherItemProps> = ({icon, text, value}) => {
    return(
        <li>
            <img src={require(`../../../assets/icons/${icon}.svg`)} alt=""/>
            <p>{text}</p>
            <span>{value}</span>
        </li>
    )
}

export default WeatherItem;