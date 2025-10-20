import { useEffect, useRef, useState } from "react";
import './styles.css'

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
                <li className={`p-[20px] bg-[#525F6C] border-1 border-[#5d6a77] text-white duration-500 
                    hover:bg-[#72DE73] hover:translate-x-0 hover:translate-y-[-10px] hover:shadow-[0_10px_50px_#636363]
                        animate-[showMenu_0.5s_ease-in-out_forwards]
                `}>
                    <i className="fa-solid fa-house mr-[15px]"></i> Home
                </li>
              
                <li className={`p-[20px] bg-[#525F6C] border-1 border-[#5d6a77] text-white duration-500 
                    hover:bg-[#72DE73] hover:translate-x-0 hover:translate-y-[-10px] hover:shadow-[0_10px_50px_#636363]
                         animate-[showMenu_0.5s_ease-in-out_forwards]
                    `}>
                    <i className="fa-solid fa-house mr-[15px]"></i> contact
                </li>
              
            </ul>

        </div>
        </>
 
    )
}

export default CustomRightClick;