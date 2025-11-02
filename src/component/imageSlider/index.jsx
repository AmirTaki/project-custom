import { useEffect, useReducer, useRef, useState } from "react";
import "./styles.css"


const ImageSlider = () => {

    const reducer = (state, action) => {
        switch(action.type){
            case "" :
                return {...state}
        }
    }
    const [state, dispatch]  = useReducer(reducer, {

    })
    const [move, setMove] =  useState(false)
    const [value, setValue] = useState({})
    const slider = useRef(null)
    const Next = () => {
        const slide =  slider.current
        if(slide){
            const slideNext  = slide.querySelectorAll('.item')
            slide.appendChild(slideNext[0])
            setValue({...value, 0 : true})
            
            setMove(true)
        }   
    }
    useEffect(() => {
       const time = setInterval(() => {
            setMove(false)
            setValue({...value, 0 : false})

            
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
            <div className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item duration-500 ${value[0] ? "scale-200" : "scale-100"}`}>1</div>
            <div className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item duration-500 ${value[1] ? "scale-200" : "scale-100"}`}>2</div>
            <div className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item duration-500 ${value[2] ? "scale-200" : "scale-100"}`}>3</div>
            <div className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item duration-500 ${value[3] ? "scale-200" : "scale-100"}`}>4</div>
        </div>


        <button onClick = {Next} className="bg-white mt-10 w-10 cursor-pointer">next</button>
        <button></button>
        </>


    )
}

export default ImageSlider;