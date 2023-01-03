import check from "./checkSystem";
import updateDom from "./updateDom";

export default function geolocator() {
    let optionSelect;
    const success = (position) => {
        let lat = position.coords.latitude
        let lng = position.coords.longitude
        let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=ff0a8ad948af191118bd4640bc45e3fe&' + check()
        updateDom(url)
    }

    const error = (err) => {
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=Mexico&APPID=ff0a8ad948af191118bd4640bc45e3fe&' + check()
        updateDom(url)
    }
    navigator.geolocation.getCurrentPosition(success, error)
}