import { useContext, useMemo, useState, useCallback } from "react"
import { BrowserRouter, Link } from "react-router-dom"
import LinkNavigation from "./linkNavigation"
import { navigationContext } from "../home/Home"

const Navigation = () => {
    const listIcons = ['bi bi-house-door', 'bi bi-person', 'bi bi-gear', 'bi bi-envelope', "bi bi-key", "bi bi-camera-video", "bi bi-controller", "bi bi-camera"]
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle((prevToggle) => !prevToggle)
    }

    const {NavigationRef, dragPostionRef, isDraggingNavigation} =  useContext(navigationContext)

    const handlerMouseDown = useCallback((e) => {
        const rect = NavigationRef.current.getBoundingClientRect();
        dragPostionRef.current ={
            x : e.clientX - rect.left,
            y : e.clientY - rect.top
        }
        isDraggingNavigation.current = true
    }, [])

    return (
        <div 
            ref = {NavigationRef}
            onMouseDown = {handlerMouseDown} 
            className={`absolute  list-none top-[300px] left-[130px]   w-[2px] h-[2px]   z-300`}
        >
            <div
                onClick={handleToggle}
                className={`
                    w-[60px] h-[60px] bg-white flex items-center justify-center  rounded-full cursor-pointer
                    shadow-[0_3px_4px_rgba(0,0,0,0.15)] text-[2em] duration-[1250ms]! fixed  z-40
                    ${toggle ? "" : "rotate-[315deg] "}`}
            >
                <i className="bi bi-plus-lg"></i>
            </div>
            <BrowserRouter >
                {listIcons.map((item, index) => {
                    return(
                        <LinkNavigation icon =  {item} key = {index} index = {index} toggle = {toggle} />
                    )
                })}
            </BrowserRouter>
        </div>
    
    )
}

export default Navigation