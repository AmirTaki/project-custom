import { useCallback, useRef } from "react"
import { BoxItem } from "./boxItem"
import "./styles.css"

const LoginForm = () => {
    const boxRef = useRef(null)
    const handlerAnimation = useCallback(() => {

    }, [])
    const  handlerMouseMove = ((e) => {
        const box = boxRef.current
        if(!box) return;

        const rect = box.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top        

        box.style.setProperty('--x', `${x}px`)
        box.style.setProperty('--y', `${y}px`)
    })
    return(
        // container
        <div className="grid grid-cols-[repeat(3,150px)] gap-[4px] mt-5">
            {/* box */}
            {BoxItem.box.map((box) => {
                return(
                    <div 
                        ref = {boxRef}
                        onMouseMove={handlerMouseMove}
                        style = {{"--clr" : box.color,  }}
                        key = {box.id} 
                        className="boxContainer"
                    ></div>
                )
            })}
        </div>
    )
}

export default LoginForm