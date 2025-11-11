import { useEffect, useReducer, useRef, useState } from "react";
import { InitailState } from "./initialState";
import './styles.css'

const ChangeSlider = () => {
    const imageRef =  useRef(null)
  
    const reducer = (state, action) => {
        switch(action.type){
            case "changeBgImg": 
                imageRef.current.style.background = url(state.images[0].img)
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

    useEffect(() => {
        const timer =  setInterval(() => {
            dispatch({type: 'changeBgImg'})
        }, 3000)
        return () => {
            clearInterval(timer)
        }
    })
    return(
        
        <div className="relative">

        <div ref = {imageRef} className="absolute bg-gray-300 w-[300px] h-[600px]  top-[50%] left-[50%] ml-[-150px] mt-[-150px] flex flex-col flex-wrap overflow-x-scroll justify-center items-center">
            
        


        </div>
         
        </div>
    )
}
export default ChangeSlider;
{/* <img src={state.images[0].img} alt="" />
<img src={state.images[1].img} alt="" />
<img src={state.images[2].img} alt="" /> */}