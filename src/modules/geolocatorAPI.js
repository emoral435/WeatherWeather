export default function geolocator() {
    let optionSelect;
    const success = (position) => {
        optionSelect = {
            option: 1,
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
    }

    const error = (err) => {
        optionSelect = {
            option: 0
        }
    }
    navigator.geolocation.getCurrentPosition(success, error)
    return optionSelect
}