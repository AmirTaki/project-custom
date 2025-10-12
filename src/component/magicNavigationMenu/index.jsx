import { useReducer } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { IconListNaviation } from "./iconList";


// const [state, dispatch] =  useReducer(reducer, [])


const MagicNavigationMenu = () => {
    return(
        // navigation
        <div className="
            flex justify-center items-center   w-[400px] h-[70px] bg-white relative rounded-[10px]"
            >
                <BrowserRouter>
                    <ul>
                        {IconListNaviation.map((item, index) => {
                            return(
                                <div key = {index}>{item.name}</div>
                            )
                        })}
                        <li>
                            <Link to = '/' >
                                <span className=""><i className="bi bi-house-door"></i></span>
                                <span className="">Home</span>
                            </Link>
                        </li>
                    </ul>
                </BrowserRouter>
        </div>
    )
}

export default MagicNavigationMenu;