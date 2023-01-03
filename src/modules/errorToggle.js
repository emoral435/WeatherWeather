// for content, the boolean value needs to be set to true so that we can first display the error, and then from there we can set the
// value to false to clean up the DOM!

export default function errorToggle(boolean) {
    let div = document.getElementById('div-error')
    let span = document.getElementById('error')
    if (boolean) {
        div.classList.add('active')
        span.classList.add('active')
        span.textContent = 'Error Found In Input, Please Enter Another Location'
    } else if (!boolean) {
        div.classList.remove('active')
        span.classList.remove('active')
        span.textContent = ''
    }
}