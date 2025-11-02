import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { DataImage } from "./dataItem";
import './style.css'
import ItemImage from "./itemImage";
import NextPrevButton from "./buttonPrevArrows";
import Thumbnail from "./thumbnail";

export const SliderImage = createContext('')

const ImageSlider = () => {

    const reducer = (state, action)=>{
        switch(action.type){
            case "next":
                // const unshift = state.image.unshift(state.image.pop())
                const unshift = state.image.push(state.image.shift())
                        console.log(state.image)

                return {...state,  next : true, }

            case "prev":
                // const push =  state.image.push(state.image.shift())
                const push =  state.image.unshift(state.image.pop())
                return {...state, prev : true, }

            case "nextPrevAnimation" : 
                return {...state, next : false, prev : false}
        }
    }
    const [Data, dispatch] = useReducer(reducer, DataImage)
    useEffect(() => {
        const time = setInterval(() => {
            dispatch({type : 'nextPrevAnimation'})
        }, 2000);
        return() => {
            clearInterval(time)
        }
    }, [])

    useEffect(() => {
    }, [])

   
    return(
    <SliderImage.Provider value = {{Data}} >

        {/* //    slider */}
        <div className="h-[100vh]  -mt-[50px] w-[100vw] overflow-hidden relative " >
            {/* list */}
            <div className="">
            {/* item */}
                {Data.image.map((item) => {
                    return(
                        <ItemImage key = {item.id} item = {item}  />    
                    )
                }) }
            </div>

            <NextPrevButton Data = {Data} dispatch = {dispatch}  />
                
            {/* thumbnail */}
            <Thumbnail Data = {Data}  />
        
        </div>
    </SliderImage.Provider>
    )
}

export default ImageSlider;  