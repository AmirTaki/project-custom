import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const MoveSliderTouch = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const animationFrameRef = useRef(null)
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

    
    const handlerDragStart = useCallback((e) => {
        if(animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

        
    }, [currentIndex, slideWidth])

    return(
        <div className="w-full flex flex-col items-center justify-center gap-8">
            <div 
                className="relative overflow-hidden cursor-grab active:cursor-grabbing"
                style={{
                    width : `${slideWidth}px`,
                    height: `${slideWidth * .75}px`
                }}
                onMouseDown={handlerDragStart}
           >

            </div>
        </div>
    )
}
export default MoveSliderTouch;