import './style.css';
import initialLoad from './modules/initialLoad';
import check from './modules/checkSystem';
import fetchData from './modules/fetchData'; // delete this when done testing
import changeBtn from './modules/changeSystem'; // delete this when done testing

console.log({test: 'This is running wepack and tailwind, but this time bundled correctly!'})

// try to load where the are first located at 
initialLoad()
// this lets the button be able to change to either the metric system or the imperial system
changeBtn()

// this is the testing area! clean up for final production

let url = 'https://api.openweathermap.org/data/2.5/weather?q=Mexico&APPID=ff0a8ad948af191118bd4640bc45e3fe&' + check()
fetchData(url)