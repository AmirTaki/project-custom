import { createContext, useCallback, useEffect, useReducer, useRef, useState } from "react";
import img from "./img/cadillac.jpg"
import Wrapper from "./wrapper";
import Controls from "./controls";
import { initialEditor } from "./dataReducer";
import { stat } from "fs";

export const EditorContect =  createContext('')
const ImageEditor = () => {
 
    const fileInput = useRef(null)
    const nameFilter = useRef(null)
    const valueFilter = useRef(null)
    const previewImg = useRef(null)
    const inputRange = useRef(null)
   
    const reducerEditor = (state, action) => {
        switch(action.type){
            case "resetart":
                const newButtonsFilter = state.buttonsFilter.map((item) => ({...item, value : item.name == "Brighteness" || item.name == "Saturation" ? 100 : 0 }))
                return {...state, rotate : 0, flipHorizontal : 1, flipVertical : 1, value: 100, buttonsFilter : newButtonsFilter}
          
            case 'optionalButton':
                const newState = state.buttonsFilter.map((item) => ({...item, active :  item.id === action.payload.id ? true : false}))
                return {...state, buttonsFilter : newState}

            case "inputRange":
                const find =  state.buttonsFilter.find((item) => item.active )
                find.value = action.payload.value
                return{...state, value : action.payload.value}
            
            case "rotate": 
                action.payload.name == "fa-solid fa-rotate-left"? state.rotate -= 45 : state.rotate += 45
                return{...state }
           
            case "vertical" :
                return {...state, flipVertical : state.flipVertical == 1 ? -1 : 1}
            
            case "horizontal" :
                return {...state, flipHorizontal : state.flipHorizontal == 1 ? -1 : 1} 
        
            case 'loadImage' :
                if(fileInput.current){
                    fileInput.current?.click();
                }
                return {...state}
           
            case "imageInput" : 
                const file = action.payload.files?.[0]
                if(!file) return{...state}

                if(!file.type.startsWith('image/')){
                    alert('Please select an image file.')
                    return{...state}
                }
                if(previewImg.current){
                    URL.revokeObjectURL(previewImg.current)
                }
                const newURL = URL.createObjectURL(file)

                if(previewImg.current){
                    previewImg.current.src = newURL
                }

                return{...state, disable : false}

            case "downloadImage" :
                const previewImg = previewImg.current;
                if(!previewImg) return{...state}

                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')

                if(!ctx) return{...state}
                return {...state}

                canvas.width = previewImg.naturalWidth;
                canvas.height = previewImg.naturalHeight;
                ctx.filter = `brightness(${state.buttonsFilter[0].value}%) saturate(${state.buttonsFilter[1].value}%) invert(${state.buttonsFilter[2].value}%) grayscale(${state.buttonsFilter[3].value}%)`
                ctx.translate(canvas.width / 2, canvas.height / 2);
                
                if(state.rotate !== 0){ctx.rotate(state.rotate * Math.PI / 180)}

                ctx.scale(state.flipHorizontal, state.flipVertical)
                ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
     
                const link = document.createElement('a');
                link.download = 'image.jpg';
                link.href = canvas.toDataURL();
                link.click();

                return {...state}
            }
    }
    const [state, dispath] =  useReducer(reducerEditor, initialEditor)

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