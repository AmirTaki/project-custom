import { useCallback } from "react"

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
            const {sliderRef} = action.payload
            if(sliderRef){
                sliderRef.style.scrollBehavior = "smooth"
                sliderRef.scrollLeft = state.index * sliderRef.offsetWidth;
            }
            return {...state}

        case "handlerMouseDown":
            var {sliderRef} = action.payload
            const handlerMouseDown = useCallback((e) => {
                const rect = sliderRef.getBoundingClientRect()

            }, [])
            
            return {...state}
    }
}