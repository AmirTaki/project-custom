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
            <div className="container"></div>
        </div>
    )
}
export default PhotoCube;