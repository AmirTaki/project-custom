import { use } from "react";
import { useCallback, useRef, useState } from "react";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [isDragging, setIsDragging] = useState(false)
    const [isTranitioning, setIsTransitioning] = useState(false)
    const [dragOffset, setDragOffset] = useState(0)
   
    const conatinerRef =  useRef(null)
    const startX = useRef(0)
    const currentX = useRef(0)
    const widthRef = useRef(0)

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

    const handlerDragEnd = () => {
        if(!isDragging) return;
        setIsDragging(false)
        
        const threshold =  widthRef.current * .2

        if(dragOffset > threshold){
            prevSlide()
        }
        else if(dragOffset < -threshold){
            nextSlide()
        }
        else {
            setIsTransitioning(true)
        }
        setDragOffset(0)
        
    }

    const prevSlide = useCallback(() => {
        setIsTransitioning(true)
        setCurrentIndex((prev) => (prev - 1))
    }, [])


    const nextSlide = useCallback(() => {
        setIsTransitioning(true)
        setCurrentIndex((prev) => (prev + 1))
    }, [])

    const onMouseDown = (e) => handlerDragStart(e.clientX)
    const onMouseMove = (e) => handlerDragMove(e.clientX)
    const onMouseUp = () => handlerDragEnd();
    return(
        <div className="w-full max-w-4xl mx-auto relative group select-none" dir="ltr">
            {/* viewport */}
            <div 
                ref = {conatinerRef}
                onMouseDown={onMouseDown}
                onMouseMove = {onMouseMove}
                onMouseUp={onMouseUp}
                className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing touch-pan-y"
            ></div>
        </div>
    )
}
export default Carousel;