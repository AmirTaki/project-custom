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
        <div className="w-full h-[500px] bg-gray-600 relative top-10 flex justify-center items-center">
            <div className="w-full h-[300px] bg-white overflow-x-scroll flex flex-col flex-wrap">
                <div className="w-[300px] h-full bg-green-500 rotate-y-45"></div>
                <div className="w-[300px] h-full bg-blue-500"></div>
                <div className="w-[300px] h-full bg-orange-500 rotate-y-45"></div>
            
            </div>
        </div>
    )
}
export default ChangeSlider;
{/* <img src={state.images[0].img} alt="" />
<img src={state.images[1].img} alt="" />
<img src={state.images[2].img} alt="" /> */}