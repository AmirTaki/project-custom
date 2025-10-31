import imgBackGround from "./img/background.png"
import imgTransparent from "./img/transparent.png"
import imgOrginal from "./img/original.jpg"
import imgArrwo from "./img/arrow.png"
import './styles.css'
import { useCallback, useEffect, useRef, useState } from "react"


const BackgroundChangeEffect = () => {
    const [sliderPostion, setSliderPostion] =  useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const  sliderContainerRef = useRef(null)

    const handleMove = useCallback((clientX) => {
        if(!isDragging || !sliderContainerRef.current) return;

        const rect =  sliderContainerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
        const percent = (x / rect.width * 100)

        setSliderPostion(percent)
    }, [isDragging])

    const handlerMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true)
    }
    const handlerTouchStart = (e) => {
        setIsDragging(true)
    }
    const handlerMouseMove = useCallback((e) => {
        handleMove(e.clientX)
    }, [handleMove])

    const handlerTouchMove = useCallback((e) => {
        if(e.touches[0]){
            handleMove(e.touches[0].clientX);
        }
    }, [handleMove])
    
    const handleEndDrag = useCallback( () => {
        setIsDragging(false)
    }, [])

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
    }, [isDragging, handlerMouseMove, handlerTouchMove, handleEndDrag])

    return(
        // {/*  container */}
        <div className="">
            {/* img box */}
            <div 
                onMouseDown={handlerMouseDown}
                onTouchStart={handlerTouchStart}
                ref = {sliderContainerRef}
                className="top-10 relative w-[700px] h-[100%] max-w-4xl aspect-[1.5/1] overflow-hidden select-none cursor-ew-resize rounded-lg shadow-2xl bg-slate-900"
            >
                <img 
                    src={imgOrginal} alt="" 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    draggable = {false}     
                    />


                {/* img wrap */}
                <div 
                    style = {{"--i" : `calc(${sliderPostion}% - 30px)`  ,clipPath : `inset(0 ${100 - sliderPostion }% 0 0 )`, backgroundImage : `url(${imgBackGround})`}}
                    className={` inset-0 absolute bg-white w-full h-full overflow-hidden pointer-events-none
                    clipPath `
                    }
                >
                    <img 
                        src={imgTransparent} alt="" 
                        className="absolute inset-0 w-[100%] h-[100%] top-0 object-cover pointer-events-none"
                        draggable = {false}
                        style = {{left : `calc(${sliderPostion}%) - 1px`}}
                    />

               
                </div>
            </div>
         
        </div>
    )
}
export default BackgroundChangeEffect