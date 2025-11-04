import {useReducer, useRef } from 'react';
import { DataGallery } from './dataImg';

import './styles.css'
const GalleryImage = () => {
    const wrapperImage =  useRef(null)
    const reducer = (state, action) => {
        switch(action.type){
            case "handlerClick":
                document.documentElement.style.overflow = "hidden";
                if(wrapperImage.current ){      
                    wrapperImage.current.src = action.payload.src
                }
            return{...state, displayWarpper : true}

            case "handlerCross":
                document.documentElement.style.overflow = "auto";
            return{...state, displayWarpper : false}
        }
    }
    const [state, disptach] = useReducer(reducer, DataGallery)

    return(
        <>
        {/* imageWrpper */}
        <div className={`${state.displayWarpper ? 'flex' : 'hidden'} w-full h-screen bg-[rgba(0,0,0,.9)] fixed top-0 left-0  justify-center items-center z-[200]`}  >
            <img src = {state.image[0]} alt="" className='w-[90%] max-w-[500px]' ref = {wrapperImage}/>
            <span 
                onClick={() => {disptach({type : 'handlerCross'})}}
                className='absolute top-[5%] right-[5%] text-[30px] font-[sans-serif]  text-white cursor-pointer!'
            >
                X
            </span>
        </div>
        {/* img-gallery */}
        <div 
            className="w-[80%] h-[700px] max-md:h-[900px]  overflow-y-scroll m-[100px_auto_50px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[30px] scrollbarGarllery "
        >
            {state.image.map((item) => {
                //  img 
                return(
                    <img 
                       onClick={() => {disptach({type : 'handlerClick', payload : {src : item.image}})}} 
                        key = {item.id} src={item.image} alt="" 
                        className='w-[99%] h-full cursor-pointer! transition duration-1000 ease-in-out hover:scale-75 hover:shadow-[0_32px_75px_rgba(68,77,136,.2)] ' 
                    />
                )
            })}
        </div>
        </>
        

    )
}

export default GalleryImage;