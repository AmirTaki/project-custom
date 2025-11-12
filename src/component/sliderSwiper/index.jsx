import { useReducer } from "react";
import { InitialStateCubeSiwper } from "./initialDataSlider";
import { reducer } from "../navbar/inialState";


const SliderSwiper = () => {
   const [cube, dispatch] =  useReducer(reducerSwiperCube,InitialStateCubeSiwper )
    return(
        // cubeBox
        <div className="w-full h-screen bg-blue-600 overflow-hidden relative">
            {/* container */}
            <div className="w-[600px] h-[600px] bg-red-500 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center perspective-[1000px]">
                {/* box */}
                <div className="absolute w-[350px] h-[350px] bg-green-600 transform-3d duration-1000 ease-in-out">
                    {/* cubs images */}
                    <div className="w-[350px] h-[350px] bg-amber-50"></div>
                </div>
            </div>
        </div>
    )
}
export default SliderSwiper;


// https://www.youtube.com/watch?v=ZczUFf-mOho
// https://www.youtube.com/watch?v=kzLFdOY7GQk
// https://www.youtube.com/@CSSnippets/playlists


//https://www.youtube.com/watch?v=CCPZ6SsJVT8&t=4s
// https://swiperjs.com/demos#scrollbar
