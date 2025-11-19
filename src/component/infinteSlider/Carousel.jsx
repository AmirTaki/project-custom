import { useRef } from "react";

const Carousel = () => {
    const conatinerRef =  useRef(null)
   
    const handlerDragStart = () => {
        
    }
    const onMouseDown = (e) => handlerDragStart(e.clientX)

    return(
        <div className="w-full max-w-4xl mx-auto relative group select-none" dir="ltr">
            {/* viewport */}
            <div 
                ref = {conatinerRef}
                onMouseDown={onMouseDown}
                className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing touch-pan-y"
            ></div>
        </div>
    )
}
export default Carousel;