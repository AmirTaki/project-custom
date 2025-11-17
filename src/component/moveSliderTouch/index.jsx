import { useState } from "react";
import { InitailDataFlowSlider } from "./InitialData";

const MoveSliderTouch = () => {
    const [state, setState]  = useState(InitailDataFlowSlider)
    console.log(state.images)
    return(
        // flex
        <div className=" bg-white flex justify-center items-center">
            {/* left button */}
            <div className="">◀️</div>

            {/* sliderWrapper  */}
            <div className="w-[800px] h-[400px]  relative ">

                {/* slider-container */}
                <div className="flex ">

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
            <div className="">▶️</div>
        </div>
    )
}
export default MoveSliderTouch;