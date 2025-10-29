import { createContext, useEffect, useReducer, useRef, useState } from "react";
import img from "./img/cadillac.jpg"
import Wrapper from "./wrapper";
import Controls from "./controls";
import { initialEditor } from "./dataReducer";

export const EditorContect =  createContext('')
const ImageEditor = () => {
 
    const [disable, setDisable] = useState(false)
    const [active, setActive] = useState(false)
    const [text, setText] = useState(false)

    const fileInput = useRef(null)
    const nameFilter = useRef(null)
    const valueFilter = useRef(null)
    const inputFilter = useRef(null)
    const previewImg = useRef(null)

   
    const reducerEditor = (state, action) => {
        switch(action.type){
            case "applyFilter":
                if(previewImg.current){
                    previewImg.current.style.transform = `rotate(${state.rotate}deg) scale(${state.flipHorizontal}, ${state.flipVertical})`
                    previewImg.current.style.filter =  `brightness(${state.brightness}%) saturate(${state.saturation}%) invert(${state.inversion}%) grayscale(${state.grayscale}%)`
                }
                return {...state}
          
                case 'optionalButton':
                const newState = state.buttonsFilter.map((item) => ({...item, active :  item.id === action.payload.id ? true : false}))
                if(nameFilter.current) {nameFilter.current.innerText = action.payload.name}
                if(valueFilter.current) {valueFilter.current.innerText = `${action.payload.value}%` }
                if(inputFilter.current) {inputFilter.current.style.max = action.payload.max}
                return {...state, buttonsFilter : newState}

            case "inputRange":
                const find =  state.buttonsFilter.find((item) => item.active )
                console.log(find)
                return{...state}
              
        }
    }
    const [state, dispath] =  useReducer(reducerEditor, initialEditor)

    useEffect(() => {
        state;
    }, [state])

    return(
        <EditorContect.Provider value={{fileInput, previewImg, dispath, state, nameFilter, valueFilter, inputFilter }}>
            {/* // container  // disable */}
            <div className="w-[750px] p-[30px_35px_35px] bg-white rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,.1)] max-md:p-[25px]! max-md:w-[90%]! ">
                <h2 className="-mt-[8px] text-[22px] font-[500] ">
                    Easy Image Editor
                </h2>
                {/* wrapper */}
                    <Wrapper disable = {disable} active = {active} img = {img} />

                {/* controls  */}
                    <Controls disable = {disable}/>


                <div className="" onClick={() => {dispath({type : "applyFilter"})}}>click</div>
            </div>
        </EditorContect.Provider>
    )
}

export default ImageEditor;