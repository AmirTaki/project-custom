import { useReducer, } from "react";
import { InitialState, ReducerRadio } from "./initialState";
import InputContainer from "./inputContainer";

const PureRadio = () => {

    const [radio, dispatch] = useReducer(ReducerRadio, InitialState)
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