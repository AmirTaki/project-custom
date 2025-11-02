import { createContext, useReducer, useRef } from "react";
import NextPrevButton from "./buttonPrevArrows";
import ListSlider from "./listSlider";
import Thumbnail from "./thumbnail";
import { DataImage } from "./dataItem";

export const imageSliderContext =  createContext()
const ImageSlider = () => {


    // const reducerSlider = (state, action) => {
    //     const length = state.image.length - 1;
        
    //     switch (action.type){
    //         case  'prev' :
    //             var  value =  state.value === 0 ? length : state.value - 1;

    //             var newStateImg =  state.image.map((item) => ({...item, flag : item.id === value ? true : false , prev : true, next : false }))
                
    //             state.image.push(state.image.shift())
                
    //             return {...state, image : newStateImg, value : value,   }
                
    //         case 'next':
    //             var  value =  state.value === length ? 0 : state.value + 1;

    //             var newStateImg =  state.image.map((item) => ({...item, flag : item.id === value ? true : false , next : true, prev : false}))
               
    //             state.image.unshift(state.image.pop())            

    //             return {...state, image : newStateImg, value : value}
    //     }
    // }
    // const [state, dispatch]  = useReducer(reducerSlider, DataImage)

    return(
    <div className="w-full h-[100vh] bg-red-200 overflow-hidden ">
        
        {/*slider  overflow-hidden*/}
        <div className="h-[100vh] w-[100vw] relative overflow-hidden -mt-[10px]">
            <imageSliderContext.Provider value ={{DataImage}}>

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