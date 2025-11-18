import { useEffect, useMemo } from "react";

const MoveSliderTouch = () => {

    
 
    const sliderWidth = useMemo(() => {

    })

    useEffect(() => {

        window.addEventListener('resize', handlerResize)
        return () => window.removeEventListener('resize', handlerResize)
    })
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