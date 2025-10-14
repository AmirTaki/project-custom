import { useState } from "react";

const SearchInput = () => {
    const [search, setSearch] = useState('')
    const [active, setActive] = useState(false)
    return (
        <div 
            className ={`
                ${active ? "w-[300px]" : "w-12"}
                flex items-center bg-[aliceblue] p-[5px]  h-[50px] rounded-[50px] m-[10px]  relative transition-all duration-900
                shadow-[6px_6px_10px_rgba(0_0_0_.2),-6px_-6px_10px_rgba(255_255_255_.7)] overflow-hidden
            `}
        >
   
            <i 
                onClick={() => {setActive((pre) => (!pre))}}
                className="bi bi-search text-xl  cursor-pointer absolute left-[13px] text-blue-500 ">
            </i>

            <input 
                type="text" placeholder={`Search ...`} 
                onChange={(e)=> {setSearch(e.target.value)}}
                className={`${active ? 'w-[100%]' : "w-0!"} border-0  mx-12   outline-0 text-[rgb(100_100_100)] transition-all  delay-500 duration-1000 `}
            />
           
            <i className={`${active ? 'text-2xl' : 'text-[0px]'} bi bi-mic-fill absolute right-[10px] delay-900 transition-all duration-200`}></i>
         
         
        </div>
    )
}

export default SearchInput;