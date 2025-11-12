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
        {
            id : 4,
            name : 'top',
            color : '1932f3',
            img : img5

        },
        {
            id : 5,
            name : 'bottom',
            color : 'bd0049',
            img : img6

        },
    ]
}

export const ReducerSwiperCube = (state, action) => {
    switch(action.type){
        case "": 
        return {...state}
    }
}

