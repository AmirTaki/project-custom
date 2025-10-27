import './styles.css'
import { useCallback, useEffect, useRef } from "react"

const CardCorner = ({card}) => {
    const cardRef = useRef(null)
    const checkRef = useRef(false)
    const postionRef = useRef({x : 0, y : 0})

    const handlerPosition = useCallback(() => {

    }, [])

    const handlerAnimation = useCallback(() => {
        if(checkRef.current == false){
            cardRef.current  = requestAnimationFrame(handlerPosition)
        }
    }, [handlerPosition])
  
    const handlerMouseMove = useCallback( (e) => {

        const node =  cardRef.current
        if(!node) return ;

        const rect = node.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        // node.style.setProperty('--x', `${x}px`)
        // node.style.setProperty('--y', `${y}px`)

        postionRef.current.x = x;
        postionRef.current.y = y;
        handlerAnimation()
    },[handlerAnimation])

    return(
        <div 
            ref = {cardRef}
            onMouseMove={handlerMouseMove}
      
            style={{ "--color-bg" : `${card.color}` }}
            className=" cardGlowingCorner"
        >
        </div>
    )
}

export default CardCorner;