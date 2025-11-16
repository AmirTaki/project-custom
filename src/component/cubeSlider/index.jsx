import { useEffect, useReducer,} from 'react';
import { InitialStateCubes, ReducerCubes } from './initialState';
import './slidersCubs.css'

const ImageSliderCubs = () => {
    const [state, dispatch] = useReducer(ReducerCubes, InitialStateCubes)

    useEffect(() => {
        dispatch({type : "handlerChangeBg"}) 
    }, [state.end])

    return(
        <div className="relative">
            {/* cube-slider */}
            <div 
                onMouseDown = {(e) => {dispatch({type : 'handlerStart', payload : {event : e.clientX }})}}
                onTouchStart = {(e) => {dispatch({type : 'handlerStart', payload : {event : e.changedTouches[0].clientX}})}}
                
                onMouseUp = {(e) => {dispatch({type : 'handlerEnd', payload : {event : e.clientX}})}}
                onTouchEnd = {(e) => {dispatch({type : 'handlerEnd', payload : {event : e.changedTouches[0].clientX}})}}
          
                className="containerCube "
            >
                {/* slide-wrapper */}
                <div 
                    className="sliderWrapper"
                    style={{ transform: `rotateY(-${state.index * 90}deg)` }}
                >

                {state.images.map((item) => (
                    <div className="slideImage cursor-pointer " key = {item.id}  style={{ backgroundImage: `url(${item.img})` }}>
                    </div>
                ))}
                </div>

                <div className=" z-100! nav -left-[70px]  scale-70 hover:scale-120 duration-600 cursor-pointer"
                    onClick={() => {dispatch({type : "handlerLeft"})}}
                >
                    <i className="bi bi-chevron-double-left"></i>
                </div>
                <div 
                    className=" z-100! nav -right-[70px] scale-70 hover:scale-120 duration-600 cursor-pointer"
                    onClick={() => {dispatch({type : "handlerRight"})}}
                >
                  <i className="bi bi-chevron-double-right"></i>
                </div>


            </div>
        </div>
    )
}

export default ImageSliderCubs;