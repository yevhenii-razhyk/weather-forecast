import { IWeatherError } from "../../models/IWeatherError";

import "./Error.scss"

interface ErrorProps {
    error: IWeatherError
}

const Error: React.FC<ErrorProps> = ({error}) => {
    return (
        <div className="error">
            <span className="error__cod">{error.cod}</span>
            <p className="error__text">{error.message}</p>
        </div>
    )
}

export default Error;