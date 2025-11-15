import { useReducer, useRef } from "react";
import { ReducerCubesSlider,InitialStateCubes } from "./initialState";
import './styles.css'

const CubeSlider = () => {
    const cubeSliderRef = useRef(null)
    const [state, dispatch]  = useReducer(ReducerCubesSlider, InitialStateCubes)
    return(
        // cube-container
        <div 
            ref = {cubeSliderRef}
            className="w-[300px] h-[300px] bg-amber-600 relative m-auto perspective-[1000px] top-10 select-all"
            onTouchStart={(e) => dispatch({type : 'handlerTouchStart', payload : {e : e}})}
            onTouchEnd = {(e) => dispatch({type : 'handlerTouchEnd', payload : {e : e}})}
            onDragStart={(e) => {dispatch({type : 'handlerStart', payload : {client : e.clientX, cubeRef : cubeSliderRef.current}})}}
            onDragEnd={(e) => {dispatch({type : 'handlerEnd', payload : {client : e.clientX, cubeRef : cubeSliderRef.current}})}}
        >
            {/* cube */}
            <div
                style={{transform : `rotateY(-${state.index * 90}deg)`}}
                className="w-full h-full relative transform-3d transition-all duration-1000"
            >
                {state.images.map((item) => (
                    // face
                    <div 
                        style={{backgroundImage : `url(${item.img})`}}
                        key = {item.id}
                        className="absolute w-[300px]  h-[300px] backface-hidden face-cube"
                    >
                        {/* <img src={item.img} alt=""
                            className="w-full h-full object-cover"
                        /> */}
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