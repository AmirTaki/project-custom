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
        // scene
        <div className="scene">
            <div className="cube">
                <div className="face front"> 
                    {cube.images.map((item) => (
                        <div className= {`face ${item.name}`}>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PhotoCube;