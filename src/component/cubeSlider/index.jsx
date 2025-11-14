import { useReducer } from "react";
import { InitialStateCubeSiwper } from "../cubesSwiper.jsx/initialDataSlider";
import { ReducerCubeSlider } from "./initialState";

const CubeSlider = () => {
    const [state, dispatch]  = useReducer(ReducerCubeSlider, InitialStateCubeSiwper)
    return(
        <div className=""></div>
    )
}

export default CubeSlider;