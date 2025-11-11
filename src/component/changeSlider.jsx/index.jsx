import { useReducer } from "react";
import { InitailState } from "./initialState";

const ChangeSlider = () => {
    const [state, dispatch] =  useReducer(reducer, InitailState)
    return(
        <div className=""></div>
    )
}
export default ChangeSlider;