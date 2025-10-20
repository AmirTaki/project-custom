import { useEffect, useRef, useState } from "react";
import './styles.css'
import { Icon } from "./icon";
import ListItem from "./listItem";


const CustomRightClick = () => {
    const [mouse, setMouse] = useState({x : 0, y : 0})
    const [show, setShow] = useState(false)

    useEffect(() => {     
        const handlerRightClick = (e) => {
            e.preventDefault();
            
            setMouse({
                x  : e.clientX ,
                y :  e.clientY
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
            style={{top : `${mouse.y}px`, left : `${mouse.x}px`}}
            className={`${show ? "fixed!" : "hidden"}  w-[200px] z-[200] `}>
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