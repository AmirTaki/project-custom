import { useReducer } from "react";
import { ReducerCubesSlider,InitialStateCubes } from "./initialState";
import './styles.css'

const CubeSlider = () => {
    const [state, dispatch]  = useReducer(ReducerCubesSlider, InitialStateCubes)
    return(
        // cube-container
        <div 
            className="w-[300px] h-[300px] bg-amber-600 relative m-auto perspective-[1000px] top-10"
            onTouchStart={(e) => dispatch({type : 'handlerTouchStart', payload : {e : e}})}
            onTouchEnd = {() => dispatch({type : 'handlerTouchEnd'})}
        >
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

            {/* button */}
            <button
                onClick={() => {dispatch({type : "prevSlide"})}}
                className="absolute top-[50%] -translate-y-1/2 bg-white border-0 text-[1.5rem] cursor-pointer -left-[40px] "
            >
                ◀
            </button>
            <button
                onClick={() => {dispatch({type : "nextSlide"})}}
                className="absolute top-[50%] -translate-y-1/2 bg-white border-0 text-[1.5rem] cursor-pointer -right-[40px] "
            >
                ▶
            </button>
        </div>
    )
}

export default CubeSlider;