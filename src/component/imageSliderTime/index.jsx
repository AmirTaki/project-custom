import { useEffect, useReducer, useRef } from "react";
import { DataImage } from "./intitalState";
import { ReducerSlider } from "./sliderReducer";
import "./styles.css"
const ImgSliderTime = () => {
    const sliderRef = useRef(null)

    const [state, dispatch] = useReducer (ReducerSlider, DataImage) ;
    useEffect(() => {
        dispatch({type:"changeImage", payload : {sliderRef : sliderRef.current}})
    }, [state.index])

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch({type : "right"})
        }, 3000)   
        return() => {
            clearInterval(timer)
        }
    })
    return(
        // slider
        <div  className=" w-[1300px] max-w-[97vw]  h-[600px] m-auto relative bg-yellow-500 overflow-hidden top-10 max-md:h-[400px]! ">
           {/* list */}
           <div
                ref = {sliderRef} 
                className="absolute top-0 left-0 w-full h-full bg-amber-600 flex flex-col flex-wrap overflow-x-hidden scrllBar"
            >
               {state.images.map((item) => (
                    // item
                    <div key = {item.id}  className="w-full h-full bg-blue-500">
                        <img 
                            className=" w-full h-full object-cover max-md:object-center!"
                            src={item.img} alt="" />
                    </div>
                ))}
        
           </div>

            {/* buttons */}
            <div className="absolute top-[45%] left-[5%] w-[90%] flex justify-between ">
                {state.buttons.map((item) => (
                    <button 
                        key = {item.id}  
                        onClick={() => {dispatch({type : item.name})}}
                        className=" w-[50px] h-[50px] rounded-full bg-[#fff5] text-white border-0 font-[monospace] font-bold cursor-pointer! "
                    >    
                        {item.symbol}
                    </button>
                ))}
            </div>
            {/* dots */}
            <ul className="absolute bottom-[10px] text-white left-0 w-full m-0 p-0 flex justify-center">
                {state.images.map((item) => (
                    <li 
                        onClick={() => {dispatch({type : 'dots', payload : {place : item.id}})}}
                        key = {item.id}
                        className={`${item.id == state.index? "w-[30px] bg-[rgba(255,255,255,.6)]" : "w-[10px] bg-white"} list-none  h-[10px]  m-[20px] rounded-[20px] duration-1000 hover:scale-110! cursor-pointer!`}    
                    ></li>
                ))}
            </ul>
        </div>
    )
}
export default ImgSliderTime;

//https://www.youtube.com/watch?v=CCPZ6SsJVT8&t=4s