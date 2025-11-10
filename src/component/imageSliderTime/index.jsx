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
        <div className=" w-[1300px] max-w-[97vw]  h-[600px] m-auto relative bg-yellow-500 overflow-hidden top-10 ">
           {/* list */}
           <div className="absolute top-0 left-0 w-full h-full bg-amber-600 flex flex-col flex-wrap overflow-x-scroll">
               {state.images.map((item) => (
                    // item
                    <div key = {item.id}  className="w-full h-full bg-blue-500">
                        <img 
                            className=" w-full h-full"
                            src={item.img} alt="" />
                    </div>
                ))}
        
           </div>
           
            {/* list */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-red-500 flex flex-col flex-wrap  duration-1000 max-w-max">
                {state.images.map((item) => (
                    // item
                    <div key = {item.id}  className="w-full h-full bg-blue-500">
                        <img 
                            className=" w-full h-full"
                            src={item.img} alt="" />
                    </div>
                ))}
            </div> */}
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
                        className={`${item.id == state.index? "w-[30px]" : "w-[10px]"} list-none  h-[10px] bg-white m-[20px] rounded-[20px] duration-1000`}    
                    ></li>
                ))}
            </ul>
        </div>
    )
}
export default ImgSliderTime;

//https://www.youtube.com/watch?v=CCPZ6SsJVT8&t=4s