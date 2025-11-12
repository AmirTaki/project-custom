import {  useEffect, useReducer, useRef, useState } from 'react';
import { InitialStateCube } from './initalState';
import './styles.css'

const PhotoCube = () => {   
    const box =  useRef(null)
    const cubeBox = useRef(null)
    const reducer = (state, action) => {
        switch(action.type){
            case "rotateCube":
                return {...state, }
        }
    }
    const [cube, dispatch] = useReducer(reducer, InitialStateCube)


    useEffect(() => {
        if(cubeBox.current){
            dispatch({type : "rotateCube", payload : {x : x, y : y, box : box.current}})

            const rotateCube = (x, y) => {
                let Xvalue = Math.floor((x / 2) + 100)
                let Yvalue = Math.floor((y / 2) + 100)
                if(box.current) {
                    box.current.style.transform = `rotateX(${Yvalue}deg) rotateY(${Xvalue}deg)`
                }
    
            }
            cubeBox.current.addEventListener('mousemove', (e) => {
                rotateCube(e.clientX, e.clientY)
            })
    
           cubeBox.current.addEventListener("mousedown", (e) => {
                rotateCube(255, -150)
    
            })
    
            return() => {
                cubeBox.removeEventListener('mousemove', (e) => {
                    rotateCube(e.clientX, e.clientY)
    
                cubeBox.removeEventListener("mousedown", (e) => {
                    rotateCube(255, -150)
                })
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