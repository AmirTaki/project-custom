import img1 from "./images/pins1.jpg"
import img2 from "./images/pins2.jpg"
import img3 from "./images/pins3.jpg"
import img4 from "./images/pins4.jpg"

export const InitialStateCubes = {
    index : 0,
    start : 0, 
    end : 0,
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

export const ReducerCubes = (state, action) => {

    const len = state.images.length
    const add = (state.index + 1) % len
    const min = (state.index - 1  + len) % len
 
    switch(action.type){
        case "handlerStart" :
            return {...state, start : action.payload.event}
        
        case 'handlerEnd' :
            return {...state, end : action.payload.event}

        case "handlerChangeBg":
            const distance = state.start - state.end
            
            if(distance > 50) {
                return {...state, index : add}
            }
            else if (distance < -50){

                return {...state, index : min}
            }
            return {...state}
        case "handlerLeft" : 
            return {...state, index : min}

        case "handlerRight" :
            return {...state, index : add}
    }
}