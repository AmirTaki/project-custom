import { BrowserRouter, useMatch } from "react-router-dom";
import { iconsList } from "./iconList";
import LinkMenu from "./linkMenu";
import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { navigationContext } from "../home/Home";

const DoctsMenu = () => {

    const [toggle, setToggle] = useState(false)

    const {DoctsMenuRef, dragLocationRef, isDraggingDocts} = useContext(navigationContext)

    const handlerMouseDown = useCallback((e) => {
        const rect =  DoctsMenuRef.current.getBoundingClientRect();
        dragLocationRef.current = {
            x : e.clientX - rect.left,
            y : e.clientY - rect.top
        }
        isDraggingDocts.current = true
    }, [])
  
  
    return(
        // navigation
        <div 
            ref = {DoctsMenuRef}
            onMouseDown={handlerMouseDown}
            // delay-[800ms]
            className={` 
                ${toggle ? "w-[200px] h-[200px]   transition-[transform,width,height,background-color] duration-500 delay-75 " : "w-[70px] h-[70px] transition-[transform,width,height,background-color] duration-500 delay-500   "}
                  bg-[#212532] rounded-[10px] cursor-pointer   fixed left-[150px] top-[100px]
                flex items-center  justify-center z-[1000]! ` 
            }
            onClick={() => {setToggle((prev) => (!prev))}}
            // style={{left : `${dragState.location.x}px`, top :`${dragState.location.y}px`}}

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