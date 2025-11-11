import { useEffect, useReducer, useRef, useState } from "react";
import { InitailState, reducer } from "./initialState";

const ChangeSlider = () => {
    const imageRef =  useRef(null)
  
    const [state, dispatch] =  useReducer(reducer, InitailState)
  
    useEffect(() => {
        const timer =  setInterval(() => {
            dispatch({type: 'changeBgImg'})
        }, 3000)
        return () => {
            clearInterval(timer)
        }
    })
    return(   
        <div className=" flex justify-center items-center">
            <div
                style={{background : `url(${state.images[state.index].img})` , }}
                ref = {imageRef} className=" bg-gray-300 rounded-2xl   w-[1000px] h-[700px] max-xl:w-[700px]! max-xl:h-[500px]! bg-cover duration-1000 max-lg:w-[300px]! max-lg:h-[400px]! ">
            </div> 
        </div>
        )
}
export default ChangeSlider;

