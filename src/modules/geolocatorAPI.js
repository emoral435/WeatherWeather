export default function geolocator() {
    const success = (position) => {
        console.log(position)
    }

    const error = (err) => {
        console.error(err)
    }

    navigator.geolocation.getCurrentPosition(success, error)
}