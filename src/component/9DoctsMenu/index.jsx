import { BrowserRouter } from "react-router-dom";
import { iconsList } from "./iconList";
import LinkMenu from "./linkMenu";
import { useState } from "react";

const DoctsMenu = () => {

    const [toggle, setToggle] = useState(false)
    return(
        // navigation
        <div 
            className={` 
                ${toggle ? "w-[200px] h-[200px] delay-[0ms] " : "w-[70px] h-[70px] delay-[800ms]"}
                relative  bg-[#212532] rounded-[10px] cursor-pointer
                 duration-[500ms]  flex justify-center items-center` 
            }
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