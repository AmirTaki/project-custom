import { useState } from "react"
import { BrowserRouter, Link } from "react-router-dom"
import LinkNavigation from "./linkNavigation"



const Navigation = () => {
    const icons = ['bi bi-house-door', 'bi bi-person', 'bi bi-gear', 'bi bi-envelope']
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle((prevToggle) => !prevToggle)
    }


    
    return (
        <div className="absolute left-[50%] top-[50%] list-none ">

                <div
                    onClick={handleToggle}
                    className=""
                >
                    <i className="bi bi-plus-lg"></i>
                </div>
                <div className={`${toggle ? "hidden" : "flex"}`}>

                    <BrowserRouter>

                        <LinkNavigation icon = {} />
                        
                            <Link to="/">
                                <i className=""></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className=""></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className=""></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="bi bi-key"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="bi bi-camera-video"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="bi bi-controller"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="bi bi-camera"></i>
                            </Link>
                        </li>
                    </BrowserRouter>
                </div>
            </div>
    
    )
}

export default Navigation