import { BrowserRouter } from "react-router-dom";
import { iconsList } from "./iconList";
import LinkMenu from "./linkMenu";
import { useState } from "react";

const DoctsMenu = () => {

    const [toggle, setToggle] = useState(false)
    const [TouchLocation, setTouchLocation] = useState({
        x : 122, 
        y : 200
    })
    return(
        // navigation
        <div 
            className={` 
                ${toggle ? "w-[200px] h-[200px] delay-0 " : "w-[70px] h-[70px] delay-[800ms]"}
                  bg-[#212532] rounded-[10px] cursor-pointer   fixed 
                 duration-[500ms] flex items-center  justify-center ` 
            }
            style={{top : `${TouchLocation.x}px`, left : `${TouchLocation.y}px`}}
            onClick={() => {setToggle((prev) => (!prev))}}
            >
    
            <BrowserRouter >
                {iconsList.map((item, index) => {
                    return(
                        <LinkMenu key = {index} item = {item} toggle = {toggle} index = {index}/>
                    )
                })}
            </BrowserRouter>


        </div>
    )
}

export default DoctsMenu;