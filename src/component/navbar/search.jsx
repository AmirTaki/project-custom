import {useState } from "react";
import './styles.css'

const SearchInput = ({state, dispatch}) => {
    return (
        <div 
            className ={`
                ${state.input  ? "animationMove" : "animationMoveReverse"}
                flex items-center bg-transparent p-[5px] border-2 h-[40px] hover:border-blue-500 border-gray-500 rounded-[50px]  transition-all
                shadow-[6px_6px_10px_rgba(0_0_0_.2),-6px_-6px_10px_rgba(255_255_255_.7)] overflow-hidden    relative mx-[1%]  duration-900!
            `}
        >
   
            <i 
                onClick={() => {dispatch({type : "handerWidth", payload : {flag : false}})}}
                className="bi bi-search text-xl  cursor-pointer absolute left-[13px] text-blue-500 ">
            </i>

            <input 
                type="text" placeholder={`Search ...`} 
                onChange={(e)=> {dispatch({type : "handlerWrite", payload : {search  : e.target.value}})}}
                className={`${state.input ? 'w-full' : "w-0! "} border-0  mx-12   outline-0 text-white transition-all   duration-1000! `}
            />
           
            <i className={`${state.input ? 'text-2xl duration-6000' : 'text-[0px] duration-4000!'} duration-500! bi bi-mic-fill absolute text-blue-500 hover:text-red-400!  cursor-pointer  right-[10px]   transition-all `}></i>                        
        </div>
    )
}

export default SearchInput;