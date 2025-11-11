import { useReducer } from "react";
import { InitailState } from "./initialState";

const ChangeSlider = () => {
    const reduce = (state, action) => {
        switch(action.type){
            case "": 
                return {...state}
        }
    }
    const [state, dispatch] =  useReducer(reducer, InitailState)
    return(
        <div className=""></div>
    )
}
export default ChangeSlider;