export const ReducerSlider = (state, action) => {

    // const length = state.images.length 
    const length = state.images.length - 1    
    const handlerDrag = () => {
        var {sliderRef} = action.payload
        var {e} = action.payload
        var rect = sliderRef.getBoundingClientRect();
        var x = e.clientX - rect.left
        return x
    }

    switch(action.type){ 
        case "right":
            state.index >= length ? state.index =  0 : state.index += 1
            // state.index = (state.index  +  1) % length
            return {...state, }
        
        case "left" : 
            state.index == 0 ? state.index = length   : state.index -= 1
            // state.index = (state.index - 1 + length) % length
            return {...state}

        case "dots":
            return{...state, index : action.payload.place}
        
        case "changeImage":
            var {sliderRef} = action.payload
            if(sliderRef){
                sliderRef.style.scrollBehavior = "smooth"
                sliderRef.scrollLeft = state.index * sliderRef.offsetWidth;
            }
            return {...state}
        
        case "handlerDragStart":
            var {event} = action.payload
            var {MouseXStart} = action.payload;
            MouseXStart = event
            
            return{...state, dragStart : event}

        case "handlerDragEnd":
            var {event} = action.payload
            var {MouseXEnd} = action.payload;
            MouseXEnd = event
            
            const distance = MouseXStart - MouseXEnd

            if (distance > 50 ){
                return {...state, }
            }   
            else if (distance < -50) {

            }

            return {...state}

        default : 
            return {...state}    
    }
}