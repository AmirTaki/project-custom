export const DataInitial = {
    value : 15,
    lowerChars : 'abcdefghijklmnopqrstuvwxyz',
    upperChars : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    allNumbers :  '0123456789',
    allSymbols : "~!@#$%^&*",

    inputCheckBox : [
        {
            key : 0, 
            id : 'lowercase',
            type : 'checkbox',
            text : 'Include Lowercase Letters (a-z)',
            checked : true
        },
        {
            key : 1, 
            id : 'uppercase',
            type : 'checkbox',
            text : 'Include Uppercase Letters (A-Z)',
            checked : true 
        },
        {
            key : 2, 
            id : 'numbers',
            type : 'checkbox',
            text : 'Include Numbers (0-9)',
            checked : false 
        },
        {
            key : 3, 
            id : 'symbols',
            type : 'checkbox',
            text : 'Include Symbols (@-*)' ,
            checked : false
        },
    ]
}