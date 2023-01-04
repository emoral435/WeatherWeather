// this will make the url for you! as long as you have the string of the location
import check from "./checkSystem"

export default function makeUrl(location) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=ff0a8ad948af191118bd4640bc45e3fe&' + check()
    return url
}