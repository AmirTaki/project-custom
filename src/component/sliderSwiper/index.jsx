import { useReducer } from "react";
import { InitialStateCubeSiwper, ReducerSwiperCube } from "./initialDataSlider";

const SliderSwiper = () => {
   const [cubes, dispatch] =  useReducer(ReducerSwiperCube, InitialStateCubeSiwper )
    return(
        // cubeBox
        <div className="w-full h-screen  overflow-hidden relative">
            {/* container */}
            <div className="w-[600px] h-[600px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center perspective-[1000px]">
                {/* box */}
                <div className="absolute w-[350px] h-[350px]  transform-3d duration-1000 ease-in-out rotate-x-360 rotate-y-180 -rotate-z-45">
                    {/* cubs images */}
                    {cubes.images.map((cube) => (
                        <div 
                            style={{backgroundColor : `#${cube.color}`}}
                            key = {cube.id}
                            className={`${cube.name} w-[350px] h-[350px] `}>
                        </div>
                    ))}
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
