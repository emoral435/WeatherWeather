// write a function that loads the dom elements with the proper attributes
import loading from "./loading"

export default function initialLoad() {
    loading.toggle()
    console.log('do not forget to finish the initialization process for loading where the user is at original location')
    loading.toggle()
    return 1
}