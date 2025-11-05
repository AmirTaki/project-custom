import { useCallback, useRef } from "react"
const Box = ({box}) => {
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
        <div 
            ref = {boxRef}
            onMouseMove={handlerMouseMove}
            style = {{"--clr" : box.color,  }}
            key = {box.id} 
            className="boxContainer"
        ></div>
    )
}

export default Box;