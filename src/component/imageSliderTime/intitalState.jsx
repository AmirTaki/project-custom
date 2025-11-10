import img1 from "./image/img1.jpg"
import img2 from "./image/img2.jpg"
import img3 from "./image/img3.jpg"
import img4 from "./image/img4.jpg"
import img5 from "./image/img5.jpg"
export const DataImage = {
    index : 0,
    dragStart : 0,
    dragEnd : 0,
    images : [
        {
            id :0 ,
            img :img1 ,
            status: true,
        },
        {
            id :1 ,
            img :img2 ,
            status: false,
        },
        {
            id :2 ,
            img :img3 ,
            status: false,
        },
        {
            id :3,
            img :img4 ,
            status: false,
        },
        {
            id: 4,
            img: img5,
            status: false,
        }
    ],
    buttons : [
        {
            id: 0, 
            icon : 'bi bi-arrow-left-circle-fill',
            name : 'left',
            symbol : '<'
        },
        {
            id: 1, 
            icon : 'bi bi-arrow-right-circle-fill',
            name : 'right',
            symbol : '>'
        },

    ]
}