import { useEffect, useReducer, useRef, useState } from "react";
import { InitailState } from "./initialState";
import './styles.css'
import img1 from "./image/c1.jpg"

const ChangeSlider = () => {
    const imageRef =  useRef(null)
  
    const reducer = (state, action) => {
        switch(action.type){
            case "changeBgImg": 
                // imageRef.current.style.background = url(state.images[0].img)
                return {...state}
        }
    }
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
        
        <div className="relative">

        <div
            style={{background : `url(${img1})`}}
            ref = {imageRef} className="absolute bg-gray-300 w-[300px] h-[600px]  top-[50%] left-[50%] ml-[-150px] mt-[-150px] flex flex-col flex-wrap overflow-x-scroll justify-center items-center">
            
        


        </div>
         
        </div>
    )
}
export default ChangeSlider;
{/* <img src={state.images[0].img} alt="" />
<img src={state.images[1].img} alt="" />
<img src={state.images[2].img} alt="" /> */}