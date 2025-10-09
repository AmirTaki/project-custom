import { useState } from "react"
import { BrowserRouter, Link } from "react-router-dom"

const Navigation = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle((prevToggle) => !prevToggle)
    }

    return (
        <div className="absolute left-[50%] top-[50%] list-none">

                <div
                    onClick={handleToggle}
                    className=""
                >
                    <i className="bi bi-plus-lg"></i>
                </div>
                <div className={`${toggle ? "hidden" : "flex"}`}>

                    <BrowserRouter>
                        <li className="absolute left-0  [transform-origin:100px] transform duration-500 delay-200">
                            <Link to="/" className="flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full ">
                                <i className="bi bi-house-door "></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="bi bi-person"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="bi bi-gear"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="bi bi-envelope"></i>
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