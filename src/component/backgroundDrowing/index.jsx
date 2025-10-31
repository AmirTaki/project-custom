import imgBackGround from "./img/background.png"
import imgTransparent from "./img/transparent.png"
import imgOrginal from "./img/original.jpg"
import imgArrwo from "./img/arrow.png"
import './styles.css'
import { useCallback, useEffect, useRef, useState } from "react"


const BackgroundChangeEffect = () => {
  
    return(
        // container
        <div className="">
            {/* img box */}
            <div 
                style={{backgroundImage : `url(${imgBackGround})`}}
                className="top-20 relative w-[700px] h-[500px] bg-white"
            >

            </div>
        </div>
    )
}
export default BackgroundChangeEffect