// this function will handle the search query handling logic!
import loading from "./loading";
import makeUrl from "./makeUrl";
import updateDom from "./updateDom";
import errorToggle from "./errorToggle";

export default function search() {
    let query = document.getElementById('query');
    query.addEventListener('click', () => {
        errorToggle(false)
        let input = document.getElementById('location')
        let temp = input.value
        console.log('temp')
        console.log(makeUrl(temp))
        input.value = ''
        setTimeout( function() {
            loading.toggle()
        }, 0)
        updateDom(makeUrl(temp))
    })
    window.addEventListener('keyup', (e) => {
        e.preventDefault()
        if (e.key == 'Enter') {
            errorToggle(false)
            let input = document.getElementById('location')
            let temp = input.value
            console.log('temp')
            console.log(makeUrl(temp))
            input.value = ''
            setTimeout( function() {
                loading.toggle()
            }, 0)
            updateDom(makeUrl(temp))
        }
    })
}
