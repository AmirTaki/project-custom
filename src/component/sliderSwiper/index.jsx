import { useReducer, useRef } from "react";
import { InitialStateCubeSiwper, ReducerSwiperCube } from "./initialDataSlider";
import './styles.css'

const SliderSwiper = () => {
   const boxCubes = useRef(null)
   const [cubes, dispatch] =  useReducer(ReducerSwiperCube, InitialStateCubeSiwper )
    return(
        // cubeBox
        <div className="w-full h-screen  overflow-hidden relative">
            {/* container */}
            <div className="w-[600px] h-[600px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center perspective-[1000px]">
                {/* box */}
                <div 
                    style={{transform : `rotateY(${cubes.rotate}deg)`}}
                    className="absolute w-[350px] h-[350px]  transform-3d duration-1000 ease-in-out  transform"
                >
                    {/* cubs images */}
                    {cubes.images.map((cube) => (
                        <div 
                            style={{backgroundColor : `#${cube.color}`}}
                            key = {cube.id}
                            className={`${cube.name} w-[400px] h-[400px] absolute  overflow-hidden  `}
                        >
                            <img src={cube.img} className="w-full h-full bg-cover" alt="" />
                        </div>
                    ))}
                </div>

                <button className="bg-white z-50" onClick={() => {dispatch({type: "handlerCubes", })}}>click me</button>

                {/* button cubs */}
                <div className="flex gap-10">

                <div className="w-10 h-2 bg-red-500 absolute z-50 bottom-7 rounded-4xl cursor-pointer"></div>
                <div className="w-10 h-2 bg-red-500 absolute z-50 bottom-7 rounded-4xl cursor-pointer"></div>
                <div className="w-10 h-2 bg-red-500 absolute z-50 bottom-7 rounded-4xl cursor-pointer"></div>
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
