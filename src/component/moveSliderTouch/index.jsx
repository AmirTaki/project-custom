import { useCallback, useEffect, useRef, useState } from "react";
import { InitailDataFlowSlider } from "./InitialData";

const MoveSliderTouch = () => {

    const containerSldier = useRef(null)

    const [state, setState]  = useState(InitailDataFlowSlider)
    const [index, setIndex] = useState(0)
    const [isDragging, setDragging] = useState(false);
    const [start, setStart] = useState(0)
    const [move, setMove] = useState(0)


    useEffect(() => {
        if(containerSldier.current){
            containerSldier.current.style.scrollBehavior = "smooth"
            containerSldier.current.scrollLeft = index * containerSldier.current.offsetWidth;
        }
    } , [index])


    const HandlerDragStart = (event) => {
        setDragging(true)

        if(event.type === "mousedown"){event.preventDefault()}

        const startPosition = 'touches' in event ? event.touches[0].clientX : event.clientX;
        setStart(startPosition)
        setMove(0)

    }

    const HandlerDragMove = (event) => {
        if(!isDragging) return;
        else{
            const movePosition = 'touches' in event ? event.touches[0].clientX : event.clientX;
            setMove(movePosition)
            const widthSlider = containerSldier.current.offsetWidth 
            const distace = Math.abs(start - move)
            
            if(start < move) {
                distace > widthSlider  ? goToPrevious(Math.ceil(distace / widthSlider)) : goToPrevious()
            }
            else {
                distace > widthSlider  ? goToNext(Math.ceil(distace / widthSlider)) : goToNext()
            }
        }
    }

    const HandlerDragEnd = (event) => {
        setDragging(false)
    }


    const goToNext = useCallback((n = 1) => {
        const newIndex = index + n > state.images.length - 1 ? 0 : index + n
        setIndex(newIndex)
    }, [state.images, index])

    const goToPrevious = useCallback((n = 1) => {
        const newIndex = index - n < 0 ? state.images.length - 1 : index - n
        setIndex(newIndex)
    }, [state.images, index])


    return(
        // flex
        <div className=" bg-white flex justify-center items-center mt-6">
            {/* left button */}
            <div 
                onClick={() => {goToPrevious()}}
                className="cursor-pointer"
            >◀️</div>
            {/* container slider */}
            <div 
                onMouseDown={(e) => {HandlerDragStart(e)} }
                onMouseMove={(e) => {HandlerDragMove(e)} }
                onMouseUp={(e) => {HandlerDragEnd(e)} }
                onMouseLeave={(e) => {HandlerDragEnd(e)}}
                ref = {containerSldier}
                className="w-[800px] h-[500px]  flex flex-col flex-wrap overflow-x-hidden"
            >
                {state.images.map((item) => (
                    <div key = {item.id}  style={{ backgroundImage: `url(${item.img})` }} className="w-full h-full bg-cover bg-center"></div>
                ))}
            </div>
        

            {/* right button */}
            <div 
                onClick={() => {goToNext()}}
                className="cursor-pointer"
            >▶️</div>
        </div>
    )
}
export default MoveSliderTouch;