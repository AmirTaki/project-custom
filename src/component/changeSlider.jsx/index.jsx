import { useReducer, useRef, useState } from "react";
import { InitailState } from "./initialState";
import './styles.css'

const ChangeSlider = () => {
    const imageRef =  useRef(null)
    const [index, setIndex] = useState(0)
    // const reducer = (state, action) => {
    //     switch(action.type){
    //         case "": 

    //             return {...state}
    //     }
    // }
    // const [state, dispatch] =  useReducer(reducer, InitailState)
    const handlerClick = () => {
        setIndex(index + 1)
        if(imageRef.current){
                imageRef.current.style.scrollBehavior = "smooth";
                imageRef.current.scrollLeft = index * imageRef.current.offsetWidth;
        }
    }
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
        <div className="relative">

        <div ref = {imageRef} className="relative bg-gray-300 w-[300px] h-[600px] top- flex flex-col flex-wrap overflow-x-scroll justify-center items-center">
            <div className="bg-blue-500 w-full h-[300px] rotate-y-0"></div>
            <div className="bg-gray-500 w-full h-[300px] rotate-y-0"></div>
            <div className="bg-red-500 w-full h-[300px] rotate-y-0"></div>


        </div>
            <div className=" absolute bottom-0 border-2 cursor-pointer bg-blue-500 z-30">
                 <button onClick={handlerClick}>click me</button>
             </div>
        </div>
    )
}
export default ChangeSlider;
{/* <img src={state.images[0].img} alt="" />
<img src={state.images[1].img} alt="" />
<img src={state.images[2].img} alt="" /> */}