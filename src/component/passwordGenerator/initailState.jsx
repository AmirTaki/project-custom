export const DataInitial = {
    value : 15,
    allChars : '',

    inputCheckBox : [
        {
            key : 0, 
            id : 'lowercase',
            type : 'checkbox',
            text : 'Include Lowercase Letters (a-z)',
            chars : 'abcdefghijklmnopqrstuvwxyz',
            checked : true
        },
        {
            key : 1, 
            id : 'uppercase',
            type : 'checkbox',
            text : 'Include Uppercase Letters (A-Z)',
            chars : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            checked : true 
        },
        {
            key : 2, 
            id : 'numbers',
            type : 'checkbox',
            text : 'Include Numbers (0-9)',
            chars : '0123456789',
            checked : false 
        },
        {
            key : 3, 
            id : 'symbols',
            type : 'checkbox',
            text : 'Include Symbols (@-*)' ,
            chars : '~!@#$%^&*',
            checked : false
        },
    ]
}