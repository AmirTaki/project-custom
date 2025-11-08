import { useReducer, } from "react";
import { InitialState } from "./initialState";
import InputContainer from "./inputContainer";
const PureRadio = () => {

    const  reducer = (state, action) => {
        switch(action.type){
            case "handlerClick":
                const {icon} = action.payload
               
                const newButtons = state.buttons.map((item) => ({...item, flag : item.icon === icon ? true : false}))
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