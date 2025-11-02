import img1 from "./image/img1.jpg"
import img2 from "./image/img2.jpg"
import img3 from "./image/img3.jpg"
import img4 from "./image/img4.jpg"

export const DataImage = {
    value : 3,
    image : [
    {
        id : 0,
        title : 'MAGIC SLIDER',
        type : 'FLOWER',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur velit provident pariatur optio sapiente et mollitia, in ut odit placeat accusantium officia, ipsa quae, fugit sequi expedita dignissimos cum doloremque.',
        image : img1,
        width : 50,
        zidex : 10
    },
    {
        id : 1,
        title : 'MAGIC SLIDER',
        type : 'NATURE',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur velit provident pariatur optio sapiente et mollitia, in ut odit placeat accusantium officia, ipsa quae, fugit sequi expedita dignissimos cum doloremque.',
        image : img2,
        width : 60,
        zidex : 9
    },
    {
        id : 2,
        title : 'MAGIC SLIDER',
        type : 'NATURE',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur velit provident pariatur optio sapiente et mollitia, in ut odit placeat accusantium officia, ipsa quae, fugit sequi expedita dignissimos cum doloremque.',
        image : img3,
        width : 70,
        zidex : 8
    },
    {
        id : 3,
        title : 'MAGIC SLIDER',
        type : 'PLANT',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur velit provident pariatur optio sapiente et mollitia, in ut odit placeat accusantium officia, ipsa quae, fugit sequi expedita dignissimos cum doloremque.',
        image : img4,
        width : 80,
        zidex : 7
       
    }],
    buttons : [
        {
            id : 0, 
            symbol : '<',
            name : 'prev'
        },
        {
            id : 1, 
            symbol : '>',
            name : 'next'
        },
    ]
}