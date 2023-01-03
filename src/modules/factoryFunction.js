const cleanDataFactory = (area, main, currTemp, description, tempMin, tempMax, wind, humidity, sunset, sunrise) => {
    return {
        area,
        main,
        currTemp,
        description,
        tempMin,
        tempMax,
        wind,
        humidity,
        sunset,
        sunrise
    }
}

const cleanedData = (fetchedObject) => {
    let area = fetchedObject.name
    let main = fetchedObject.weather[0].main
    let currTemp = fetchedObject.main.temp
    let description = fetchedObject.weather[0].description
    let tempMin = fetchedObject.main.temp_min
    let tempMax = fetchedObject.main.temp_max
    let wind = fetchedObject.wind.speed
    let humidity = fetchedObject.main.humidity
    let sunset = fetchedObject.sys.sunset
    let sunrise = fetchedObject.sys.sunrise
    return cleanDataFactory(area, main, currTemp, description, tempMin, tempMax, wind, humidity, sunset, sunrise)
}

export default cleanedData