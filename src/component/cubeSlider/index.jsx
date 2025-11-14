import { useReducer } from "react";
import { InitialStateCubeSiwper } from "../cubesSwiper.jsx/initialDataSlider";
import { ReducerCubeSlider } from "./initialState";

const CubeSlider = () => {
    const [state, dispatch]  = useReducer(ReducerCubeSlider, InitialStateCubeSiwper)
    return(
        // cube-container
        <div className="w-[300px] h-[300px] bg-amber-600 relative m-auto perspective-[1000px]">
            {/* cube */}
            <div
                style={{transform : `rotateY(-${index * 90}deg)`}}
                className="w-full h-full relative transform-3d transition-all duration-1000"
            >

            </div>
        </div>
    )
}

export default CubeSlider;