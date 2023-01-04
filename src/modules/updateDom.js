// this function uses the fetch function we created, which is asynchronous, and then we make a factory function to make an object
// that only has the information we need. then we update the dom with what we need, and done!
import fetchData from "./fetchData"
import cleanedData from "./factoryFunction"
import { format ,fromUnixTime } from "date-fns"
import check from "./checkSystem"
import loading from "./loading"
import imgSrc from "./imgSrc"

export default async function updateDom(url) {
    let data = await fetchData(url)
    let clean = cleanedData(data)
    let area = document.getElementById('area')
    let main = document.getElementById('main')
    let currTemp = document.getElementById('currentTemp')
    let description = document.getElementById('description')
    let high = document.getElementById('high')
    let low = document.getElementById('low')
    let wind = document.getElementById('wind')
    let humidity = document.getElementById('humidity')
    let sunset = document.getElementById('sunset')
    let sunrise = document.getElementById('sunrise')
    area.textContent = clean.area
    main.textContent = clean.main
    currTemp.textContent = 'Currently ' + clean.currTemp + '°'
    description.textContent = clean.description
    high.textContent = 'High: ' + clean.tempMax + '°'
    low.textContent = 'Low: ' + clean.tempMin + '°' 
    let metric;
    if (check() == 'units=imperial') {
        metric = ' Miles / Hour'
    } else {
        metric = ' Meters / Hour'
    }
    wind.textContent = 'Wind Speed: ' + clean.wind + metric
    humidity.textContent = 'Humidity: ' + clean.humidity + ' %'
    sunset.textContent = (correctTime(clean.sunset))
    sunrise.textContent = (correctTime(clean.sunrise))
    imgSrc()
    loading.toggle()
}

// this function makes sure that the time is correctly formatted 'Hour: Minute AM/PM'
// the second parameter lets you decide whether its am/pm. true means that your formatting it for sunrise
function correctTime(unixTime, boolean) {
    let date = fromUnixTime(unixTime)
    let formated = format(date, 'K m')
    let arr = formated.split(' ')
    let newStr = arr[0] + ':' + arr[1]
    if (boolean) {
        return newStr += ' AM'
    } else {
        return newStr += ' PM'
    }
}