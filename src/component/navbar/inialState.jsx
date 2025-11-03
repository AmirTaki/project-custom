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
        case "handlerWrite":
            return {...state, write : action.payload.search }
    }
}

export const inialState = {
        resize : false,
        dropMenu : false,
        search : false,
        input : false , 
        write : '',
        list : ['Home', 'About', 'Services', 'Contact']
    }



    