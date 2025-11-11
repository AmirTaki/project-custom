import { useReducer, useRef, useState } from "react";
import { InitailState } from "./initialState";
import './styles.css'

const ChangeSlider = () => {
    const imageRef =  useRef(null)
    const [index, setIndex] = useState(1)
    const [flag, setFlag] =  useState(true)
    const reducer = (state, action) => {
        switch(action.type){
            case "": 

                return {...state}
        }
    }
    const [state, dispatch] =  useReducer(reducer, InitailState)
    const handlerClick = () => {
        setIndex((prev) => (prev + 1))
        if(imageRef.current){
                imageRef.current.style.scrollBehavior = "smooth";
                imageRef.current.scrollLeft = index * imageRef.current.offsetWidth;
        }
    }
    return(
        
        <div className="relative">

        <div ref = {imageRef} className="absolute bg-gray-300 w-[300px] h-[600px]  top-[50%] left-[50%] ml-[-150px] mt-[-150px] flex flex-col flex-wrap overflow-x-scroll justify-center items-center">
            {state.images.map((item) => (
                <div key = {item.id} className="bg-blue-500 w-full h-[300px] ">
                    <img src={item.img} className="w-full h-full bg-center bg-cover" alt="" />
                </div> 
            ))}
         


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