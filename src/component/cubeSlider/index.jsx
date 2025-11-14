import { useReducer } from "react";
import { ReducerCubeSlider,InitialStateCubes } from "./initialState";
import './styles.css'

const CubeSlider = () => {
    const [state, dispatch]  = useReducer(ReducerCubeSlider, InitialStateCubes)
    return(
        // cube-container
        <div className="w-[300px] h-[300px] bg-amber-600 relative m-auto perspective-[1000px]">
            {/* cube */}
            <div
                style={{transform : `rotateY(-${state.index * 90}deg)`}}
                className="w-full h-full relative transform-3d transition-all duration-1000"
            >
                {state.images.map((item) => (
                    // face
                    <div 
                        key = {item.id}
                        className="absolute w-full  h-full backface-hidden face-cube"
                    >
                        <img src={item.img} alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CubeSlider;