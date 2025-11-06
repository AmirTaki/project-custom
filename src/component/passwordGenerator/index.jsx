import { useEffect, useReducer, useRef } from "react";
import RowGenerator from "./rowGenerator";
import { DataInitial } from "./initailState";

 const PasswordGenerator = () => {
    const iconRef =  useRef(null)
    const reducer = (state, action) => {
        switch(action.type){
            case "handlerGenerate" :
                state.allChars = ''
                let password = ""
                state.inputCheckBox.map((box) => {(state.allChars += box.checked ? box.chars : "" )})
               
                if(state.allChars === "" || state.value === 0) {
                    return {...state, password : password}
                }
                for (let i = 1; i < state.value ; i++){
                    password += state.allChars.charAt(Math.floor(Math.random() * state.allChars.length))
                }
                return {...state, password : password} 
        
            case "handlerRange": 
                return{...state, value : action.payload.event}
           
            case 'handlerCheckBox':
                const {checked} =  action.payload
                const {id} = action.payload
                
                const newInputCheckBox =  state.inputCheckBox.map((box) => ({...box, checked : box.id === id ? checked : box.checked  }))       
                return{...state , inputCheckBox : newInputCheckBox }
        
            case "handlerCopy":
                if(state.value > 0 || state.allChars.length > 0 ){
                    navigator.clipboard.writeText(state.password)
                    if(iconRef.current){
                        console.log(iconRef.current.className.replace('bi-copy', ''))
                        setTimeout(() => {

                        }, 3000)
                    }
                }
                return{...state}
           
        }
    }
    
    const [state, dispatch] = useReducer(reducer, DataInitial)
    useEffect(() => {
        console.log(state.password)
    })

    return(
        // container
        <div className="border-[.5px] border-white text-gray-400 rounded-[10px] py-[28px] px-[32px] flex flex-col bg-transparent shadow-[8px_8px_4px_#909090,8px_8px_0_#575757]">
            <h1 className="text-[1.4em] my-[8px] text-white font-[700]">
                Password Generator
            </h1>
            {/* inputBox */}
            <div className="relative">
                {/* passbox */}
                <input value = {state.password} type="text" className="bg-[#909090] border-0 outline-0 p-[10px] w-[300px] rounded-[4px] text-[20px] my-[8px] text-ellipsis text-red-700" disabled  />
                <span 
                    ref = {iconRef}
                    onClick={() => {dispatch({type : 'handlerCopy'})}}
                    className={`${state.icon ? "bi-copy" : "bi-check2"} bi bi-copy absolute top-[16px] right-[6px] text-black  text-[24px] cursor-pointer! z-20`} 
                >
                    
                </span>
       
            </div>
            {/* input range */}
            <input type="range" min = "0" max = '30' value={state.value} onChange={(e) => {dispatch({type: "handlerRange", payload : {event : e.target.value}})}}  />

            {/* row */}
            <div className="flex my-[8px]">
                <p className="basis-full text-[18px]">Password Length</p>
                <span>{state.value}</span>
            </div>
        
       
            {state.inputCheckBox.map((row) => {
                return(
                    <RowGenerator key = {row.key}  row = {row} dispatch = {dispatch}/>
                )
            })}
         
            <button 
                onClick = {() => {dispatch({type : 'handlerGenerate'})}}
                type = 'button'
                className="border-0 outline-0 bg-[#2c719e] py-[12px] px-[24px] text-white my-[8px] text-[18px] font-[700] cursor-pointer rounded-[4px]  hover:bg-[#0066ff]"
            >
                Generate Password
            </button>
    
        </div>
    )
}

export default PasswordGenerator;