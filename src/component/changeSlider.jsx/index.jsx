import { useReducer } from "react";
import { InitailState } from "./initialState";

const ChangeSlider = () => {
    const imageRef =  useRef(null)
    const reducer = (state, action) => {
        switch(action.type){
            case "": 
                return {...state}
        }
    }
    const [state, dispatch] =  useReducer(reducer, InitailState)
    return(
        <div className="w-full h-[500px] bg-gray-600 relative top-10 flex justify-center items-center">
            <div
                ref = {imageRef}
                className="w-full h-[300px] bg-white overflow-x-scroll flex flex-col flex-wrap"
            >
                <div className="w-[10%] h-full bg-green-500 rotate-y-45 item">
                    <img src={state.images[0].img} className="w-full h-full" alt="" />
                </div>
                <div className="w-[80%] h-full bg-blue-500">
                    <img src={state.images[1].img} className="w-full h-full item" alt="" />
                </div>
                <div className="w-[10%] h-full bg-orange-500 rotate-y-45 item">
                    <img src={state.images[2].img} className="w-full h-full" alt="" />
                </div>
            
            </div>


            <div className=" absolute bottom-0 border-2 cursor-pointer bg-blue-500 z-30">
                <button>click me</button>
            </div>
        </div>
    )
}
export default ChangeSlider;
{/* <img src={state.images[0].img} alt="" />
<img src={state.images[1].img} alt="" />
<img src={state.images[2].img} alt="" /> */}