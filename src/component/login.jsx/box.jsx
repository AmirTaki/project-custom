import { use } from "react"
import { useCallback, useEffect, useRef } from "react"
const Box = ({box}) => {
    const boxRef = useRef(null)
    const animationCheck = useRef(null)
    const positionBox = useRef({x : 0, y : 0})

    const handlerPostion = useCallback(() => {
        const box = boxRef.current
        if(!box) return;
        
    }, [])
    
    const handlerAnimation = useCallback(() => {
        if(animationCheck.current == null){
            animationCheck.current = requestAnimationFrame(handlerPostion)
        }
    }, [handlerPostion])

 
    const  handlerMouseMove = useCallback((e) => {
        const box = boxRef.current
        if(!box) return;

        const rect = box.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top        

        // box.style.setProperty('--x', `${x}px`)
        // box.style.setProperty('--y', `${y}px`)

        positionBox.current.x = x;
        positionBox.current.y = y;

        handlerAnimation()
    }, [handlerAnimation])
    
    useEffect(() => {
        if(animationCheck.current){

        }
    }, [])
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