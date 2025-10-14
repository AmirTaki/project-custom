import { useState } from "react";

const SearchInput = () => {
    const [search, setSearch] = useState('')
    const [active, setActive] = useState(false)
    return (
        <div 
            className ={`
                ${active ? "w-[300px]" : "w-15"}
                flex items-center bg-[aliceblue] p-[5px]  h-[50px] rounded-[50px] m-[10px]  relative transition-[width] duration-500
                shadow-[6px_6px_10px_rgba(0,0,0,.2),-6px_-6px_10px_rgba(255,255,255,.7)]
            `}
        >
            <img 
                className="w-[25px] cursor-pointer absolute left-[20px] "
                src="https://purepng.com/public/uploads/medium/search-icon-sl7.png"
                alt="" 
                onClick={() => {setActive((pre) => (!pre))}}
            />
            <input 
                type="text" placeholder="Search ..." 
                onChange={(e)=> {setSearch(e.target.value)}}
                className={`bg-transparet border-0 w-[500px]  m-[10px]  outline-0 text-[rgb(100, 100, 100)] transition-[width] duration-[1000s] delay-[500s]`}
            />
           
            <i className={`${active ? 'text-2xl' : 'w-0'} bi bi-mic-fill absolute right-[10px] transition-[text] delay-[1000s]`}></i>
         
         
        </div>
    )
}

export default SearchInput;