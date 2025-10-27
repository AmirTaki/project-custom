import './styles.css'
import { useCallback, useEffect, useRef } from "react"

const CardCorner = ({card}) => {
    const cardRef = useRef(null)
  
    const handlerMouseMove = useCallback( () => {

    })

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