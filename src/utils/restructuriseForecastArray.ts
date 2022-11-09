export const restructuriseForecastArray = (data:any) => {
    let restructurisedArray:any = [[]];
    for (let j = 0, a = 0, b = 0; j < 40; j++) {
        restructurisedArray[a][b] = data[j];
        b++;
        if (new Date(+(data[j].dt + "000")).getHours() >= 21 && j !== 39) {
            restructurisedArray.push([])
            b = 0;
            a++;
        }
    }
    return restructurisedArray;
}