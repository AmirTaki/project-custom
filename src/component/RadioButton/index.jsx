import { useReducer, } from "react";
import { InitialState } from "./initialState";
import InputContainer from "./inputContainer";
const PureRadio = () => {

    const  reducer = (state, action) => {
        switch(action.type){
            case "":
                return {...state}
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
                        <InputContainer key = {item.key} item = {item} />
 
                    )
                })}

            </div>
        </div>
    )
}

export default PureRadio;