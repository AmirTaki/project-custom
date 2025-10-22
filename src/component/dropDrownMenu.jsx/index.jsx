import { useState } from "react";

const DropDrownMenu = () => {
    const [active, setActive] = useState(false)
    return(
        <>
        {/* navigation */}
        <div
            className={` ${active ? "w-[300px] h-[400px] transition-[height,width]  delay-[0ms,750ms] " : "w-[120px] h-[60px] transition-[width,height]  delay-[0ms,750ms]  "}
                bg-white shadow-[10px_25px_35px_rgba(0,0,0,.1)] flex justify-between duration-500   
            `}
            >
            {/* userBx */}
            <div className="relative w-[60px] h-[60px] bg-white flex items-center duration-500 delay-500"
            ></div>


        </div>
        <div className="text-red-500" onClick={() => {setActive(!active)}}>click me</div>
        </>
    )
}

export default DropDrownMenu;