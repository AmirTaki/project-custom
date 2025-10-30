import { createContext, useCallback, useEffect, useReducer, useRef, useState } from "react";
import img from "./img/cadillac.jpg"
import Wrapper from "./wrapper";
import Controls from "./controls";
import { initialEditor } from "./dataReducer";
import { ReducerEditor } from "./reducerEditor";

export const EditorContect =  createContext('')
const ImageEditor = () => {
 
    const fileInput = useRef(null)
    const nameFilter = useRef(null)
    const valueFilter = useRef(null)
    const previewImg = useRef(null)
    const inputRange = useRef(null)
   

    const [state, dispath] =  useReducer(ReducerEditor, initialEditor)

    const render = useCallback(() => {
        const findItemActive = state.buttonsFilter.find((item) => item.active)
            if(nameFilter.current && valueFilter.current){
                nameFilter.current.innerText = findItemActive.name
                valueFilter.current.innerText = `${findItemActive.value}%`
            }
            state.value = findItemActive.value;
            state.max = findItemActive.max
            if(inputRange.current){
                inputRange.current.value = state.value
                inputRange.current.max = state.max
            }
            if(previewImg.current){
                previewImg.current.style.transform = `rotate(${state.rotate}deg) scale(${state.flipHorizontal}, ${state.flipVertical})`
                previewImg.current.style.filter =  `brightness(${state.buttonsFilter[0].value}%) saturate(${state.buttonsFilter[1].value}%) invert(${state.buttonsFilter[2].value}%) grayscale(${state.buttonsFilter[3].value}%)`
            }
    }, [state]) 

    useEffect(() => {
        render()
        return() => {
            render()
        }
    }, [state])

    return(
        <EditorContect.Provider value={{fileInput, previewImg, dispath, state, nameFilter, valueFilter, img, inputRange }}>
            {/* // container  // disable */}
            <div className="w-[750px] p-[30px_35px_35px] bg-white rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,.1)] max-md:p-[25px]! max-md:w-[90%]! ">
                <h2 className="-mt-[8px] text-[22px] font-[500] ">
                    Easy Image Editor
                </h2>
                {/* wrapper */}
                    <Wrapper />

                {/* controls  */}
                    <Controls />


            </div>
        </EditorContect.Provider>
    )
}

export default ImageEditor;