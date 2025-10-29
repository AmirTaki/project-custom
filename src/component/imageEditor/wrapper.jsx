import { useContext } from "react"
import { EditorContect } from "."

const Wrapper  = ({disable, img}) => {
    // const buttons = ['Brighteness', 'Saturation', 'Inversion', 'Grayscale']
    const buttonsRotate = ['fa-solid fa-rotate-left', 'fa-solid fa-rotate-right', 'bx bx-reflect-vertical', 'bx bx-reflect-horizontal']
    
    const {filterName, filterValue, filterSlider, previewImg, dispath, state} = useContext(EditorContect)
 
    return (
        // wrapper
        <div className="flex my-[20px] mx-0 min-h-[335px] max-md:flex-wrap-reverse! ">
            {/* editor-panel */}
            <div className={`${disable ?"opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto" } 
                py-[15px] px-[20px] w-[280px] rounded-[5px] border-1 border-[#ccc] max-md:w-[100%]!
            `}>
                
                {/* filter */}
                <div className="">
                    
                    {/* title => label*/}
                    <label className="block text-[16px] mb-[12px]">Filters</label>
                    
                    {/* options */}
                    <div className="flex flex-wrap justify-between">
                        {state.buttonsFilter.map((item) => {
                            return(
                                <button
                                    key = {item.id}
                                    onClick={() => {dispath({type:`optionalButton`, payload : {id : item.id, name : item.name}})}}
                                    className={`outline-0 h-[40px] text-[14px]  rounded-[3px] mb-[8px]  w-[calc(50%-4px)] 
                                        ${item.active? "text-white bg-[#5372F0] border-1 border-[#5372F0]" : "text-[#6c757D] bg-white border-1 border-[#aaa] hover:bg-[#f5f5f5]!"}    
                                    `}
                                >
                                    {item.name}
                                </button>
                                
                            )
                        })}
                    </div>

                    {/* slider */}
                    <div className="mt-[12px]">
                        {/* filter-info */}
                        <div className="flex text-[#464646] text-[14px] justify-between">
                            <p ref = {filterName}>Brighteness</p>  {/*  name */} 
                            <p ref = {filterValue}>100%</p>    {/* value */}
                        </div>
                        {/* input */}
                        <input type="range" value = '100' min = '0' max = '200' 
                            ref = {filterSlider}
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
            <div className="flex  justify-center items-center ml-[20px] rounded-[5px] overflow-hidden max-md:w-[100%]! max-md:m-[0_0_15px]! ">
                {/* img */}
                <img src={img} ref = {previewImg} alt="" className="max-w-[490px] max-h-[335px] w-[100%]! h-[100%]! object-contain " />
            </div>
        </div>
    )
}

export default Wrapper