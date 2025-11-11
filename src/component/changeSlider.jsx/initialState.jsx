import c1 from "./image/c1.jpg"
import c2 from "./image/c2.jpg"
import c3 from "./image/c3.webp"
import c4 from "./image/c4.webp"
import c5 from "./image/c5.webp"
import c6 from "./image/c6.jpg"
export const InitailState = {
    index : 0,
    images : [
        {
            id : 0,
            img : c1,
            flag : true,
        },
        {
            id : 1,
            img : c2,
            flag: false
        },
        {
            id : 2,
            img : c3 ,
            flag: false
        },
        {
            id : 3,
            img : c4,
            flag: false
        },
        {
            id : 4,
            img : c5,
            flag: false
        },
        {
            id : 5,
            img : c6,
            flag: false
        },

    ]
}