import { useContext } from "react";
import { EditorContect } from ".";

const Controls = ({disable}) => {
    const {fileInput, dispath} =  useContext(EditorContect)
    return(
        <div className="flex flex-wrap justify-between">
            {/* reset-filters */}
            <button 
                onClick={() => {dispath({type : 'resetart'})}}
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
                <input 
                    onChange={(e) => {dispath({type : '', payload : {event : e.target.files}})}}
                    type="file" 
                    accept="image/*" hidden  
                    ref = {fileInput}/>
                {/* chose image */}
                <button
                    onClick={() => {dispath({type : "loadImage"})}}
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
    )
}
export default Controls;