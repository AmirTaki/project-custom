import { useEffect, useRef, useState } from "react";
import './styles.css'
import { Icon } from "./icon";
import ListItem from "./listItem";


const CustomRightClick = () => {
    const [mouse, setMouse] = useState({x : 0, y : 0})
    const [change, setChange] = useState(false)
    const [show, setShow] = useState(false)
    
    useEffect(() => {
        
        const handlerRightClick = (e) => {
            e.preventDefault();
            
            setMouse({
                x  : e.clientX,
                y : e.clientX
            })

            setShow(true)
        }
        const handlerShow = () => {setShow(false)}
        
        document.addEventListener("contextmenu", handlerRightClick)
        document.addEventListener('click', handlerShow)
        
        return () => {
            document.removeEventListener('contextmenu', handlerRightClick)
            document.removeEventListener('click', handlerShow)
        }
    },[])


    return(
        <>
        {/* menu */}
        <div 
            style={{top : `${mouse.x}px`, left : `${mouse.y}px`}}
            className={`${show ? "fixed!" : "hidden"}  w-[200px] `}>
            {/* ul */}
            <ul className="p-0 m-0 list-none">
              
                {/* li */}
                {Icon.map((item) => {
                    return(
                        <ListItem key = {item.id} item = {item} />
                    )
                })}
            
            </ul>

        </div>
        </>
 
    )
}

export default CustomRightClick;