import { useState } from "react"
import { BrowserRouter, Link } from "react-router-dom"
import LinkNavigation from "./linkNavigation"



const Navigation = () => {
    const listIcons = ['bi bi-house-door', 'bi bi-person', 'bi bi-gear', 'bi bi-envelope', "bi bi-key", "bi bi-camera-video", "bi bi-controller", "bi bi-camera"]
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle((prevToggle) => !prevToggle)
    }


    
    return (
        <div className="flex justify-center items-center list-none relative w-[200px] h-[200px]">

                <div
                    onClick={handleToggle}
                    className={`
                        w-[60px] h-[60px] bg-white flex items-center justify-center z-50 rounded-full cursor-pointer
                        shadow-[0_3px_4px_rgba(0,0,0,0.15)] text-[2em] duration-[1250ms]!
                        ${toggle ? "" : "rotate-[315deg] "}`}
                >
                    <i className="bi bi-plus-lg"></i>
                </div>
                        {/* className={`${toggle ? "hidden" : "flex"}`} */}
                    <BrowserRouter>
                        {listIcons.map((item, index) => {
                            return(
                                <LinkNavigation icon =  {item} key = {index} index = {index} toggle = {toggle}/>
                            )
                        })}
                    </BrowserRouter>
            </div>
    
    )
}

export default Navigation