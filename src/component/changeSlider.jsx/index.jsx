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

        <div className="relative bg-gray-300 w-full h-[600px] top-20">
            <div className="absolute w-[300px] h-[300px] top-50 translate-x-1/2 bg-blue-500"></div>
        </div>
    )
}
export default ChangeSlider;
{/* <img src={state.images[0].img} alt="" />
<img src={state.images[1].img} alt="" />
<img src={state.images[2].img} alt="" /> */}