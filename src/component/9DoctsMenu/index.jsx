import { BrowserRouter } from "react-router-dom";
import { iconsList } from "./iconList";
import LinkMenu from "./linkMenu";
import { useContext, useState } from "react";
import { navigationContext } from "../home/Home";


const DoctsMenu = () => {

    const {DotsMenuRef, dispatchDrag, dragState} = useContext(navigationContext)
    const [toggle, setToggle] = useState(false)
    // const [TouchLocation, setTouchLocation] = useState({
    //     x : 122, 
    //     y : 200
    // })
    return(
        // navigation
        <div 
            ref = {DotsMenuRef}
            onMouseDown={() => {dispatchDrag({type : 'onMouseDownDocts', payload : {flag : true, event, event }})}}
            className={` 
                ${toggle ? "w-[200px] h-[200px] delay-0 " : "w-[70px] h-[70px] delay-[800ms]"}
                  bg-[#212532] rounded-[10px] cursor-pointer   fixed 
                 duration-[500ms] flex items-center  justify-center z-[1000]! ` 
            }
            style={{top : `${dragState.location.x}px`, left : `${dragState.location.y}px`}}
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