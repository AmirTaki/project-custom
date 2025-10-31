import imgBackGround from "./img/background.png"
import imgTransparent from "./img/transparent.png"
import imgOrginal from "./img/original.jpg"
import imgArrwo from "./img/arrow.png"
import './styles.css'
import { useCallback, useEffect, useRef, useState } from "react"


const BackgroundChangeEffect = () => {
  
    return(
        // container
        <div className="bg-amber-50 ">
            {/* img box */}
            <div 
                style={{backgroundImage : `url(${imgBackGround})`}}
                className="top-20 relative w-[700px] h-[100%] max-w-4xl aspect-[1.5/1] overflow-hidden select-none cursor-ew-resize rounded-2xl bg-white shadow-2xl"
            >
                {/* img */}
                <img src={imgTransparent} alt=""
                    draggable = {false}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
            </div>
        </div>
    )
}
export default BackgroundChangeEffect