import { useState } from "react";

const DropDrownMenu = () => {
    const [active, setActive] = useState(false)
    return(
        <>
        {/* navigation overflow-hidden */}
        <div
            className={` ${active ? "w-[300px] h-[400px] transition-[height,width]  delay-[0ms,750ms] " : "w-[120px] h-[60px] transition-[width,height]  delay-[0ms,750ms]  "}
                bg-white shadow-[10px_25px_35px_rgba(0,0,0,.1)] flex justify-between duration-500   overflow-hidden
            `}
            >
            {/* userBx overflow-hidden */}
            <div className={` ${active ?  "w-[calc(100%-60px)] delay-0": "w-[60px] delay-500"}
                relative  h-[60px] bg-blue-300 flex items-center duration-500 overflow-hidden
            `}
            >
                {/* imgBx */}
                <img src="" alt="" className="" />
                {/* username */}
                <p className="whitespace-nowrap text-[#555] text-[1.1em]">Amir Taki</p>
            </div>


        </div>
        <div className="text-red-500" onClick={() => {setActive(!active)}}>click me</div>
        </>
    )
}

export default DropDrownMenu;