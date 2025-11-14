import img1 from "./images/pins (25).jpg"
import img2 from "./images/pins (26).jpg"
import img3 from "./images/pins (27).jpg"
import img4 from "./images/pins (28).jpg"

export const  InitialStateCubes = {
    touchStartX : 0,
    touchEndX : 0,
    startX : 0,
    endX : 0,
    index : 0,
    images : [
        {
            id : 0, 
            img : img1
        },
        {
            id : 1, 
            img : img2
        },
        {
            id : 2, 
            img : img3
        },
        {
            id : 3, 
            img : img4
        },
    ]
}

export const ReducerCubesSlider = (state, action) => {
    switch(action.type){
        case "prevSlide" :
            return {...state, index : (state.index - 1 + state.images.length) % state.images.length}
        
        case 'nextSlide':
            return {...state, index : (state.index + 1) % state.images.length}

        case "handlerTouchStart":
            var {e} = action.payload
            return {...state, touchStartX :e.changedTouches[0].clientX }

        case "handlerTouchEnd":
            var {e} = action.payload
            state.touchEndX = e.changedTouches[0].clientX;
            const distance = state.touchStartX - state.touchEndX;
            if(distance > 50) {
                return {...state, index : (state.index - 1 + state.images.length) % state.images.length}
            }
            else if (distance < -50){
                return {...state, index : (state.index + 1) % state.images.length}
            }
            return {...state}

        case "handlerStart" :
            var {e} = action.payload
            return {...state, startX : e.clientX}
        
        case "handlerEnd":
            var {e} = action.payload
            state.endX = e.clientX
            const dis = state.startX - state.endX;
                if(dis > 50) {
                return {...state, index : (state.index - 1 + state.images.length) % state.images.length}
            }
            else if (dis < -50){
                return {...state, index : (state.index + 1) % state.images.length}
            }
            return {...state,}
    }
}