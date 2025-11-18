import { useCallback, useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import { InitailDataFlowSlider as ImagesFlow } from "./InitialData";

const MoveSliderTouch = () => {
   
    return(
      <div className="w-[90vw] h-[40vh] bg-white mt-10 relative flex flex-col flex-wrap ">
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