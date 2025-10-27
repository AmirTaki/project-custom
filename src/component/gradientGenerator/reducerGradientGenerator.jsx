export const ReducerGradientGenerator = (state, action) => {
    switch(action.type){
        case "handlerButton":
            const newSatate =  state.buttons.map((item) => ({...item, flag : item.id === action.payload.id ? true : false }))
            return {...state, buttons : newSatate}
        
        case "HandlerColor" :
            return action.payload.data === 'A' ? {...state , colorA : action.payload.color} : {...state , colorB : action.payload.color}
    
        case "HandlerGenerate" : 
            var {ref} = action.payload
            const itemButtons =  state.buttons.find((item) => item.flag)
            if(ref) ref.value = `background-image: linear-gradient(${itemButtons.value}, ${state.colorA}, ${state.colorB});`
            return {...state, backGround : `linear-gradient(${itemButtons.value}, ${state.colorA}, ${state.colorB})` }
    
        case "HandlerCopy" :
            var {ref} = action.payload
            ref.select();
            document.execCommand('copy')
            window.alert('Gradient Copied!')
        return {...state}
    }
}