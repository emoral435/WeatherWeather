export default function imgSrc() {
    let image = document.getElementById('addImg')
    let main = document.getElementById('main').innerHTML
    let description = document.getElementById('description').innerHTML
    let src = 'http://openweathermap.org/img/wn/'
    if (main == 'Thunderstorm') {
        src += '11d@2x.png'
    } else if (main == 'Drizzle') {
        src += '09d@2x.png'
    } else if (main == 'Rain'){
        if (description == 'freezing rain') {
            src += '13d@2x.png'
        } else if (description == 'light intensity shower rain' || description == 'shower rain' || description == 'heavy intensity shower rain' || description == 'ragged shower rain') {
            src += '09d@2x.png'
        } else {
            src += '10d@2x.png'
        }
    } else if (main == 'Snow') {
        src += '13d@2x.png'
    } else if (main == 'Mist' || main == 'Smoke' || main == 'Haze' || main == 'Dust' || main == 'Fog' || main == 'Sand' || main == 'Dust' || main == 'Ash' || main == 'Squall' || main == 'Tornado') {
        src += '50d@2x.png'
    } else if (main == 'Clear') {
        src += '01d@2x.png'
    } else if (main == 'Clouds') {
        src += '02d@2x.png'
    }
    image.src = src
}