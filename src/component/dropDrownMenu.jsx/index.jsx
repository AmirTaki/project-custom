import { useState } from "react";

const DropDrownMenu = () => {
    const [active, setActive] = useState(false)
    return(
        <>
        {/* navigation overflow-hidden */}
        <div
            className={` ${active ? "w-[300px] h-[400px]  transition-[width,height]  delay-[0ms,750ms]  " : "w-[120px] h-[60px] transition-[height,width]  delay-[0ms,750ms]"}
                bg-white shadow-[10px_25px_35px_rgba(0,0,0,.1)] flex justify-between duration-500   overflow-hidden relative
            `}
            >
            {/* userBx overflow-hidden */}
            <div className={` ${active ?  "w-[calc(100%-60px)] delay-0": "w-[60px] delay-500"}
                  h-[60px] flex items-center duration-500 overflow-hidden
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
            className={` ${active ? 
                "before:translate-y-0 before:rotate-45 before:shadow-[0_0_#555] after:translate-y-0 after:-rotate-45" : 
                "before:translate-y-[-10px] before:shadow-[0_10px_#555] after:translate-y-[10px]"}
                relative w-[60px] h-[60px] cursor-pointer flex justify-center items-center 
                after:content-[''] after:absolute after:w-[30px] after:h-[2px] after:bg-[#555] after:duration-500
                before:content-[''] before:absolute before:w-[32px] before:h-[2px] before:bg-[#555]  before:duration-500
            `}>
            </div>

            {/* menu */}
            <ul className=" overflow-hidden absolute h-[calc(100%-60px)] w-[100%] bg-red-400 mt-[60px] p-[20px] border-t-1 border-t-[rgba(0,0,0,.1)]">
                <li>
                    <a href="" className="flex items-center my-[20px] mx-0 text-[1em] gap-[10px] decoration-0 text-[#555] hover:text-[#4e65ff]"> 
                        <i className="bi bi-person "></i>
                        My Profile
                    </a>
                </li>
            </ul>

        </div>
        </>
    )
}

export default DropDrownMenu;