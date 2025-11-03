export const reducerSlider = (state, action) => {
   
    const {thumbnail} = action.payload;
    const {sliderList} = action.payload;
    const {slider} = action.payload
   
    var thumbnailItems = thumbnail.current.querySelectorAll('.item')
    var sliderItems = sliderList.current.querySelectorAll(".item")
   
    switch (action.type){
        case "next":
            sliderList.current.appendChild(sliderItems[0])
            thumbnail.current.appendChild(thumbnailItems[0])
            slider.current.classList.add('next')
        return {...state};

        case "prev" :
            sliderList.current.prepend(sliderItems[sliderItems.length - 1])
            thumbnail.current.prepend(thumbnailItems[thumbnailItems.length - 1])
            slider.current.classList.add('prev')
        return {...state}
    }
}