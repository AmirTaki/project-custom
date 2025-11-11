import c1 from "./image/bg1.jpg"
import c2 from "./image/bg2.jpg"
import c3 from "./image/bg3.jpg"
import c4 from "./image/bg4.jpg"
import c5 from "./image/bg5.jpg"

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
       

    ]
}