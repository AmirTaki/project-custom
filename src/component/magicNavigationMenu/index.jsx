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
                        
                    </ul>
                </BrowserRouter>
        </div>
    )
}

export default MagicNavigationMenu;