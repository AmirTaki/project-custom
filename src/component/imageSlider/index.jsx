import { useEffect, useReducer, useState } from "react";
import { DataImage } from "./dataItem";



const ImageSlider = () => {
    const reducer = (state, action)=>{
        switch(action.type){
            case "":
                return {...state}
        }
    }
    const [Data, dispatch] = useReducer(reducer, DataImage)

    return(
    //    slider
    <div className="w-[100%]  h-[50vh] bg-red-200 relative ">
        {/* item */}
        {Data.image.map((item) => {
            return(
                <div 
                    className="h-full w-full absolute"
                    style={{width : `${item.width}%`, zIndex : item.zidex }} key = {item.id}>
                    <img src={item.image} alt="" className="w-full h-full"/>
                </div>      
            )
        }) }

        <div 
            onClick={() => {handlerClick()}}
        className="bg-blue-500 z-[1000]! absolute -bottom-10 w-20 cursor-pointer">click</div>
    </div>
    )
}

export default ImageSlider;  