const loading = (() => {
    let spinner = document.querySelector('.spinner-centering')
    let overlay = document.getElementById('overlay')
    const toggle = () => {
        spinner.classList.toggle('active')
        overlay.classList.toggle('active')
    }
    return {
        toggle
    }
})()

export default loading