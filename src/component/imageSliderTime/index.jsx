import { useReducer } from "react";
import { DataImage } from "./dataImage";

const ImgSliderTime = () => {
    const reducer = (state, action) => {
        switch(action.type){
            case "":
                return {...state}
        }
    }
    const [state, dispatch] = useReducer (reducer, DataImage) ;
    return(
        // slider
        <div className=" w-[1300px] max-w-screen h-[700px] m-auto relative  max-md:h-[400px]!">
            {/* list */}
            <div className="absolute top-0 left-0 h-full flex duration-1000 max-w-max">
                {state.images.map((item) => (
                    // item
                    <div key = {item.id}  className="">
                        <img 
                            className="w-[1300px] max-w-[100vw] h-full object-cover"
                            src={item.img} alt="" />
                    </div>
                ))}
            </div>
            {/* buttons */}
            <div className="absolute top-[45%] left-[5%] w-[90%] flex justify-between">
                {state.buttons.map((item) => (
                    <button 
                        key = {item.id}  
                        onClick={() => {dispatch({type : item.name})}}
                        className=" w-[50px] h-[50px] rounded-full bg-[#fff5] text-white border-0 font-[monospace] font-bold"
                    >    
                        {item.symbol}
                    </button>
                ))}
            </div>
            {/* dots */}
            <ul className="absolute bottom-[10px] text-white left-0 w-full m-0 p-0 flex justify-center">
                {state.images.map((item) => (
                    <li 
                        key = {item.id}
                        className="list-none w-[10px] h-[10px] bg-white m-[20px] rounded-[20px] duration-1000"    
                    ></li>
                ))}
            </ul>
        </div>
    )
}
export default ImgSliderTime;

//https://www.youtube.com/watch?v=CCPZ6SsJVT8&t=4s