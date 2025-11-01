import { createContext, useReducer, useRef } from "react";
import NextPrevButton from "./buttonPrevArrows";
import ListSlider from "./listSlider";
import Thumbnail from "./thumbnail";
import { DataImage } from "./dataItem";

export const imageSliderContext =  createContext()
const ImageSlider = () => {

    // const sliderItems = useRef(null)

    const reducerSlider = (state, action) => {
        switch (action.type){
            case  'prev' :
                const sliderItem = document.querySelector('.sliderList').querySelectorAll('.item')
                console.log(sliderItem)
                return  {...state}
            
            case 'next':
                console.log('next')
                return {...state}
        }
    }
    const [state, dispatch]  = useReducer(reducerSlider, DataImage)

    return(
    <div className="w-full h-[100vh] bg-red-200 overflow-hidden ">
        
        {/*slider  overflow-hidden*/}
        <div className="h-[100vh] w-[100vw] relative overflow-hidden -mt-[10px]">
            <imageSliderContext.Provider value ={{state, dispatch, }}>

                {/* list */}
                <ListSlider />

                {/* thumbnail */}
                <Thumbnail />

                {/* next prev Arrows */}
                <NextPrevButton />

            </imageSliderContext.Provider>
        </div>
    </div>
    )
}

export default ImageSlider;  