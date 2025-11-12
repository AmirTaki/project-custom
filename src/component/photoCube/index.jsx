import {  useEffect, useReducer, useRef, useState } from 'react';
import { InitialStateCube } from './initalState';
import './styles.css'

const PhotoCube = () => {   
    const box =  useRef(null)
    const cubeBox = useRef(null)
    const reducer = (state, action) => {
        switch(action.type){
            case "rotateCube":
                const {box, x, y} = action.payload 
                let Xvalue = Math.floor((x / 2) + 100)
                let Yvalue = Math.floor((y / 2) + 100)
                if(box) {
                    box.style.transform = `rotateX(${Yvalue}deg) rotateY(${Xvalue}deg)`
                }
                return {...state, }
                
        }
    }
    const [cube, dispatch] = useReducer(reducer, InitialStateCube)


    useEffect(() => {
        if(cubeBox.current){
            cubeBox.current.addEventListener('mousemove', (e) => {
                dispatch({type : "rotateCube", payload : {x : e.clientX, y : e.clientY, box : box.current}})
            })
    
            cubeBox.current.addEventListener("mousedown", (e) => { 
                dispatch({type : "rotateCube", payload : {x : 255, y : -150, box : box.current}})
    
            })
    
            return() => {
                cubeBox.removeEventListener('mousemove', (e) => {
                    dispatch({type : "rotateCube", payload : {x : e.clientX, y : e.clientY, box : box.current}})

                })
                cubeBox.removeEventListener("mousedown", (e) => {
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