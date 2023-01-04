// this function just calls and returns the promise object of data that contains data referring to the locations weather! :0
import check from "./checkSystem"
import errorToggle from "./errorToggle"

export default async function fetchData(url) {
    // try {
    //     let response = await fetch(url)
    //     let data = await response.json()
    //     return data
    // } catch (err) {
    //     console.log('the error is happening')
    //     errorToggle(true)
    //     let url = 'https://api.openweathermap.org/data/2.5/weather?q=Mexico&APPID=ff0a8ad948af191118bd4640bc45e3fe&' + check()
    //     return fetchData(url)
    // }
    let response;
    try {
        response = await fetch(url)
    } catch (err) {
        console.log('the error is happening')
    }
    if (!response.ok) {
        console.log('the error is happening')
        errorToggle(true)
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=Mexico&APPID=ff0a8ad948af191118bd4640bc45e3fe&' + check()
        return fetchData(url)
    } else {
        let data = await response.json()
        return data
    }
}