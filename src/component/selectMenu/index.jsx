import { useEffect, useReducer, useRef, useState } from 'react';
import { inputItem } from './inputItem';
import OptionalLanguge from './option';
import './styles.css'


const SelectMenu = () => {
    const spanRef =  useRef('')
  
    const [open, setOpen] =  useState(false)
  
    const reducer = (state, action) =>{
        switch(action.type) {
            case "selected" :
                return state.map((item) => ({...item, status : item.id === action.payload.data ? true : false } ))            
        }   
    }
    const [state, dispatch] = useReducer(reducer, inputItem)

    const foundLanguge = () => {
        const findItem =  state.find((item) => (item.status))
        return findItem ? findItem.title : "Select Languge" 
    }

    useEffect(() => { 
        spanRef.current.innerText = foundLanguge()   
    },[open] )

    return( 
        // select menu
        <div className="w-[300px] cursor-pointer relative">
            {/* select */}
            <div 
                onClick={() => {setOpen(!open)}}
                className="bg-[#201e1e] p-[20px]  font-[500] text-white rounded-[6px] flex justify-between items-center">
                <span ref = {spanRef}> </span>
                <i className={`${open ? "rotate-180" : ""} duration-700 fas fa-angle-down`}></i>
            </div>

            {/* option list */}
            <div 
                className={`
                    ${open ? "h-[180px]" : "h-0"}
                    absolute w-[100%] bg-[#f9f9f9] rounded-[6px] mt-[14px]   max-h-[180px] transition-all duration-[400ms] ease-linear delay-[200ms] overflow-y-auto  scrollbarStyle
                `}
            >
                {state.map((item) => {
                    return(
                        <OptionalLanguge  key = {item.id} item = {item} dispatch = {dispatch}  setOpen = {setOpen}/>
                    )
                })}
    
            </div>
        </div>
    )
}

export default SelectMenu;