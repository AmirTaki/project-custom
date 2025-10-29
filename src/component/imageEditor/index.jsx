import { useState } from "react";
import img from "./img/cadillac.jpg"

const ImageEditor = () => {
    const buttons = ['Brighteness', 'Saturation', 'Inversion', 'Grayscale']
    const buttonsRotate = ['fa-solid fa-rotate-left', 'fa-solid fa-rotate-right', 'bx bx-reflect-vertical', 'bx bx-reflect-horizontal']
    const [disable, setDisable] = useState(false)
    const [active, setActive] = useState(false)
    const [text, setText] = useState(false)
    return(
        // container  // disable
        <div className="w-[850px] p-[30px_35px_35px] bg-white rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,.1)]">
            <h2 className="-mt-[8px] text-[22px] font-[500]">
                Easy Image Editor
            </h2>
            {/* wrapper */}
            <div className="flex my-[20px] mx-0 min-h-[335px]">
                {/* editor-panel */}
                <div className={`${disable ?"opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto" } 
                    py-[15px] px-[20px] w-[280px] rounded-[5px] border-1 border-[#ccc]
                `}>
                    
                    {/* filter */}
                    <div className="">
                        
                        {/* title => label*/}
                        <label className="block text-[16px] mb-[12px]">Filters</label>
                        
                        {/* options */}
                        <div className="flex flex-wrap justify-between">
                            {buttons.map((item, index) => {
                                return(
                                    <button
                                        key = {index}
                                        className={`outline-0 h-[40px] text-[14px]  rounded-[3px] mb-[8px]  w-[calc(50%-4px)] 
                                            ${active? "text-white bg-[#5372F0] border-1 border-[#5372F0]" : "text-[#6c757D] bg-white border-1 border-[#aaa] hover:bg-[#f5f5f5]!"}    
                                        `}
                                    >
                                        {item}
                                    </button>
                                    
                                )
                            })}
                        </div>

                        {/* slider */}
                        <div className="mt-[12px]">
                            {/* filter-info */}
                            <div className="flex text-[#464646] text-[14px] justify-between">
                                <p>Brighteness</p>  {/*  name */} 
                                <p>100%</p>    {/* value */}
                            </div>
                            {/* input */}
                            <input type="range" value = '100' min = '0' max = '200'
                                className="w-[100%] h-[5px] accent-[#5372F0]"
                            />
                        </div>
                    </div>
                    
                    {/* rotate */}
                    <div className="mt-[17px]">
                        {/* title */}
                        <label htmlFor="" className="block text-[16px] mb-[12px]">Rotate & Flip</label>
                        {/* options */}
                        <div className="flex flex-wrap justify-between">
                            {/* buttons */}
                            {buttonsRotate.map((item, index) => {
                                return(
                                    <button
                                        key = {index}
                                        // child (3) child (4) text => 18px
                                        className={` text-[14px] outline-0 h-[40px]   rounded-[3px] mb-[8px]  w-[calc(25%-3px)] active:text-white! active:bg-[#5372F0]! active:border-[#5372F0]!
                                            text-[#6c757D] bg-white border-1 border-[#aaa] hover:bg-[#f5f5f5]
                                        `}
                                    >
                                        <i className={item}></i>
                                    </button>                                    
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* preview-img */}
                <div className="flex flex-1 justify-center items-center ml-[20px] rounded-[5px] overflow-hidden ">
                    {/* img */}
                    <img src={img} alt="" className="max-w-[490px] max-h-[335px] w-[100%] h-[100%] object-contain" />
                </div>
            </div>

            {/* controls  */}
            <div className="flex flex-wrap justify-between">
                {/* reset-filters */}
                <button 
                    className="py-[11px] px-[20px] text-[14px] rounded-[3px] outline-0 text-[#6C757D] hover:text-white!
                    border-1 border-[#6C757D] cursor-pointer hover:bg-[#6C757D] 
                    bg-none transition-all duration-300 ease-in uppercase "
                >
                    Reset Filters
                </button>

                {/* row */}
                <div className="">
                    {/* file-input */}
                    <input type="file" accept="image/*" hidden />
                    {/* chose image */}
                    <button
                        className="py-[11px] px-[20px] text-[14px] rounded-[3px] outline-0 text-white cursor-pointer
                        bg-[#6C757D] transition-all duration-300 ease-in uppercase    border-1 border-[#6C757D] "
                    >Choose Image</button>
                    {/* save image */}
                    <button
                        className="py-[11px] px-[20px] text-[14px] rounded-[3px] outline-0 text-white cursor-pointer
                        bg-[#5372F0] transition-all duration-300 ease-in uppercase ml-[5px] border-1 border-[#5372F0]"
                    >Save Image</button>
                </div>
            </div>
        </div>
    )
}

export default ImageEditor;