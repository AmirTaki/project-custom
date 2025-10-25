import { useEffect, useRef, useState } from "react"

const NumberSpinner = () => {
    const outPut = useRef(null)
    const meter = useRef(null)
    const [conter, setConter] =  useState(0)

    const plusHandler = () => {
        if(conter >= 10) return

        if(conter >= 7){
            meter.current.style.backgroundColor = "#f00";
            meter.current.style.filter = 'drop-shadow(0 0 2.5px #f00) drop-shadow(0 0 10px #f00)'
        }

        setConter((prevConter) => (prevConter + 1))
        meter.current.style.hight = `${conter*10}%`
    }
    useEffect(() => {
        outPut.current.innerText = conter
    }, [conter])
    return (
        // box
        <div className="w-[80px] h-[500px] flex justify-center items-center bg-[#333] rounded-[50px] shadow-[0_5px_50px_rgba(0,0,0,.5)]">
            {/* spinner */}
            <div className="relative flex items-center justify-center flex-col w-[40px] gap-3 select-none">
                
                {/* output */}
                <span 
                    ref = {outPut}
                    className="relative text-white text-[2em] text-shadow-[0_0_5px_#fff]">
                </span>

                {/* progress */}
                <div className="relative w-[10px] h-[300px] bg-[#222] rounded-[20px] flex flex-col-reverse">
                    {/* meter */}
                    <span 
                        ref = {meter}
                        style={{filter : "drop-shadow(0 0 2.5px #0f0) drop-shadow(0 0 10px #0f0f)"}}
                        className="absolute w-[100%] h-7 bg-[#0f0] rounded-[20px] duration-500 transition-all  "
                    >
                    </span>
                </div>
                {/* button plus & minus */}
                <div onClick={plusHandler} className="relative w-[40px] h-[40px] text-center leading-[35px] text-[1.5em] text-white rounded-[50%] text-shadow-[0_0_5px_#fff,0_0_10px_#fff] cursor-pointer font-[500] active:text-[1.25em] active:shadow-[inset_0_0_15px_rgba(0,0,0,.9)]" >+</div>
                <div className="relative w-[40px] h-[40px] text-center leading-[35px] text-[1.5em] text-white rounded-[50%] text-shadow-[0_0_5px_#fff,0_0_10px_#fff] cursor-pointer font-[500] active:text-[1.25em] active:shadow-[inset_0_0_15px_rgba(0,0,0,.9)]" >-</div>
            </div>
        </div>
    )
}
export default NumberSpinner