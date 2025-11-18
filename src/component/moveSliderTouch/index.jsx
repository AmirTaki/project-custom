import { useCallback, useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import { InitailDataFlowSlider as ImagesFlow } from "./InitialData";

const MoveSliderTouch = () => {
    const checkDrag =  useRef(false)

    const handlerDown = (event) => {
    checkDrag.current = true

    }

    const handlerMove = (event) => {
        if(!checkDrag.current) return ;
        console.log(event)

   }

    const handlerUp = (event) => {
        checkDrag.current = false
    }
    return(
      <div 
        onMouseDown={(e) => {handlerDown(e.clientX)}}
        onMouseUp={(e) => {handlerUp(e.clientX)}}
        onMouseMove = {(e) => {handlerMove(e.clientX)}}
        className="w-[90vw] h-[40vh] bg-white mt-10 relative flex flex-col flex-wrap overflow-x-scroll ">
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