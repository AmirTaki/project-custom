export const InitialState = {
    buttons :[
        {
            id : 0,
            icon : 'walk',
            name : 'walk', 
            flag : true,
        },
        
        {
            id : 1,
            icon : 'bicycle',
            name : 'bike',
            flag : false
        },
        {
            id : 2,
            icon : 'car-sport',
            name : 'driver',
            flag : false
        },
        {
            id : 3,
            icon : 'airplane',
            name : 'fly',
            flag: false
        },

    ]
}
export const  ReducerRadio = (state, action) => {
    switch(action.type){
        case "handlerClick":
            const {icon} = action.payload
            
            const newButtons = state.buttons.map((item) => ({...item, flag : item.icon === icon ? true : false}))
            return {...state, buttons : newButtons}
    }
}