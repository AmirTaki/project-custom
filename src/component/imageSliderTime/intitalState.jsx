import pins1 from "./image/pins1.jpg"
import pins2 from "./image/pins2.jpg"
import pins3 from "./image/pins3.jpg"
import pins4 from "./image/pins4.jpg"
import pins5 from "./image/pins5.jpg"
import pins6 from "./image/pins6.jpg"
import pins7 from "./image/pins7.jpg"
import pins8 from "./image/pins8.jpg"


export const InitialStateTime = {
    index : 0,
    startX:0,
    endX : 0,
    items : [
        {
            id : 0, 
            color : 'red',
            img : pins1,
        },
        {
            id : 1, 
            color : 'blue',
            img : pins2,
        },
        {
            id : 2, 
            color : 'green',
            img : pins3,
        },
        {
            id : 3, 
            color : 'white',
            img : pins4,
        },
        {
            id : 4, 
            color : 'silver',
            img : pins5,
        },
        {
            id : 5, 
            color : 'orange',
            img : pins6,
        },
        {
            id : 6, 
            color : 'yellow',
            img : pins7,
        },
        {
            id : 7, 
            color : 'pink',
            img : pins8,
        },

    ],
    buttons : [
        {
            id: 0, 
            icon : 'bi bi-arrow-left-circle-fill',
            name : 'leftButtonSlider',
            symbol : '<'
        },
        {
            id: 1, 
            icon : 'bi bi-arrow-right-circle-fill',
            name : 'rightButtonSlider',
            symbol : '>'
        },
    ]
}