import { useCallback, useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import { InitailDataFlowSlider as ImagesFlow } from "./InitialData";

const MoveSliderTouch = () => {
    const slider = useRef(null)
    const checkDrag =  useRef(false)
    const start = useRef(0)
    const move = useRef(0)


    const handlerDown = (event) => {
    checkDrag.current = true
    start.current = event
    

    }

    const handlerMove = (event) => {
        if(!checkDrag.current) return ;
        move.current = event
        const drag = move.current - start.current
        if(slider.current){
            slider.current.style.scrollBehavior = "smooth"
            if(move.current > start.current){
                slider.current.scrollLeft -= move.current
            }
            else {
                slider.current.scrollLeft += move.current
            }
        }
   }

    const handlerUp = (event) => {
        checkDrag.current = false
        start.current = 0
        move.current = 0
    }
    return(
      <div 
        ref = {slider}
        onMouseDown={(e) => {handlerDown(e.clientX)}}
        onMouseUp={(e) => {handlerUp(e.clientX)}}
        onMouseMove = {(e) => {handlerMove(e.clientX)}}
        className="w-[90vw] h-[40vh] bg-white mt-10 relative flex flex-col flex-wrap overflow-x-hidden select-none cursor-grab duration-1000 transition-all">
        <div className="w-50 h-full   bg-amber-300"></div>
        <div className="w-50 h-full   bg-green-300"></div>
        <div className="w-50 h-full  bg-red-300"></div>
        <div className="w-50 h-full  bg-blue-300"></div>
        <div className="w-50 h-full  bg-pink-300"></div>
        <div className="w-50 h-full   bg-amber-300"></div>
        <div className="w-50 h-full   bg-green-300"></div>
        <div className="w-50 h-full  bg-red-300"></div>
        <div className="w-50 h-full  bg-blue-300"></div>
        <div className="w-50 h-full  bg-pink-300"></div>
      </div>
    )
}
export default MoveSliderTouch;