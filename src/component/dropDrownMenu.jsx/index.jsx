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
            <div 
            onClick={() => {setActive((prevActive) => (!prevActive))}}
            className="relative w-[60px] h-[60px] cursor-pointer flex justify-center items-center bg-amber-400
                after:content-[''] after:absolute after:w-[30px] after:h-[2px] after:bg-[#555] after:translate-y-[10px] after:duration-500
                before:content-[''] before:absolute before:w-[32px] before:h-[2px] before:bg-[#555] before:translate-y-[-10px] before:shadow-[0_10px_#555] before:duration-500
            ">

            </div>


        </div>
        <div className="text-red-500" o>click me</div>
        </>
    )
}

export default DropDrownMenu;