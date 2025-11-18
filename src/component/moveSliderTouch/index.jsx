import { useCallback, useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import { InitailDataFlowSlider as ImagesFlow } from "./InitialData";

const MoveSliderTouch = () => {
   
    return(
      <div className="w-[90vw] h-[40vh] bg-white mt-10">
        <div className="w-50 h-30 bg-amber-300"></div>
        <div className="w-50 h-30 bg-green-300"></div>
        <div className="w-50 h-30 bg-red-300"></div>
        <div className="w-50 h-30 bg-blue-300"></div>
        <div className="w-50 h-30 bg-pink-300"></div>
      </div>
    )
}
export default MoveSliderTouch;