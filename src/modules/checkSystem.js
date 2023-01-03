export default function check() {
    let result = document.getElementById('check')
    if (result.innerHTML === '°F') {
        return 'units=imperial'
    } else {
        return 'units=metric'
    }
}