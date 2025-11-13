import { useReducer, useRef } from "react";
import { InitialStateCubeSiwper, ReducerSwiperCube } from "./initialDataSlider";
import './styles.css'

const SliderSwiper = () => {
   const boxCubes = useRef(null)
   const [cubes, dispatch] =  useReducer(ReducerSwiperCube, InitialStateCubeSiwper )
    return(
        // cubeBox
        <div className="w-full h-screen  overflow-hidden relative flex justify-center itmes-center ">
            {/* container */}
            <div className="w-full h-[500px] bg-amber-300    perspective-[1300px]">
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

                <button className="bg-transparent z-50 text-red-700" onClick={() => {dispatch({type: "handlerCubes", })}}>click me</button>
                {/* button cubs */}
                <div className=" z-50 absolute -right-24 top-80 duration-500 hover:scale-120!"><i className="text-4xl bi bi-chevron-double-right text-gray-300 hover:text-blue-700 duration-500 cursor-pointer"></i></div>
                <div className=" z-50 absolute -left-10 top-80 duration-500 hover:scale-120!"><i className="text-4xl bi bi-chevron-double-left text-gray-300 hover:text-blue-700 duration-500 cursor-pointer"></i></div>

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
