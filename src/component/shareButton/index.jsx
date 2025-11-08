import { BrowserRouter, Link } from "react-router-dom";
import { DataShare } from "./dataShaer";
import { useState } from "react";

const ShareButton = () => {
    const [check, setCheck] = useState(false)
    return(
        // main-box
        <div className="relative">
            {/* label */}
            <label 
                onClick={() => {setCheck((prevCheck) => (!prevCheck))}}
                htmlFor="check"
                className={` ${check ? "before:opacity-100 before:pointer-events-auto" : "before:opacity-0 before:pointer-events-none"}
                    reltaive bg-white h-[50px] w-[150px] rounded-[35px] block text-center leading-[50px]
                    text-[22px] font-[500] uppercase text-[#0984ac] cursor-pointer shadow-[0_0_4px_rgba(0,0,0,.5)] 
                    transition-all duration-300 ease-in 
                    before:content-['Cancel'] before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-white 
                    hover:tracking-[1px]  before:rounded-[35px]
                `}
            >
                Share
            </label>
            {/* icons */}
            <div className={`${check ? "opacity-100 pointer-events-auto -top-[64px]" : "opacity-0 pointer-events-none -top-[120px]"}
                absolute  left-[50%] transform -translate-1/2 bg-white
                h-[110%] w-[140%] text-center flex justify-evenly items-center rounded-[35px] 
                shadow-[0_0_4px_rgba(0,0,0,.5) transition-all duration-500 ease-in-out 
                before:absolute before:content before:h-[18px] before:w-[18px] before:bg-white before:-bottom-[9px]
                before:transform before:rotate-45 `}>
                <BrowserRouter>
                    {DataShare.map((share) => 
                        (
                            <Link to = "./" key = {share.id} className="hover:translate-y-[-3px]! duration-300">
                                <i 
                                    style = {{"--color" : share.color}}
                                    className={`${share.icon} text-[#0984e3] hover:text-[var(--color)] duration-300 transfrom  cursor-pointer text-[22px]  `}
                                ></i>
                            </Link>
                        )
                    )}
                </BrowserRouter>
            </div>
        </div>
    )
}
export default ShareButton;