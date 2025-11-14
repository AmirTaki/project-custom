import img1 from "./images/pins (25).jpg"
import img2 from "./images/pins (26).jpg"
import img3 from "./images/pins (27).jpg"
import img4 from "./images/pins (28).jpg"

export const  InitialStateCubeSwiper = {
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

export const ReducerCubeSlider = (state, action) => {
    switch(action.type){
        case "" :
            return {...state}
    }
}