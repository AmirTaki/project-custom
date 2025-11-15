import { useEffect, useReducer, useRef,  } from "react";
import { InitialStateTime } from "./intitalState";
import {ReducerSliderTime  } from "./sliderReducer";
import './styles.css'

const SliderLoop = () => {

    const wraperr = useRef(null)
    const [slider, dispatch] = useReducer(ReducerSliderTime, InitialStateTime)
    
    useEffect(() => {
        
        if (wraperr.current){
            wraperr.current.style.scrollBehavior = "smooth"
            wraperr.current.scrollLeft = slider.index * wraperr.current.offsetWidth;
        }
    }, [slider.index])

    useEffect(() => {
        dispatch({type : 'handlerRollImage'})
    }, [slider.endX])

    useEffect(() => {
        const timer =  setInterval(() => {
            dispatch({type : "rightButtonSlider"})
        }, 4000)   

        return () => {clearInterval(timer)}
    })

    return (
        <div className="relative rounded-xl overflow-hidden">

            {/* wrapper */}
            <div 
                ref = {wraperr}
                draggable = {false}
                onTouchStart={(e) => {dispatch({type : 'handlerStart', payload : {event : e.changedTouches[0].clientX}})}}
                onTouchEnd={(e) => {dispatch({type: "handlerEnd", payload : {event : e.changedTouches[0].clientX}})}}
                onMouseDown={(e) => {dispatch({type : 'handlerStart', payload : {event : e.clientX}})}}
                onMouseUp={(e) => {dispatch({type : 'handlerEnd', payload : {event : e.clientX}})}}                
                className="w-[80vw] h-[80vh] bg-amber-800 flex flex-col flex-wrap  overflow-hidden select-none scrollbarWrapper cursor-pointer "
                >
                
                {/* slider */}
                {slider.items.map((item) => (
                    <div 
                        key = {item.id}
                        style={{ backgroundImage: `url(${item.img})`}}
                        className= {`w-full h-full bg-no-repeat    bg-cover bg-center`}
                    ></div>
                ))}
    
            </div>
    
            {/* buttons */}
            <div className="absolute top-[45%] left-[5%] w-[90%] flex justify-between z-50! ">
                {slider.buttons.map((item) => (
                    <button 
                        key = {item.id}  
                        onClick={() => {dispatch({type : item.name})}}
                        className= {`w-[50px] h-[50px] rounded-full bg-[#fff5] text-white border-0 font-[monospace] font-bold cursor-pointer! `}
                    > 
                        {item.symbol}
                    </button>
                ))}
            </div>


            {/* dots */}
            <ul className="absolute bottom-[20px] text-white left-0 w-full m-0 p-0 flex justify-center">
                {slider.items.map((item) => (
                    <li 
                        onClick={() => {dispatch({type : 'dotsSldier', payload : {place : item.id}})}}
                        key = {item.id}
                        className={`${item.id == slider.index? "w-[30px] bg-[rgba(255,255,255,.6)]" : "w-[10px] bg-white"} list-none  h-[10px]  m-[20px] rounded-[20px] duration-1000 hover:scale-110! cursor-pointer!`}    
                    ></li>
                ))}
            </ul>
        </div>
    )
}
export default SliderLoop;