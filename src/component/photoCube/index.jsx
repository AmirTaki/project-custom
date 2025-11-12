import {  useReducer } from 'react';
import { InitialStateCube } from './initalState';
import './styles.css'

const PhotoCube = () => {   
    const reducer = (state, action) => {
        switch(action.type){
            case "":
                return {...state}
        }
    }
    const [cube, dispatch] = useReducer(reducer, InitialStateCube)
    return(
        <div className="cubeBox">
            {/* container */}
            <div className="container">
                <div className="box">
                    {cube.images.map((item) => (
                        <div 
                            style={{backgroundColor : `#${item.color}`}}
                            key = {item.id} 
                            className={`${item.name} w-[350px]  h-[350px] absolute`}
                        >
                            {item.name}
                            {cube.lists.map((list) => (
                                <span></span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PhotoCube;