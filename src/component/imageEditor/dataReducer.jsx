export const initialEditor = {
    brightness : '100',
    saturation : '100',
    inversion : '0',
    grayscale : '0',
    rotate : 0,
    flipHorizontal : 1,
    flipVertical : 1,
    buttonsFilter : [
        {
            id : 0, 
            name : 'Brighteness',
            active : true,
            value : 100,
        },
        {
            id : 1, 
            name : 'Saturation',
            active : false,
            value : 100
        },
        {
            id : 2, 
            name : 'Inversion',
            active : false,
            value : 100
        },
        {
            id : 3, 
            name : 'Grayscale',
            active : false,
            value : 100
        },
    ],
}
