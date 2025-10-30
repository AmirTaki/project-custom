import imgBackGround from "./img/background.png"
import imgTransparent from "./img/transparent.png"
import imgOrginal from "./img/original.jpg"
import imgArrwo from "./img/arrow.png"
import { useCallback, useEffect, useRef, useState } from "react"


const BackgroundChangeEffect = () => {
    const [sliderPostion, setSliderPostion] =  useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const  sliderContainerRef = useRef(null)

    const handlerMouseDown = () => {

    }
    const handlerTouchStart = () => {

    }
    const handlerMouseMove = () => {

    }
    const handlerTouchMove = () => {

    }
    const handleEndDrag = () => {

    }

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handlerMouseMove)
            window.addEventListener("touchmove", handlerTouchMove)
            window.addEventListener("mouseup", handleEndDrag)
            window.addEventListener("touchend", handleEndDrag)

            return() => {
                window.removeEventListener("mousemove", handlerMouseMove)
                window.removeEventListener("touchmove", handlerTouchMove)
                window.removeEventListener("mouseup", handleEndDrag)
                window.removeEventListener("touchend", handleEndDrag)
            }
        }
    })
    return(
        <>
            <div 
                onMouseDown={handlerMouseDown}
                onTouchStart={handlerTouchStart}
                ref = {sliderContainerRef}
                className="top-10 relative w-full max-w-4xl aspect-[1.5/1] overflow-hidden select-none cursor-ew-resize rounded-lg shadow-2xl bg-slate-900"
            >

                <img 
                    src={imgOrginal} alt="" 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    draggable = {false}     
                />

            </div>
            <div 
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style = {{clipPath : `inset(0 ${100 - sliderPostion }% 0 0 )`}}
            >
                <img 
                    src={imgTransparent} alt="" 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    draggable = {false}
               />
               <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs sm:text-sm px-2 py-1 rounded-md pointer-events-none"></div>

                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white/80 backdrop-blur-sm cursor-ew-resize pointer-events-none"
                    style = {{left : `calc(${sliderPostion}%) -1 px`}}
                >
                </div>
            </div>
        </>
    )
}
export default BackgroundChangeEffect