// this function uses the fetch function we created, which is asynchronous, and then we make a factory function to make an object
// that only has the information we need. then we update the dom with what we need, and done!
import fetchData from "./fetchData"
import cleanedData from "./factoryFunction"

export default async function updateDom(url) {
    let data = await fetchData(url)
    let clean = cleanedData(data)
    console.log(clean)
    return
}