import { useEffect, useReducer, useRef, useState } from "react";
import { DataImage } from "./dataItem";
import './style.css'
import ItemImage from "./itemImage";
import NextPrevButton from "./buttonPrevArrows";
import Thumbnail from "./thumbnail";


const ImageSlider = () => {

    const reducer = (state, action)=>{
        switch(action.type){
            case "next":
                const pop = state.image.pop()
                const unshift = state.image.unshift(pop)
                // pop.animation = true
              console.log(pop.id)
                const newState =  state.image.map((item) => {
                    return {...item, next : item.id  === pop.id  ? true : false}
                })
                return {...state,  next : true, prev : false}

            case "prev":
                const shift = state.image.shift()
                state.image.push(shift)
                // shift.animation = false
                const newstate =  state.image.map((item) => {
                    return {...item, animation : item.id === shift.id ? true : false}
                })
                return {...state, prev : true, next : false}

            case "nextPrevAnimation" : 
                return {...state, next : false, prev : false}
        }
    }
    const [Data, dispatch] = useReducer(reducer, DataImage)
    useEffect(() => {
        const time =  setInterval(() => {
            dispatch({type : 'nextPrevAnimation'})
        }, [500])

        return()=> {
            clearInterval(time)
        }
    })

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

        <NextPrevButton Data = {Data} dispatch = {dispatch}  />
            
        {/* thumbnail */}
        <Thumbnail Data = {Data}  />
     
    </div>
    )
}

export default ImageSlider;  