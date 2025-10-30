import { createContext, useEffect, useReducer, useRef, useState } from "react";
import img from "./img/cadillac.jpg"
import Wrapper from "./wrapper";
import Controls from "./controls";
import { initialEditor } from "./dataReducer";

export const EditorContect =  createContext('')
const ImageEditor = () => {
 
    const [disable, setDisable] = useState(false)

    const fileInput = useRef(null)
    const nameFilter = useRef(null)
    const valueFilter = useRef(null)
    const previewImg = useRef(null)

   
    const reducerEditor = (state, action) => {
        switch(action.type){
            case "resetart":
                const newButtonsFilter = state.buttonsFilter.map((item) => ({...item, value : item.name == "Brighteness" || item.name == "Saturation" ? 100 : 0 }))
                return {...state, rotate : 0, flipHorizontal : 1, flipVertical : 1, value: 100, buttonsFilter : newButtonsFilter}
          
            case 'optionalButton':
                const newState = state.buttonsFilter.map((item) => ({...item, active :  item.id === action.payload.id ? true : false}))
                if(nameFilter.current) {nameFilter.current.innerText = action.payload.name}
                if(valueFilter.current) {valueFilter.current.innerText = `${action.payload.value}%` }
                return {...state, buttonsFilter : newState, value : action.payload.value, max : action.payload.max}

            case "inputRange":
                const find =  state.buttonsFilter.find((item) => item.active )
                find.value = action.payload.value
                if(valueFilter.current) {valueFilter.current.innerText = `${action.payload.value}%` }
                return{...state, value : action.payload.value}
            
            case "rotate": 
                action.payload.name == "fa-solid fa-rotate-left"? state.rotate -= 45 : state.rotate += 45
                return{...state }
           
            case "vertical" :
                return {...state, flipVertical : state.flipVertical == 1 ? -1 : 1}
            
            case "horizontal" :
                return {...state, flipHorizontal : state.flipHorizontal == 1 ? -1 : 1} 
        }
    }
    const [state, dispath] =  useReducer(reducerEditor, initialEditor)

    useEffect(() => {
        const findItemActive = state.buttonsFilter.find((item) => item.active)
        
        if(previewImg.current){
            previewImg.current.style.transform = `rotate(${state.rotate}deg) scale(${state.flipHorizontal}, ${state.flipVertical})`
            previewImg.current.style.filter =  `brightness(${state.buttonsFilter[0].value}%) saturate(${state.buttonsFilter[1].value}%) invert(${state.buttonsFilter[2].value}%) grayscale(${state.buttonsFilter[3].value}%)`
        }
        console.log(state.buttonsFilter)
    }, [state])

    return(
        <EditorContect.Provider value={{fileInput, previewImg, dispath, state, nameFilter, valueFilter, img }}>
            {/* // container  // disable */}
            <div className="w-[750px] p-[30px_35px_35px] bg-white rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,.1)] max-md:p-[25px]! max-md:w-[90%]! ">
                <h2 className="-mt-[8px] text-[22px] font-[500] ">
                    Easy Image Editor
                </h2>
                {/* wrapper */}
                    <Wrapper disable = {disable}/>

                {/* controls  */}
                    <Controls disable = {disable}/>


            </div>
        </EditorContect.Provider>
    )
}

export default ImageEditor;