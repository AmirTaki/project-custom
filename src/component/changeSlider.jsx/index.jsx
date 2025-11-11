import { useEffect, useReducer, useRef, useState } from "react";
import { InitailState } from "./initialState";
import './styles.css'
import img1 from "./image/c1.jpg"

const ChangeSlider = () => {
    const imageRef =  useRef(null)
  
    const reducer = (state, action) => {
        const length = state.images.length 
        switch(action.type){
            case "changeBgImg": 
                return {...state, index : (state.index  +  1) % length}
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
      

            <div
                style={{background : `url(${state.images[state.index].img})` , }}
                ref = {imageRef} className="absolute bg-gray-300  bg-center w-[800px] h-[540px] bg-cover ">
            </div>
         
    )
}
export default ChangeSlider;
{/* <img src={state.images[0].img} alt="" />
<img src={state.images[1].img} alt="" />
<img src={state.images[2].img} alt="" /> */}


// https://www.youtube.com/watch?v=ZczUFf-mOho
// https://www.youtube.com/watch?v=kzLFdOY7GQk
// https://www.youtube.com/@CSSnippets/playlists