import { useEffect, useReducer, useRef, useState } from "react";
import { DataImage } from "./dataItem";



const ImageSlider = () => {
   const sliderRef =  useRef(null)
    const reducer = (state, action)=>{
        switch(action.type){
            case "next":
                state.image.unshift(state.image.pop())
                return {...state, }
        }
    }
    const [Data, dispatch] = useReducer(reducer, DataImage)

    return(
    //    slider
    <div className="w-[100%]  h-[50vh] bg-red-200 relative  " >
        {/* item */}
        <div className="flex flex-row"ref = {sliderRef}>

        {Data.image.map((item) => {
            return(
                <div 
                    className="h-full w-full  item"
                    style={{width : `${item.width}%`, zIndex : item.zidex }} key = {item.id}>
                    <img src={item.image} alt="" className="w-full h-full"/>
                </div>      
            )
        }) }
        </div>

        <div 
            onClick={() => {dispatch({type : 'click'})}}
        className="bg-blue-500 z-[1000]! absolute -bottom-10 w-20 cursor-pointer">next
        </div>
        <div 
            onClick={() => {dispatch({type : 'click'})}}
        className="bg-blue-500 z-[1000]! absolute -bottom-10 w-20 cursor-pointer">next
        </div>
    </div>
    )
}

export default ImageSlider;  