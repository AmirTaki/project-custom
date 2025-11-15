export const ReducerSliderTime = (state, action) => {
    const length = state.items.length ;
    const add =  (state.index  +  1) % length
    const min = (state.index - 1 + length) % length
   
    switch(action.type){
        case "handlerStart":
            return {...state, startX : action.payload.event }
        
        case "handlerEnd" :
            return {...state, endX : action.payload.event, }
            
        case "handlerRollImage" :
            return {...state, index : state.startX > state.endX ? add : min} 
        
        case "leftButtonSlider":
            return {...state, index : min}
        
        case 'rightButtonSlider' : 
            return {...state, index : add}

        case "dotsSldier" : 
            return {...state, index : action.payload.place}
    }
}