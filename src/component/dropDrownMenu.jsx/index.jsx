import { useState } from "react";

const DropDrownMenu = () => {
    const [active, setActive] = useState(false)
    return(
        <>
        {/* navigation overflow-hidden */}
        <div
            className={` ${active ? "w-[300px] h-[400px]  transition-[width,height]  delay-[0ms,750ms]  " : "w-[120px] h-[60px] transition-[height,width]  delay-[0ms,750ms]"}
                bg-white shadow-[10px_25px_35px_rgba(0,0,0,.1)] flex justify-between duration-500   overflow-hidden
            `}
            >
            {/* userBx overflow-hidden */}
            <div className={` ${active ?  "w-[calc(100%-60px)] delay-0": "w-[60px] delay-500"}
                relative  h-[60px] bg-blue-300 flex items-center duration-500 overflow-hidden
            `}
            >
                {/* imgBx */}
                <div className="relative min-w-[60px] h-[60px] bg-[#000] rounded-[50%] border-[10px] border-white overflow-hidden">
                    <img src="" alt="" 
                        className="absolute top-0 left-0 w-[100%] h-[100%] object-cover"
                    />
                </div>
        
                {/* username */}
                <p className="whitespace-nowrap text-[#555] text-[1.1em]">Amir Taki</p>
            </div>
            {/* menu toggle */}
            <div className="relative w-[60px] h-[60px] cursor-pointer flex justify-center items-center"></div>


        </div>
        <div className="text-red-500" onClick={() => {setActive(!active)}}>click me</div>
        </>
    )
}

export default DropDrownMenu;