import { useEffect, useRef, useState } from "react";
import "./styles.css"


const ImageSlider = () => {
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
            <div className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item `}>1</div>
            <div className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item `}>2</div>
            <div className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item `}>3</div>
            <div className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item `}>4</div>
        </div>


        <button onClick = {Next} className="bg-white mt-10 w-10 cursor-pointer">next</button>
        <button></button>
        </>


    )
}

export default ImageSlider;