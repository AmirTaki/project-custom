import { useReducer, useState } from 'react';
import { inputTitle } from './inputItem';
import ItemOption from './itemOption';
import './styles.css'

const SelectMenu = () => {
    const [open, setOpen] =  useState(false)
    const reducer = (state, action) =>{
        switch(action.type) {
            case "" :
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, [])
    return( 
        // select menu
        <div className="w-[300px] cursor-pointer relative">
            {/* select */}
            <div 
                onClick={() => {setOpen(!open)}}
                className="bg-[#201e1e] p-[20px] text-white font-[500] rounded-[6px] flex justify-between items-center">
                <span > Select Languge </span>
                <i className="fas fa-angle-down"></i>
            </div>

            {/* option list */}
            <div 
                className={`
                    ${open ? "h-[180px]" : "h-0"}
                    absolute w-[100%] bg-[#f9f9f9] rounded-[6px] mt-[14px]   max-h-[180px] transition-all duration-[400ms] ease-linear delay-[200ms] overflow-y-auto  scrollbarStyle
                `}
            >
                {inputTitle.map((item) => {
                    return(
                        <ItemOption  key = {item.id} option = {item} dispatch = {dispatch}/>
                    )
                })}
              
               
               
               
        
            </div>
        </div>
    )
}

export default SelectMenu;