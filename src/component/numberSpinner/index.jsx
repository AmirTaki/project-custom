import { useEffect, useRef, useState } from "react"

const NumberSpinner = () => {
    const outPut = useRef(null)
    const meter = useRef(null)
    const [conter, setConter] =  useState(0)

    // const plusHandler = () => {
    //     if(conter >= 10) return

    //     if(conter >= 7){
    //         meter.current.style.backgroundColor = ;
    //         meter.current.style.filter = 
    //     }

    //     setConter((prevConter) => (prevConter + 1))
     
    // }

    // const minsHandler = () => {
    //     if (conter <= 0) return 

    //     if(conter <= 7){
    //         meter.current.style.backgroundColor = 
    //         meter.current.style.filter = 
    //     }

    //     setConter((prevConter) => (prevConter - 1))
    // }

    const HandlerVolume = (tip) => {
        setConter(tip ? conter >= 10 ? conter : conter + 1 : conter <= 0 ? conter : conter - 1 )
    }

    useEffect(() => {
        meter.current.style.backgroundColor = conter <= 7 ? "#0f0" : "#f00"
        meter.current.style.filter = conter <= 7 ? 'drop-shadow(0 0 2.5px #0f0) drop-shadow(0 0 10px #0f0f)' : 'drop-shadow(0 0 2.5px #f00) drop-shadow(0 0 10px #f00)'
        outPut.current.innerText = conter
        meter.current.style.height = `${conter*10}%`
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
                        className="absolute w-[100%]  bg-[#0f0] rounded-[20px] duration-500 transition-all  "
                    >
                    </span>
                </div>
                {/* button plus & minus */}
                <div onClick={() => {HandlerVolume(true)}} className="relative w-[40px] h-[40px] text-center leading-[35px] text-[1.5em] text-white rounded-[50%] text-shadow-[0_0_5px_#fff,0_0_10px_#fff] cursor-pointer font-[500] active:text-[1.25em] active:shadow-[inset_0_0_15px_rgba(0,0,0,.9)]" >+</div>
                <div onClick={() => {HandlerVolume(false)}} className="relative w-[40px] h-[40px] text-center leading-[35px] text-[1.5em] text-white rounded-[50%] text-shadow-[0_0_5px_#fff,0_0_10px_#fff] cursor-pointer font-[500] active:text-[1.25em] active:shadow-[inset_0_0_15px_rgba(0,0,0,.9)]" >-</div>
            </div>
        </div>
    )
}
export default NumberSpinner