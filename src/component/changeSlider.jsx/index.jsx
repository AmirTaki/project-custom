import { useReducer, useRef } from "react";
import { InitailState } from "./initialState";
import './styles.css'

const ChangeSlider = () => {
    // const imageRef =  useRef(null)
    // const reducer = (state, action) => {
    //     switch(action.type){
    //         case "": 

    //             return {...state}
    //     }
    // }
    // const [state, dispatch] =  useReducer(reducer, InitailState)
    // const handlerClick = () => {
    //     if(imageRef.current){

    //        const items =  document.querySelectorAll(".itemAll" )
    //        imageRef.current.appendChild(items[0])
    //     }
    // }
    return(
        // <div className="w-full h-[500px] bg-gray-600 relative top-10 flex justify-center items-center">
        //     <div
        //         ref = {imageRef}
        //         className="w-full h-[300px] bg-white overflow-x-scroll flex flex-col flex-wrap"
        //     >
        //         {/* <div className="bg-blue-500 w-[90%] h-full absolute "></div>    */}
            
        //     </div>


        //     <div className=" absolute bottom-0 border-2 cursor-pointer bg-blue-500 z-30">
        //         <button onClick={handlerClick}>click me</button>
        //     </div>



        // </div>

        <div className="relative bg-gray-300 w-[300px] h-[600px] top- flex flex-row justify-center items-center">
            <div className="bg-blue-500 w-full h-[300px] rotate-y-90"></div>
            <div className="bg-gray-500 w-full h-[300px]"></div>
            <div className="bg-red-500 w-full h-[300px] rotate-y-90"></div>
        </div>
    )
}
export default ChangeSlider;
{/* <img src={state.images[0].img} alt="" />
<img src={state.images[1].img} alt="" />
<img src={state.images[2].img} alt="" /> */}