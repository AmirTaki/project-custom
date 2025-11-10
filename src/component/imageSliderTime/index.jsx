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
                    <button key = {item.id}  onClick={() => {dispatch({type : item.name})}}>
                        <i className={`${item.icon}`}></i>
                    </button>
                ))}
            </div>
        </div>
    )
}
export default ImgSliderTime;

//https://www.youtube.com/watch?v=CCPZ6SsJVT8&t=4s