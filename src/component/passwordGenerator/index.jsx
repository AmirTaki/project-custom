import { useEffect, useReducer, useRef } from "react";
import RowGenerator from "./rowGenerator";
import { DataInitial } from "./initailState";
import { ReducerGenerator } from "./reducerGenerator";

const PasswordGenerator = () => {
    const [state, dispatch] = useReducer(ReducerGenerator, DataInitial)

    useEffect(() => {
        const timer = setTimeout(() => {           
            dispatch({type : "handlerTime"})
        }, 3000)
        return() => {clearInterval(timer)}
    }, [state.icon])

    return(
        // container
        <div className="border-[.5px] border-white text-gray-400 rounded-[10px] py-[28px] px-[32px] flex flex-col bg-transparent shadow-[8px_8px_4px_#909090,8px_8px_0_#575757]">
            <h1 className="text-[1.4em] my-[8px] text-white font-[700]">
                Password Generator
            </h1>
            <form>

        
                {/* inputBox */}
                <div className="relative">
                    {/* passbox */}
                    <input value = {state.password} type="text" className="bg-[#909090] border-0 outline-0 p-[10px] w-[300px] rounded-[4px] text-[20px] my-[8px] text-ellipsis text-red-700" disabled  />
                    <span 
                        onClick={() => {dispatch({type : 'handlerCopy'})}}
                        className={`${state.icon ? "bi-copy" : "bi-check2"} absolute top-[16px] right-[6px] text-black  text-[24px] cursor-pointer! z-20`} 
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
            </form>
        </div>
    )
}

export default PasswordGenerator;