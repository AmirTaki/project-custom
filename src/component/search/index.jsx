import { useState } from "react";

const SearchInput = ({active, setActive}) => {
    const [search, setSearch] = useState('')
    return (
        <div 
            className ={`
                ${active ? "w-[98%]" : "w-12 border-0!"}
                flex items-center bg-transparent p-[5px] border-2 h-[40px] hover:border-blue-500 rounded-[50px]  transition-all duration-900
                shadow-[6px_6px_10px_rgba(0_0_0_.2),-6px_-6px_10px_rgba(255_255_255_.7)] overflow-hidden    relative mx-[1%]
            `}
        >
   
            <i 
                onClick={() => {setActive((pre) => (!pre))}}
                className="bi bi-search text-xl  cursor-pointer absolute left-[13px] text-blue-500 ">
            </i>

            <input 
                type="text" placeholder={`Search ...`} 
                onChange={(e)=> {setSearch(e.target.value)}}
                className={`${active ? 'w-[100%]' : "w-0!"} border-0  mx-12   outline-0 text-white transition-all  delay-500 duration-1000 `}
            />
           
            <i className={`${active ? 'text-2xl' : 'text-[0px]'} bi bi-mic-fill absolute text-blue-500 hover:text-red-400! hover:delay-0 cursor-pointer not-hover:delay-0 right-[10px] delay-850! transition-all duration-200`}></i>
         
         
        </div>
    )
}

export default SearchInput;