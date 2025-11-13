import img1 from "./img/c1.jpg"
import img2 from "./img/c2.jpg"
import img3 from "./img/c5.jpg"
import img4 from "./img/c6.jpg"

export const InitialStateCubeSiwper = {
    lists : [1, 2, 3, 4, 5, 6, 7, 8, 9],
    rotate : 120,
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
    ]
}

export const ReducerSwiperCube = (state, action) => {
    switch(action.type){
        case "handlerCubes": 
            state.rotate -= 90
        return {...state}
    }
}

