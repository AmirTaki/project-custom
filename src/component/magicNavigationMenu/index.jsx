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
                    <ul className="flex w-[350px]">
                        {IconListNaviation.map((item, index) => {
                            return(
                                <LinkMenu key = {index} item = {item} />                            )
                        })}
                        <div 
                            className="
                            absolute  -top-[50%] w-[70px] h-[70px] bg-[#29fd53] rounded-[50%] border-6 border-[#29fd53] duration-500
                            before:content before:absolute before:top-[50%] before:left[-22px] before:w-[20px] before:h-[20px] before:bg-red-500 before:rounded-tr-[20px] before:shadow-[0_-10px_0_0_#222327]
                            
                            "
                        ></div>
                    </ul>
                </BrowserRouter>
        </div>
    )
}

export default MagicNavigationMenu;