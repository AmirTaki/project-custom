import imgBackGround from "./img/background.png"
import imgTransparent from "./img/transparent.png"
import imgOrginal from "./img/original.jpg"
import imgArrwo from "./img/arrow.png"
import './styles.css'
import { useCallback, useEffect, useRef, useState } from "react"


const BackgroundChangeEffect = () => {
    const [sliderPosition, setSliderPosition] =  useState(50)
    const [isDragging, setIsDragging] =  useState(false)
    const sliderContainerRef = useRef(null)
  

    const handleMove = useCallback((clientX) => {

    }, [isDragging])

    const handlerMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true)   
    }
    const handlerTouchStart = () => {
        setIsDragging(true)
    }
    const handlerMouseMove = useCallback((e) => {
        handleMove(e.clientX)
    }, [handleMove])

    const handlerTouchMove = useCallback((e) => {
        if(e.touches[0]){
            handleMove(e.touches[0].clientX)
        }
    }, [handleMove])

    const handlerEndDrag = useCallback(() = {
        setIsDragging(false)
    }, [])

    useEffect(() => {

    }, [isDragging, handlerMouseMove, handlerTouchMove, handlerEndDrag])
    return(
        // container
        <div className="bg-amber-50 ">
            {/* img box */} 
            <div 
                onMouseDown={handlerMouseDown}
                onTouchStart={handlerTouchStart}
                ref = {sliderContainerRef}
                style={{backgroundImage : `url(${imgBackGround})`}}
                className="top-20 relative w-[800px] h-[100%] max-w-4xl aspect-[1.5/1] overflow-hidden select-none cursor-ew-resize rounded-2xl bg-white shadow-2xl"
            >
                {/* img before */}
                <img src={imgTransparent} alt=""
                    draggable = {false}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* line wrap */}
                <div 
                    style={{'--i': `calc(${sliderPosition}% - 30px)`, clipPath : `inset(0 ${100 - sliderPosition}% 0 0 )`,}}
                    className="inset-0 absolute bg-amber-600 w-full  h-full overflow-hidden pointer-events-none clipPath"
                >

                    {/* img after */}
                    <img 
                        src={imgOrginal} alt=""
                        draggable = {false}
                        className="absolute inset-0 w-full h-full top-0 object-cover pointer-events-none"
                        style = {{left : `calc(${sliderPosition}%) - 1px`}}
                    />
                </div>


            </div>
        </div>
    )
}
export default BackgroundChangeEffect