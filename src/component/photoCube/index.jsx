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
        <div className="scene w-[300px] h-[300px] perspective-[1000px]">
            <div className="cube">
                {cube.images.map((item) => (
                    <div key = {item.id} className= {`face ${item.name}`}>
                        <img src={item.img} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PhotoCube;