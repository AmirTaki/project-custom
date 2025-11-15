import img1 from "./img/c1.jpg"
import img2 from "./img/c2.jpg"
import img3 from "./img/c5.jpg"
import img4 from "./img/c6.jpg"

export const InitialStateCubeSiwper = {
    startX: 0,
    endX: 0,
    rotate : 0,
    images : [
        {
            id : 0,
            name : 'frontCube',
            color : '2db911',
            img : img1

        },
        {
            id : 1,
            name : 'backCube',
            color : 'df980b',
            img : img2

        },
        {
            id : 2,
            name : 'leftCube',
            color : '04a4f4',
            img : img3

        },
        {
            id : 3,
            name : 'rightCube',
            color : '04f4a8',
            img : img4

        },
    ],
}

export const ReducerSwiperCube = (state, action) => {

    switch(action.type){
        case "leftCubesClick": 
            state.rotate -= 90
        return {...state}

        case "rightCubesClick" :
            state.rotate +=90
            return{...state,}

        case "handerStart":
            var {e} = action.payload;
            return {...state, startX : e }

        case "handlerEnd":
            var {e} = action.payload;
            state.endX = e;
            const distance = state.startX - state.endX;
            if(distance > 50){
                state.rotate += 90;
                return{...state, }
            }
            else if  (distance < -50) {
                state.rotate -= 90;
                return{...state, }
            }
       

          
    }
}

