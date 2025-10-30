export const initialEditor = {
    // brightness : '100',
    // saturation : '100',
    // inversion : '0',
    // grayscale : '0',
    rotate : 0,
    flipHorizontal : 1,
    flipVertical : 1,
    value : 100,
    min : 0,
    max : 100,
    buttonsFilter : [
        {
            id : 0, 
            name : 'Brighteness',
            active : true,
            value : 100,
            max : 100
        },
        {
            id : 1, 
            name : 'Saturation',
            active : false,
            value : 100,
            max: 100
        },
        {
            id : 2, 
            name : 'Inversion',
            active : false,
            value : 0,
            max : 100
        },
        {
            id : 3, 
            name : 'Grayscale',
            active : false,
            value : 0,
            max : 100
        },
    ],
    buttonssRotate : [
        {
            id : 0,
            icon : 'fa-solid fa-rotate-left',
            size : '14',
            name : 'rotate-left',
        },
        {
            id : 1,
            icon : 'fa-solid fa-rotate-right',
            size : '14',
            name : 'rotate-right',
        },
        {
            id : 2,
            icon : 'bx bx-reflect-vertical',
            size : '18',
            name : 'vertical',
            Rotation : 1,
        },
        {
            id : 3,
            icon : 'bx bx-reflect-horizontal',
            size : '18',
            name : 'horizontal',
            Rotation : 1
        },

    ]
}
