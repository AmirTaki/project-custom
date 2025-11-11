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
        <div className="w-full h-[500px] bg-gray-600">
            <div className="w-full h-full flex">
                <div className="w-[300px] h-full bg-blue-600"></div>
                <div className="w-[300px] h-full bg-green-600"></div>
                <div className="w-[300px] h-full bg-yellow-600"></div>
                <div className="w-[300px] h-full bg-red-600"></div>
                <div className="w-[300px] h-full bg-pink-600"></div>
            </div>
            {/* <img src={state.images[0].img} alt="" />
            <img src={state.images[1].img} alt="" />
            <img src={state.images[2].img} alt="" /> */}
        </div>
    )
}
export default ChangeSlider;