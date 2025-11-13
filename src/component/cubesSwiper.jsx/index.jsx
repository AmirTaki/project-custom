import {useReducer, useRef } from "react";
import { InitialStateCubeSiwper, ReducerSwiperCube } from "./initialDataSlider";
import CubeBox from "./cubeBox";
import './styles.css'

const SliderSwiper = () => {
   const boxCubes = useRef(null)
   const [cubes, dispatch] =  useReducer(ReducerSwiperCube, InitialStateCubeSiwper)

    return(
        <div ref = {boxCubes} 
            className="w-full flex justify-center items-center relative"
            draggable = {false}
            onDragStart={(e) => {dispatch({type : "cubeDragStart", payload : {e : e, boxCubes : boxCubes.current}})}}
            onDragEnd={(e) => {dispatch({type : "cubeDragEnd", payload : {e : e, boxCubes : boxCubes.current}})}}
        >
            <i 
                onClick={() => {dispatch({type : 'leftCubesClick'})}}
                className={`bi bi-chevron-double-left  hover:scale-150  text-4xl  text-gray-300 hover:text-blue-700 duration-500 cursor-pointer`}
            ></i>

            {/* cubeBox */}
            <CubeBox cubes={cubes}/>


            <i 
                onClick={() => {dispatch({type : 'rightCubesClick'})}}
                className={`bi bi-chevron-double-right  hover:scale-150  text-4xl  text-gray-300 hover:text-blue-700 duration-500 cursor-pointer`}
            ></i>
                    
        </div>
    )
}
export default SliderSwiper;


// https://www.youtube.com/watch?v=ZczUFf-mOho
// https://www.youtube.com/watch?v=kzLFdOY7GQk
// https://www.youtube.com/@CSSnippets/playlists


//https://www.youtube.com/watch?v=CCPZ6SsJVT8&t=4s
// https://swiperjs.com/demos#scrollbar
