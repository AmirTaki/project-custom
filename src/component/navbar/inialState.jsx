export  const reducer =(state, action) => {
    switch(action.type){
        case "handlerResize":
            return {...state, resize : action.payload.size}
        case "hadlerDropMenu" : 
            return {...state, dropMenu : !state.dropMenu}
        case 'handlerSearch' : 
            return{...state, search : action.payload.flag, input : true  }
        case "handerWidth" : 
            return {...state, input : false }
    }
}

export const inialState = {
        resize : false,
        dropMenu : false,
        search : false,
        input : false , 
        list : ['Home', 'About', 'Services', 'Contact']
    }



    