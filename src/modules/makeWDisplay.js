// this is the element creator that we will make to use we initialise the main node that displays weather information
const elmnts = () => {
    let appendor = document.getElementById('appendor')

    let masterDiv = div("basis-[50%] w-full h-full flex items-center justify-center min-w-min")
    let parentDiv = div("w-4/6 flex flex-col text-white bg-[#0a121d] rounded-xl p-4 min-h-min")
    let areaDiv = div("flex justify-center items-center text-xl mb-4", 'area')
    let mainDiv = div("flex justify-center items-center text-3xl border-b-2 border-white", 'main')
    let container1 = div("flex flex-col sm:flex-row justify-around items-center my-4")
    let image = img()
    let currentTemp = div("flex justify-center items-center text-3xl mt-8 mb-4", 'currentTemp')
    let description = div('flex justify-center items-center text-xl', 'description')
    container1.append(image, currentTemp, description)
    let container2 = div("flex justify-around my-2")
    let high = div('text-lg', 'high')
    let low = div('text-lg', 'low')
    container2.append(high, low)
    let container3 = div("flex flex-col jusify-center items-center pl-2 my-8")
    let wind = div("text-2xl sm:text-5xl mb-12", 'wind')
    let humidity = div("text-2xl sm:text-5xl", 'humidity')
    container3.append(wind, humidity)
    let container4 = div("grid grid-cols-2 grid-rows-2 gap-2")
    let thing1 = div("col-span-1 flex justify-center items-center text-lg border-b-2 border-white")
    thing1.innerHTML = 'Sunset'
    let thing2 = div("col-span-1 flex justify-center items-center text-lg border-b-2 border-white")
    thing2.innerHTML = 'Sunrise'
    let sunset = div("col-span-1 flex justify-center items-center text-lg", 'sunset')
    let sunrise = div("col-span-1 flex justify-center items-center text-lg", 'sunrise')
    container4.append(thing1, thing2, sunset, sunrise)
    parentDiv.append(areaDiv, mainDiv, container1, container2, container3, container4)
    masterDiv.append(parentDiv)
    appendor.append(masterDiv)
}

const div = (classStr, id) => {
    let classArray = classStr.split(' ')
    let div = document.createElement('div')
    for (let i = 0; i < classArray.length; i++) {
        div.classList.add(classArray[i])
    }
    if (id != '') {
        div.id = id
    }
    return div
}

const img = () => {
    let image = document.createElement('img')
    image.classList.add('w-20')
    image.classList.add('h-20')
    image.id = 'addImg'
    return image
}

export {
    elmnts,
} 
