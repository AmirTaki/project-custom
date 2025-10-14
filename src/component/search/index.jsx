import { useState } from "react";

const SearchInput = () => {
    const [search, setSearch] = useState('')
    return (
        <div 
            className ="flex center bg-[aliceblue] p-[5px] w-[300px] h-[50px] rounded-[50px] m-[10px]  relative transition-[width] duration-150
                shadow-[6px_6px_10px_rgba(0,0,0,.2),-6px_-6px_10px_rgba(255,255,255,.7)]
            "
        >
            <img 
                className="w-[25px] cursor-pointer absolute left-[20px] top-[10px]"
                src="https://purepng.com/public/uploads/medium/search-icon-sl7.png"
                alt="" 
            />
            <input 
                type="text" placeholder="Search ..." 
                onChange={(e)=> {setSearch(e.target.value)}}
                className="bg-yellow-200 border-0  w-[100%] outline-0 text-[rgb(100, 100, 100)] transition-[width] duration-[1000s] delay-[500s]"
            />
            <img 
                src="https://tse4.mm.bing.net/th/id/OIP.FkcQWaj4fNpipuwvqAOvMwHaI6?pid=Api&P=0&h=22" alt="" 
                className="w-[30px] absolute right-[10px] transition-[width] delay-[1000s]"    
            />
        </div>
    )
}

export default SearchInput;