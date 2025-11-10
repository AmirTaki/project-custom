export const ReducerSlider = (state, action) => {
  

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
            return {...state, }
        
        case "left" : 
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
            const dragStart = handlerDrag()
       
            return{...state, dragStart : dragStart}

        case "handlerDragEnd":
            const xx = handlerDrag();
            console.log(xx)
            // const length = state.images.length - 1
            // if(state.dragStart > xx){
            //     state.index >= length ? state.index =  0 : state.index += 1
            // }
            // else {
            //     state.index == 0 ? state.index = length   : state.index -= 1
            // }
            return{...state, dragEnd : xx,  }

    }
}