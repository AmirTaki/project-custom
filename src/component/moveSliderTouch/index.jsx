import { useCallback, useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import { InitailDataFlowSlider as ImagesFlow } from "./InitialData";

const MoveSliderTouch = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderRef = useRef(null)
    const animationFrameRef = useRef(null)
    const isDraggingRef = useRef(false)
    const startXRef = useRef(0)
    const dragDeltaRef = useRef(0)
    const basePositionRef = useRef(0)

    // use window size
    const useWindowSize = () => {
        const [size, setSize] = useState({
            width : window.innerWidth,
            height: window.innerHeight
        })

        useEffect(() => {
            const handlerResize = () => {
                setSize({
                    width : window.innerWidth,
                    height: window.innerHeight
                })
            }
            window.addEventListener('resize', handlerResize)
            return () => window.removeEventListener('resize', handlerResize)
        }, [])
        return size
    }

    const {width, height} = useWindowSize();
    
    const slideWidth = useMemo(() => {
        if(!width) return 300;
        return Math.min(width * .7, 500)
    }, [width])


    const getClientX  = (e) => {
        return 'touches' in e ? e.touches[0].clientX : e.clientX;
    }
    
    const handlerDragStart = useCallback((e) => {
        if(animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

        isDraggingRef.current = true;
        startXRef.current = getClientX(e)
        dragDeltaRef.current = 0
        if(sliderRef.current){
            sliderRef.current.style.transition  ='none'
            basePositionRef.current = -currentIndex * slideWidth;
        }

    }, [currentIndex, slideWidth])

    const handlerDragMove = useCallback((e) => {
        if(!isDraggingRef.current || !sliderRef.current) return;

        const currentX = getClientX(e)
        dragDeltaRef.current = currentX - startXRef.current;
        const newPosition =  basePositionRef.current + dragDeltaRef.current

        sliderRef.current.style.transform = `translateX(${newPosition}px)`;
    }, [])

    useEffectEvent(() => {
        const onMouseMove = (e) => handlerDragMove(e)
        const onTouchMove = (e) => handlerDragMove(e)
        const onMouseUp = (e) => handlerDragEnd(e)
        const onTouchEnd = (e) => handlerDragEnd(e)

        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener("touchmove", onTouchMove)
        window.addEventListener('mouseup', onMouseUp)
        window.addEventListener('touchend', onTouchEnd)
        window.addEventListener('',)
        return() => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('touchmove', onTouchMove)
        }
    }, [])

    return(
        <div className="w-full flex flex-col items-center justify-center gap-8">
            <div 
                className="relative overflow-hidden cursor-grab active:cursor-grabbing"
                style={{
                    width : `${slideWidth}px`,
                    height: `${slideWidth * .75}px`
                }}
                onMouseDown={handlerDragStart}
                onTouchStart={handlerDragStart}
            >
                <div 
                    ref ={sliderRef}
                    className="flex h-full"
                    style={{willChange: 'transform'}}
                >
                    {ImagesFlow.images.map((item) => (
                        <div 
                            key = {item.id} 
                            className="flex-shrink-0 w-full h-full"
                            style={{width : `${slideWidth}px`}}
                        >
                            <img src={item.img} alt="" 
                                className="w-full h-full object-cover rouded-xl shadow-2xl shadow-black/50  select-none pointer-events-none "
                                draggable = 'false'
                            />
                        </div>
                    ))}
                </div>    
            </div>
            <div className="flex justify-center gap-2">
                {ImagesFlow.images.map((item) =>  (
                    <button 
                        key = {item.id}
                        onClick = {() =>  setCurrentIndex(item.id)}
                        className={`w-3 h-3 rounded-full transition-all duration-300
                            ${currentIndex === item.id ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"}
                        `}
                        aria-label={`Go to slide ${item.id + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
export default MoveSliderTouch;