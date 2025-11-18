import { useEffect, useMemo, useState } from "react";

const MoveSliderTouch = () => {

    
 
    const sliderWidth = useMemo(() => {

    })

    const useWindowSize = () => {
        const [size, setSize] = useState({
            width : window.innerWidth,
            height: window.innerHeight
        })

        useEffect(() => {
            const useWindowSize = () => {
    
            }
            window.addEventListener('resize', handlerResize)
            return () => window.removeEventListener('resize', handlerResize)
        }, [])
        return size
    }

    
    return(
        <div className="w-full flex flex-col items-center justify-center gap-8">
            <div 
                className="relative overflow-hidden cursor-grab active:cursor-grabbing"
                style={{
                    width : `${}px`,
                    height: `${}px`
                }}
           >

            </div>
        </div>
    )
}
export default MoveSliderTouch;