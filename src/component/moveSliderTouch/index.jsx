import { useCallback, useState } from "react";
import { InitailDataFlowSlider } from "./InitialData";

const MoveSliderTouch = () => {
    const [state, setState]  = useState(InitailDataFlowSlider)
    const [index, setIndex] = useState(0)


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
        <div className=" bg-white flex justify-center items-center">
            {/* left button */}
            <div 
                onClick={() => {goToPrevious()}}
                className="cursor-pointer"
            >◀️</div>

            {/* sliderWrapper  */}
            <div className="w-[800px] h-[400px]  relativ overflow-hidden ">

                {/* slider-container */}
                <div 
                    style={{transform : `translateX(-${index * 100}%)`}}
                    className="flex cursor-grab transition-transform duration-500 ease-in-out"
                >

                    {/* slide */}
                    {state.images.map((item) => (
                        <div
                            style={{backgroundImage: `url(${item.img})`}}
                            key = {item.id}
                            className="flex-[0_0_100%] h-[400px] bg-cover bg-center"
                        ></div>
                    ))}
                </div>

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