import { BrowserRouter, useMatch } from "react-router-dom";
import { iconsList } from "./iconList";
import LinkMenu from "./linkMenu";
import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { navigationContext } from "../home/Home";

const DoctsMenu = () => {

    const {DotsMenuRef, dispatchDrag, dragState, dragLocationRef, isDraggingRef} = useContext(navigationContext)
    const [toggle, setToggle] = useState(false)
    // const handlerMouseDown = useCallback((event) => {
    //     dispatchDrag({type : 'onMouseDownDocts', payload : {flag : true, event, event }})
    // }, [dispatchDrag])




    const handlerMouseDown = useCallback((event) => {
    const rect = DotsMenuRef.current.getBoundingClientRect();
    dragLocationRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    };
    isDraggingRef.current = true;
    }, []);



    return(
        // navigation
        <div 
            ref = {DotsMenuRef}
            onMouseDown={handlerMouseDown}
            // delay-[800ms]
            className={` 
                ${toggle ? "w-[200px] h-[200px]   transition-[transform,width,height,background-color] duration-500 delay-75 " : "w-[70px] h-[70px] transition-[transform,width,height,background-color] duration-500 delay-500   "}
                  bg-[#212532] rounded-[10px] cursor-pointer   fixed 
                flex items-center  justify-center z-[1000]! ` 
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