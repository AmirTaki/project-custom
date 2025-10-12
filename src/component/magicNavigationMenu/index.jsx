import { useReducer } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { IconListNaviation } from "./iconList";
import LinkMenu from "./linkMenu";


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
                                <LinkMenu key = {index} item = {item} />                            )
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