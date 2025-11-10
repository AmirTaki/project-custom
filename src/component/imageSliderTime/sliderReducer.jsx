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
            var {sliderRef} = action.payload
            if(sliderRef){
                sliderRef.style.scrollBehavior = "smooth"
                sliderRef.scrollLeft = state.index * sliderRef.offsetWidth;
            }
            return {...state}
        
        case "handlerDragStart":
            var {sliderRef} = action.payload
            var {e} = action.payload
            var rect = sliderRef.getBoundingClientRect();
            var x = e.clientX - rect.left
       
            return{...state, dragStart : x}

        case "handlerDragEnd":
            var {sliderRef} = action.payload
            var {e} = action.payload
            var rect = sliderRef.getBoundingClientRect();
            var x = e.clientX - rect.left
      
            var length = state.images.length - 1
            if(state.dragStart > x){
                state.index >= length ? state.index =  0 : state.index += 1
            }
            else {
                state.index == 0 ? state.index = length   : state.index -= 1
            }
            return{...state, dragEnd : x,  }

    }
}