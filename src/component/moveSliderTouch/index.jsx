import { useEffect, useMemo, useState } from "react";

const MoveSliderTouch = () => {
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

    


    return(
        <div className="w-full flex flex-col items-center justify-center gap-8">
            <div 
                className="relative overflow-hidden cursor-grab active:cursor-grabbing"
                style={{
                    width : `${slideWidth}px`,
                    // height: `${}px`
                }}
           >

            </div>
        </div>
    )
}
export default MoveSliderTouch;