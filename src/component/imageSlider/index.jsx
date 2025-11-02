import { useEffect, useReducer, useRef, useState } from "react";
import "./styles.css"


const ImageSlider = () => {

    const reducer = (state, action) => {
        switch(action.type){
            case "next" :
                return {...state}
        }
    }
    const [state, dispatch]  = useReducer(reducer, {
        move : false,
        item : [
            {id : 0},{id : 1},{id : 2},{id : 3},
        ]
    })  
    const [move, setMove] =  useState(false)
    
    const slider = useRef(null)
    const Next = () => {
        const slide =  slider.current
        if(slide){
            const slideNext  = slide.querySelectorAll('.item')
            slide.appendChild(slideNext[0])
            
            setMove(true)
        }   
    }
    useEffect(() => {
       const time = setInterval(() => {
            setMove(false)

            
        }, 500);
        return() => [
            clearInterval(time)
        ]
    }, [move])


    return(
        <>
        {/* // slider */}
        <div className={`flex flex-row gap-2 duration-500 ${move? "translate-x-10" : "translate-x-0"}`} ref = {slider}>
            {/* item */}
            <div className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item duration-500 ${move ? "scale-200" : "scale-100"}`}>1</div>
            <div className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item duration-500 ${move ? "scale-200" : "scale-100"}`}>2</div>
            <div className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item duration-500 ${move ? "scale-200" : "scale-100"}`}>3</div>
            <div className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item duration-500 ${move ? "scale-200" : "scale-100"}`}>4</div>
        </div>


        <button onClick = {Next} className="bg-white mt-10 w-10 cursor-pointer">next</button>
        <button></button>
        </>


    )
}

export default ImageSlider;