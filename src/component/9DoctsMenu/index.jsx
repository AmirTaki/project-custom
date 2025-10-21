import { BrowserRouter, useMatch } from "react-router-dom";
import { iconsList } from "./iconList";
import LinkMenu from "./linkMenu";
import { useContext, useMemo, useState } from "react";
import { navigationContext } from "../home/Home";


const DoctsMenu = () => {

    const {DotsMenuRef, dispatchDrag, dragState} = useContext(navigationContext)
    const [toggle, setToggle] = useState(false)
    const handlerMouseDown = useMemo(() =>(event) => {
        dispatchDrag({type : 'onMouseDownDocts', payload : {flag : true, event, event }})
    }, [DotsMenuRef])

    return(
        // navigation
        <div 
            ref = {DotsMenuRef}
            onMouseDown={handlerMouseDown}
            // delay-[800ms]
            className={` 
                ${toggle ? "w-[200px] h-[200px] delay-0 " : "w-[70px] h-[70px] "}
                  bg-[#212532] rounded-[10px] cursor-pointer   fixed 
                 duration-[500ms] flex items-center  justify-center z-[1000]! ` 
            }
            style={{left : `${dragState.location.x}px`, top : `${dragState.location.y}px`}}
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