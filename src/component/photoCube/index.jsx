import {  useEffect, useReducer, useRef } from 'react';
import { InitialStateCube, reducerCubeBox } from './initalState';
import './styles.css'

const PhotoCube = () => {   
    const box =  useRef(null)
    const cubeBox = useRef(null)
    const [cube, dispatch] = useReducer(reducerCubeBox, InitialStateCube)

    useEffect(() => {
        if(cubeBox.current){
            cubeBox.current.addEventListener('mousemove', (e) => {
                dispatch({type : "rotateCube", payload : {x : e.clientX, y : e.clientY, box : box.current}})
            })
    
            cubeBox.current.addEventListener("mousedown", (e) => { 
                dispatch({type : "rotateCube", payload : {x : 255, y : -150, box : box.current}})
    
            })
    
            return() => {
                cubeBox.current.removeEventListener('mousemove', (e) => {
                    dispatch({type : "rotateCube", payload : {x : e.clientX, y : e.clientY, box : box.current}})

                })
                cubeBox.current.removeEventListener("mousedown", (e) => {
                   dispatch({type : "rotateCube", payload : {x : 255, y : -150, box : box.current}})
                })
            }
        }
    }, [])
    return(
        <div ref = {cubeBox} className="cubeBox">
            {/* container */}
            <div className="containerCubeBox">
                <div ref = {box} className="box">
                    {cube.images.map((item) => (
                        <div 
                            style={{backgroundColor : `#${item.color}`}}
                            key = {item.id} 
                            className={`${item.name} w-[350px]  h-[350px] absolute flex justify-center items-center`}
                        >
                            <img src={item.img} className='w-full h-full bg-cover z-10' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PhotoCube;

///  https://www.youtube.com/watch?v=JT8IqoCbcyo