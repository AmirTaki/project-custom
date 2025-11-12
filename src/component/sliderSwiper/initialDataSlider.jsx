import img1 from "./img/c1.jpg"
import img2 from "./img/c2.jpg"
import img3 from "./img/c5.jpg"
import img4 from "./img/c6.jpg"

export const InitialStateCubeSiwper = {
    lists : [1, 2, 3, 4, 5, 6, 7, 8, 9],
    images : [
        {
            id : 0,
            name : 'front',
            color : '2db911',
            img : img1

        },
        {
            id : 1,
            name : 'back',
            color : 'df980b',
            img : img2

        },
        {
            id : 2,
            name : 'left',
            color : '04a4f4',
            img : img3

        },
        {
            id : 3,
            name : 'right',
            color : '04f4a8',
            img : img4

        },
    ]
}

export const ReducerSwiperCube = (state, action) => {
    switch(action.type){
        case "handlerCubes": 
        return {...state}
    }
}

