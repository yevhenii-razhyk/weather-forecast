import ForecastListElem from "../types/ForecastListElem";

export const minOrMaxTemp = (array: ForecastListElem[], marker: "min" | "max") => {
    let tempArray = array.map(item => {
        return Math.round(item.main.temp)
    })
    if (marker === "min") {
        return Math.min.apply(null, tempArray);
    } else {
        return Math.max.apply(null, tempArray);
    }
}