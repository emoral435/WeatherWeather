export default function changeBtn() {
    let button = document.getElementById('check')
    button.addEventListener('click', () => {
        if (button.innerHTML == '°F') {
            button.innerHTML = '°C'
        } else {
            button.innerHTML = '°F'
        }
    })
}