export const ReducerSlider = (state, action) => {
    switch(action.type){
        case "right":
            var length = state.images.length - 1
            state.index >= length ? state.index =  0 : state.index += 1
            return {...state, }
        
        case "left" : 
            var length = state.images.length - 1
            state.index == 0 ? state.index = length   : state.index -= 1
            return {...state}

        case "dots":
            return{...state, index : action.payload.place}
        
        case "changeImage":
            if(sliderRef.current){
                sliderRef.current.style.scrollBehavior = "smooth"
                sliderRef.current.scrollLeft = state.index * sliderRef.current.offsetWidth;
            }
            return {...state}
    }
}