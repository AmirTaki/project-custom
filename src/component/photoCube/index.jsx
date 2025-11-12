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
                    <img src="" alt="front" />
                </div>
            </div>
        </div>
    )
}
export default PhotoCube;