import { useEffect, useReducer, useRef, useState } from "react";
import { DataImage } from "./dataItem";
import './style.css'


const ImageSlider = () => {
   const sliderRef =  useRef(null)
    const reducer = (state, action)=>{
        switch(action.type){
            case "next":
                const pop = state.image.pop()
                const unshift = state.image.unshift(pop)
                // pop.animation = true
                console.log(unshift)
                const newState =  state.image.map((item) => {
                    return {...item, animation : item.id  === pop.id  ? true : false}
                })
                return {...state,  image : newState}

            case "prev":
                const shift = state.image.shift()
                state.image.push(shift)
                // shift.animation = false
                const newstate =  state.image.map((item) => {
                    return {...item, animation : item.id === shift.id ? true : false}
                })
                return {...state,  image : newstate}
        }
    }
    const [Data, dispatch] = useReducer(reducer, DataImage)

    useEffect(() => {
        // console.log(Data.value)
    },[Data])
    return(
    //    slider
    <div className="w-[50%]  h-[20vh] bg-red-200 relative " >
        {/* item */}
        <div className=""ref = {sliderRef}>

        {Data.image.map((item) => {
            return(
                <div 
                    className={`h-full w-full absolute   `}
                    style={{width : `${item.width}px`,  zIndex : item.zidex}} key = {item.id}>
                    <img src={item.image} alt="" className="w-full h-full"/>
                </div>      
            )
        }) }
        </div>

        <div 
            onClick={() => {dispatch({type : 'next'})}}
        className="bg-blue-500 z-[1000]! absolute -bottom-10 w-20 cursor-pointer ">next
        </div>
        <div 
            onClick={() => {dispatch({type : 'prev'})}}
        className="bg-red-500 z-[1000]! absolute -bottom-10 right-0 w-20 cursor-pointer">prev
        </div>
    </div>
    )
}

export default ImageSlider;  