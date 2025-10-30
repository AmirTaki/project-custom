import { createContext, useCallback, useEffect, useReducer, useRef, useState } from "react";
import img from "./img/cadillac.jpg"
import Wrapper from "./wrapper";
import Controls from "./controls";
import { initialEditor } from "./dataReducer";
import { ReducerEditor, render } from "./reducerEditor";

export const EditorContect =  createContext('')
const ImageEditor = () => {

    const fileInput = useRef(null)
    const nameFilter = useRef(null)
    const valueFilter = useRef(null)
    const previewImg = useRef(null)
    const inputRange = useRef(null)

    const [state, dispath] =  useReducer(ReducerEditor, initialEditor)

    useEffect(() => {
        render(nameFilter, valueFilter, previewImg, inputRange, state)
        return() => {
            render(nameFilter, valueFilter, previewImg, inputRange, state)
        }
    }, [state])

    return(
        <EditorContect.Provider value={{fileInput, previewImg, dispath, state, nameFilter, valueFilter, img, inputRange }}>
            {/* container  */}
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