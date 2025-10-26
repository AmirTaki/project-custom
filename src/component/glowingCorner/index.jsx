import { useCallback, useRef } from "react"
import './styles.css'

const GlowingCorner = () => {
    const cardRef =  useRef(null)
    const handlerMouseMove = useCallback((e) => {

        const node = cardRef.current ;
        if(!node) return;
        const rect = node.getBoundingClientRect()
        const x =  e.clientX - rect.left
        const y =  e.clientY - rect.top   
        
        node.style.setProperty('--x', `${x}px`)
        node.style.setProperty('--y', `${y}px`)
    }, [] )


    return( 
        // container
        <div className="relative flex items-center justify-center min-h-[100vh] gap-[50px] bg-[#222] flex-wrap">
            {/* card */}
            <div 
                ref = {cardRef}
                onMouseMove={handlerMouseMove}
                style={{ "--color-bg" : "#0f0"}}
                className=" cardGlowingCorner"
            >

            </div>
        </div>
    )
}

export default GlowingCorner;