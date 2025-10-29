import { useState } from "react";

const ImageEditor = () => {
    const [disable, setDisable] = useState(true)
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

                </div>
            </div>

            {/* controls  */}
        </div>
    )
}

export default ImageEditor;