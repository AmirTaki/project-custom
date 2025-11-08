import { useReducer, } from "react";
import { InitialState } from "./initialState";
import InputContainer from "./inputContainer";
const PureRadio = () => {

    const  reducer = (state, action) => {
        switch(action.type){
            case "handlerClick":
                const {icon} = action.payload
                console.log(icon)
                const newButtons = state.buttons.map((item) => {
                    if(item.icon === icon){
                        return {...item, flag : true}
                    }
                    else {
                         return {...item, flag : false}
                    }
                })
                return {...state, buttons : newButtons}
        }
    }
    const [radio, dispatch] = useReducer(reducer, InitialState)

    return(
        // container
        <div className="flex justify-center items-center">
            {/* radio-title-group */}
            <div className="flex flex-wrap justify-center">
                {radio.buttons.map((item) => {
                    return(
                        <InputContainer key = {item.id} item = {item} dispatch = {dispatch}/>
 
                    )
                })}

            </div>
        </div>
    )
}

export default PureRadio;