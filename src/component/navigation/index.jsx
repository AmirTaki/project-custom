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
        <div className="absolute left-[50%] top-[50%] list-none ">

                <div
                    onClick={handleToggle}
                    className={`${toggle ? "rotate-[0deg]" : "rotate-[315deg]"}`}
                >
                    <i className="bi bi-plus-lg"></i>
                </div>
                <div className={`${toggle ? "hidden" : "flex"}`}>

                    <BrowserRouter>
                        {listIcons.map((item, index) => {
                            return(
                                <LinkNavigation icon =  {item} key = {index} conter = {index}/>
                            )
                        })}
                        
                    
                    </BrowserRouter>
                </div>
            </div>
    
    )
}

export default Navigation