import { useReducer } from "react";
import { InitailState } from "./initialState";

const ChangeSlider = () => {
    const reducer = (state, action) => {
        switch(action.type){
            case "": 
                return {...state}
        }
    }
    const [state, dispatch] =  useReducer(reducer, InitailState)
    return(
        <div className="w-full h-[500px] bg-gray-600"></div>
    )
}
export default ChangeSlider;