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
        <div className="flex justify-center h-[100vh] itmes-center">
            <div className="scence ">
                <div className="cube">
                    {cube.images.map((item) => (
                        <div key = {item.id} className= {`face ${item.name}`}>
                            <img src={item.img} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PhotoCube;