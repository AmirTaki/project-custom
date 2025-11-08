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
        if(!isDragging || !sliderContainerRef.current) return;

        const rect = sliderContainerRef.current.getBoundingClientRect();
        const x =  Math.max(0, Math.min(clientX - rect.left, rect.width))
        const percent = (x / rect.width * 100)

        setSliderPosition(percent)
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

    const handlerEndDrag = useCallback(() => {
        setIsDragging(false)
    }, [])

    useEffect(() => {   
        if(isDragging){
            window.addEventListener('mousemove', handlerMouseMove )
            window.addEventListener('touchmove', handlerTouchMove )
            window.addEventListener('mouseup', handlerEndDrag )
            window.addEventListener('touchend', handlerEndDrag )

            return() => {
                window.removeEventListener('mousemove', handlerMouseMove )
                window.removeEventListener('touchmove', handlerTouchMove )
                window.removeEventListener('mouseup', handlerEndDrag )
                window.removeEventListener('touchend', handlerEndDrag )
            }
        }

    }, [isDragging, handlerMouseMove, handlerTouchMove, handlerEndDrag])
    return(
        // container
        <div className="w-[900px] max-lg:w-[90%]! h-[580px] max-lg:h-[400px]! mx-10">
            {/* img box */} 
            <div 
                onMouseDown={handlerMouseDown}
                onTouchStart={handlerTouchStart}
                ref = {sliderContainerRef}
                style={{backgroundImage : `url(${imgBackGround})`}}
                className="top-20 relative w-[100%]  h-[100%]  aspect-[15/10] overflow-hidden  select-none cursor-ew-resize! rounded-2xl bg-white shadow-2xl "
            >
                {/* img before */}
                <img src={imgTransparent} alt=""
                    draggable = {false}
                className="absolute inset-0 w-full h-full md:object-cover object-center! pointer-events-none  "
                />

                {/* line wrap */}
                <div 
                    style={{'--i': `calc(${sliderPosition}% - 30px)`, clipPath : `inset(0 ${100 - sliderPosition}% 0 0 )`,}}
                    className="inset-0 relative  w-[100%]   h-full overflow-hidden!  pointer-events-none  cursor-ew-resize!"
                >

                    {/* img after */}
                    <img 
                        src={imgOrginal} alt=""
                        draggable = {false}
                        className="absolute inset-0 w-full h-full top-0 md:object-cover object-center! pointer-events-none  "
                        style = {{left : `calc(${sliderPosition}%) - 1px`}}
                    />
                </div>

            \

            </div>
        </div>
    )
}
export default BackgroundChangeEffect