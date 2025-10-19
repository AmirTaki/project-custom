import {useEffect, useRef, useState } from "react"

const DownloadButton = () => {

    const [startDwonload, setStartDownload] = useState(false)
    const [done, setDone] = useState(false)
    const [number, setNumber] = useState(0)
    const contaienrRef  =  useRef (null) 
    const intervalRef  =  useRef (null) 

    const handleButton = () => {
        setStartDownload((pre) => (pre = true))
        
        intervalRef.current =  setInterval(() => {
            setNumber(preNumber  => {
                const newNumber = preNumber + 1;
                contaienrRef.current.style.background = `conic-gradient(#f5036c ${newNumber}%, #333 0%)`
        
                if(newNumber > 100){                
                    clearInterval(intervalRef.current)
                    setDone((preDone) => (preDone = true))
                    contaienrRef.current.style.background = "#0f0"
                    return 100
                }   
        
                return newNumber
            })
        }, 100);
    }   
    
    return (
        // container
        <div 
            ref = {contaienrRef}
            className={`
                relative w-[200px] h-[200px] rounded-[50%] flex justify-center items-center
                cursor-pointer select-none overflow-hidden bg-[conic-gradient(#333_0%,#333_100%))]
                before:content-[''] before:absolute before:rounded-[50%] before:bg-[#222] before:opacity-90 before:inset-[15px]
            `}>
            {/* download */}
            <i 
                onClick = {handleButton}
                className={` 
                    fa-solid fa-arrow-down-long
                    absolute top-[50%]  text-[#03a9f5] text-[4em] duration-500 
                    ${startDwonload ? 'translate-y-[170%]!' : "translate-y-[-50%]!"}
                `}></i>
            {/* number */}
            <h2 className={`
                ${done ? 'text-[.5rem] leading-[1em] ' : ''}
                relative! z-100 text-[3em] text-center text-white    
            `}>
                <span className={` ${startDwonload ? 'flex  ' : 'hidden'} `}>
                    <div className={`${done ? "hidden!" : "flex!"}`}>{number} <small className="text-[.5em] absolute bottom-3 -right-6">%</small></div>
                    <i className={`${done ? "flex!   text-[100px]" : "hidden!"}  flex-col  fa-solid fa-check`}></i>                    
                    <small className={`${done ? 'absolute! top-[55px] left-5 text-[.3em]! whitespace-nowrap font-bold  uppercase -translate-x-1/9 translate-y-1/2 tracking-[.2em]' : "hidden"}`}>100% Done</small>
                </span>
            </h2>
        </div>
    )
}

export default DownloadButton;