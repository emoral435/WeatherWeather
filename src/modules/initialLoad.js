// write a function that loads the dom elements with the proper attributes
import loading from "./loading"
import { elmnts } from "./makeWDisplay"
import geolocator from "./geolocatorAPI"

async function initialLoad() {
    // loading.toggle()
    elmnts()
    geolocator()
}

export default initialLoad