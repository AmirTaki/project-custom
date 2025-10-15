import { useState } from "react";
import SearchInput from "../search";

const PageSearch = () => {
    const [movePage, setMovePage] = useState(false)
    return(
        <>
            <div className={`w-full h-20 fixed bg-[rgba(0,0,0,.9)] duration-500! flex items-center z-[2000]  ${movePage ? "top-0" : "-top-20"}`}>
                <SearchInput />
            </div>
            <div className="w-10 h-10 bg-blue-500" onClick={() => {setMovePage(!movePage)}}></div>
        </>
    )
}

export default PageSearch;