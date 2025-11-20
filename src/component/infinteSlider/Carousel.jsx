import { use, useEffect } from "react";
import { useCallback, useRef, useState } from "react";
import Slide from "./slide";

const Carousel = ({items}) => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [isDragging, setIsDragging] = useState(false)
    const [isTranitioning, setIsTransitioning] = useState(false)
    const [dragOffset, setDragOffset] = useState(0)
   
    const conatinerRef =  useRef(null)
    const startX = useRef(0)
    const currentX = useRef(0)
    const widthRef = useRef(0)


    const cloneHead = items.slice(-2)
    const cloneTail = items.slice(0, 2)
    const extendedItmes = [...cloneHead, ...items, ...cloneTail ]

    const INITIAL_OFFSET = 2;

    useEffect(() => {
        const handleResize = () => {
            if(conatinerRef.current){
                widthRef.current = conatinerRef.current.offsetWidth;
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return() => window.removeEventListener('resize',handleResize )
    }, [])

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

    const getTranslateX = () => {
        const baseTranslate = -currentIndex * 100
        if(isDragging && widthRef.current > 0){
            const dragPercentage = (dragOffset / widthRef.current) * 100
            return baseTranslate + dragPercentage
        }
        return baseTranslate
    }

    const handlerTransitionEnd = () => {
        setIsTransitioning(false)

        const totalLenght = extendedItmes.length;
        const realCount = items.length

        if(currentIndex >= totalLenght - 2){
            setCurrentIndex(currentIndex - realCount)
        }
        else if (currentIndex < 2){
            setCurrentIndex(currentIndex + realCount)   
        }
    }

    let activeIndicator = (currentIndex - 2) % items.length
    if(activeIndicator < 0) activeIndicator += items.length

    const onMouseDown = (e) => handlerDragStart(e.clientX)
    const onMouseMove = (e) => handlerDragMove(e.clientX)
    const onMouseUp = () => handlerDragEnd();
    const onMouseLeave = () => { if(isDragging) handlerDragEnd() }

    const onTouchStart = (e) => handlerDragStart(e.touches[0].clientX)
    const onTouchMove = (e) => handlerDragMove(e.touches[0].clientX)
    const onTouchEnd = () => handlerDragEnd()
    return(
        <div className="w-full max-w-4xl mx-auto relative group select-none" dir="ltr">
            {/* viewport */}
            <div 
                ref = {conatinerRef}
                onMouseDown={onMouseDown}
                onMouseMove = {onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                onTouchStart={onTouchStart}
                onTouchMouve={onTouchMove}
                onTouchEnd={onTouchEnd}
                className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing touch-pan-y"
            >
                {/* track */}
                <div 
                    className="flex"
                    style={{
                        transform : `translateX(${getTranslateX()}%)`,
                        transition : isTranitioning ? 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
                    }} 
                    onTransitionEnd={handlerTransitionEnd}   
                >
                    {extendedItmes.map((item, index) => {
                        const isActive = index === currentIndex;

                        return(
                            <div 
                                key = {`${item.id}-${index}`}
                                className="w-full flex-shrink-0 p-4 box-border"
                            >   
                                <Slide data = {item} isActive = {isActive} />    
                            </div>
                        )
                    })}
                    
                </div>
            </div>
            {/* controls */}
        </div>
    )
}
export default Carousel;