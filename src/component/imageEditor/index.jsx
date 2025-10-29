import { useState } from "react";
import img from "./img/cadillac.jpg"
import Wrapper from "./wrapper";

const ImageEditor = () => {
 
    const [disable, setDisable] = useState(false)
    const [active, setActive] = useState(false)
    const [text, setText] = useState(false)
    return(
        // container  // disable
        <div className="w-[750px] p-[30px_35px_35px] bg-white rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,.1)] max-md:p-[25px]! max-md:w-[90%]! ">
            <h2 className="-mt-[8px] text-[22px] font-[500] ">
                Easy Image Editor
            </h2>
            {/* wrapper */}
                <Wrapper />

            {/* controls  */}
            <div className="flex flex-wrap justify-between">
                {/* reset-filters */}
                <button 
                    className={`${disable ?"opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto" } 
                        py-[11px] px-[20px] text-[14px] rounded-[3px] outline-0 text-[#6C757D] hover:text-white!
                        border-1 border-[#6C757D] cursor-pointer hover:bg-[#6C757D] 
                        bg-none transition-all duration-300 ease-in uppercase 
                        max-sm:w-[100%]! max-sm:mb-[10px]
                    `}
                >
                    Reset Filters
                </button>

                {/* row */}
                <div className="max-sm:w-[100%]!">
                    {/* file-input */}
                    <input type="file" accept="image/*" hidden />
                    {/* chose image */}
                    <button
                        className="py-[11px] px-[20px] text-[14px] rounded-[3px] outline-0 text-white cursor-pointer
                        bg-[#6C757D] transition-all duration-300 ease-in uppercase    border-1 border-[#6C757D]
                        max-sm:w-[100%]! max-sm:mb-[10px]
                        "
                    >Choose Image</button>
                    {/* save image */}
                    <button
                        className={` ${disable ?"opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto" } 
                            py-[11px] px-[20px] text-[14px] rounded-[3px] outline-0 text-white cursor-pointer
                            bg-[#5372F0] transition-all duration-300 ease-in uppercase ml-[5px] border-1 border-[#5372F0]
                            max-sm:w-[100%]! max-sm:mb-[10px]! max-sm:ml-0!
                        `}
                    >Save Image</button>
                </div>
            </div>
        </div>
    )
}

export default ImageEditor;