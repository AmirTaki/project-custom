import './styles.css'
import { useCallback, useEffect, useRef } from "react"

const CardCorner = ({card}) => {
    const cardRef = useRef(null)
  
    const handlerMouseMove = useCallback( (e) => {

        const node =  cardRef.current
        if(!node) return ;

        const rect = node.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        node.style.setProperty('--x', `${x}px`)
        node.style.setProperty('--y', `${y}px`)
    },[])

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