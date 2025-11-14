import { useReducer } from "react";
import { InitialStateCubeSiwper } from "../cubesSwiper.jsx/initialDataSlider";
import { ReducerCubeSlider } from "./initialState";

const CubeSlider = () => {
    const [state, dispatch]  = useReducer(ReducerCubeSlider, InitialStateCubeSiwper)
    return(
        // cube-container
        <div className="w-[300px] h-[300px] bg-amber-600 relative m-auto perspective-[1000px]"></div>
    )
}

export default CubeSlider;