import { createContext, useReducer, useState } from "react";
import img from "./img/cadillac.jpg"
import Wrapper from "./wrapper";
import Controls from "./controls";
const EditorContect =  createContext('')
const ImageEditor = () => {
 
    const [disable, setDisable] = useState(false)
    const [active, setActive] = useState(false)
    const [text, setText] = useState(false)

    const initialEditor = {}
    
    const reducerEditor = (state, action) => {
        switch(action.type){
            case "":
                return {...state}
        }
    }
    const [state, dispath] =  useReducer(reducerEditor, initialEditor)

    return(
        <EditorContect.Provider value={{}}>
            {/* // container  // disable */}
            <div className="w-[750px] p-[30px_35px_35px] bg-white rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,.1)] max-md:p-[25px]! max-md:w-[90%]! ">
                <h2 className="-mt-[8px] text-[22px] font-[500] ">
                    Easy Image Editor
                </h2>
                {/* wrapper */}
                    <Wrapper disable = {disable} active = {active} img = {img} />

                {/* controls  */}
                    <Controls disable = {disable}/>

            </div>
        </EditorContect.Provider>
    )
}

export default ImageEditor;