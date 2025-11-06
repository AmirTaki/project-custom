export const ReducerGenerator = (state, action) => {
    switch(action.type){
        case "handlerGenerate" :
            state.allChars = ''
            let password = ""
            state.inputCheckBox.map((box) => {(state.allChars += box.checked ? box.chars : "" )})
            
            if(state.allChars === "" || state.value === 0) {
                return {...state, password : password}
            }
            for (let i = 1; i < state.value ; i++){
                password += state.allChars.charAt(Math.floor(Math.random() * state.allChars.length))
            }
            return {...state, password : password} 
    
        case "handlerRange": 
            return{...state, value : action.payload.event}
        
        case 'handlerCheckBox':
            const {checked} =  action.payload
            const {id} = action.payload
            
            const newInputCheckBox =  state.inputCheckBox.map((box) => ({...box, checked : box.id === id ? checked : box.checked  }))       
            return{...state , inputCheckBox : newInputCheckBox }
    
        case "handlerCopy":
            if(state.password.length > 0){
                navigator.clipboard.writeText(state.password)
                return{...state, icon : false}
            }
            return{...state}
        
        case "handlerTime":
            return state.icon ?  {...state} : {...state, icon : true, password : '' }
        
    }
}