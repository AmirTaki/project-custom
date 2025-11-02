import { useEffect, useReducer, useRef, useState } from "react";
import { DataImage } from "./dataItem";
import './style.css'
import ItemImage from "./itemImage";
import NextPrevButton from "./buttonPrevArrows";


const ImageSlider = () => {

    const reducer = (state, action)=>{
        switch(action.type){
            case "next":
                const pop = state.image.pop()
                const unshift = state.image.unshift(pop)
                // pop.animation = true
              
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
                return {...state, image: newstate  }
        }
    }
    const [Data, dispatch] = useReducer(reducer, DataImage)

    useEffect(() => {
        // console.log(Data.value)
    },[Data])
    return(
    //    slider
    <div className="h-[100vh]  -mt-[50px] w-[100vw] overflow-hidden relative " >
        {/* list */}
        <div className="">
        {/* item */}
            {Data.image.map((item) => {
                return(
                    <ItemImage key = {item.id} item = {item} />    
                )
            }) }
        </div>

        <NextPrevButton Data = {Data} dispatch = {dispatch } />
        <div 
            onClick={() => {dispatch({type : 'next'})}}
        className="bg-blue-500 z-[1000]! absolute -bottom-100 w-20 cursor-pointer ">next
        </div>
        <div 
            onClick={() => {dispatch({type : 'prev'})}}
        className="bg-red-500 z-[1000]! absolute -bottom-10 right-0 w-20 cursor-pointer">prev
        </div>


        <div className="absolute w-30  h-10 flex bottom-0 right-29 gap-2 ">
            {Data.image.map((item) => {
                return(
                    <div className="">
                        <img src={item.image} alt="" className="rounded-2xl" />
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default ImageSlider;  