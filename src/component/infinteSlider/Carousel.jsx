import { useRef, useState } from "react";

const Carousel = () => {
    const [isDragging, setIsDragging] = useState(false)
    const [isTranitioning, setIsTransitioning] = useState(false)
    const [dragOffset, setDragOffset] = useState(0)
   
    const conatinerRef =  useRef(null)
    const startX = useRef(0)
    const currentX = useRef(0)

    const handlerDragStart = (client) => {
        setIsDragging(true)
        startX.current  = client
        setIsTransitioning(false)
    }

    const handlerDragMove = (client) => {
        if(!isDragging) return;
        currentX.current = client;
        const diff = currentX.current - startX.current
        setDragOffset(diff)        

    }

    const onMouseDown = (e) => handlerDragStart(e.clientX)
    const onMouseMove = (e) => handlerDragMove(e.clientX)
    return(
        <div className="w-full max-w-4xl mx-auto relative group select-none" dir="ltr">
            {/* viewport */}
            <div 
                ref = {conatinerRef}
                onMouseDown={onMouseDown}
                onMouseMove = {onMouseMove}
                className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing touch-pan-y"
            ></div>
        </div>
    )
}
export default Carousel;