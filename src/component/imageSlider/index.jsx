import { useEffect, useReducer, useRef, useState } from "react";
import { DataImage } from "./dataItem";
import './style.css'


const ImageSlider = () => {
   const sliderRef =  useRef(null)
    const reducer = (state, action)=>{
        switch(action.type){
            case "next":
                const pop = state.image.pop()
                state.image.unshift(pop)
                // pop.animation = true
                const newState =  state.image.map((item) => {
                    return {...item, animation : item.id === pop.id ? true : false}
                })
                return {...state,  image : newState}

            case "prev":
                const shift = state.image.shift()
                state.image.push(shift)
                // shift.animation = false
                return {...state, value : pop.id}
        }
    }
    const [Data, dispatch] = useReducer(reducer, DataImage)

    useEffect(() => {
        console.log(Data.value)
    },[Data])
    return(
    //    slider
    <div className="w-[100%]  h-[50vh] bg-red-200 relative  " >
        {/* item */}
        <div className="flex flex-row"ref = {sliderRef}>

        {Data.image.map((item) => {
            return(
                <div 
                    className={`h-full w-full  item   duration-1000 ${Data.value == item.id ? "scale-200!" : "scale-100!"} `}
                    style={{width : `${item.width}%`,  }} key = {item.id}>
                    <img src={item.image} alt="" className="w-full h-full"/>
                </div>      
            )
        }) }
        </div>

        <div 
            onClick={() => {dispatch({type : 'next'})}}
        className="bg-blue-500 z-[1000]! absolute -bottom-10 w-20 cursor-pointer">next
        </div>
        <div 
            onClick={() => {dispatch({type : 'prev'})}}
        className="bg-red-500 z-[1000]! absolute -bottom-10 right-0 w-20 cursor-pointer">prev
        </div>
    </div>
    )
}

export default ImageSlider;  