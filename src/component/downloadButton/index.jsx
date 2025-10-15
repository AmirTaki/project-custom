import { useEffect, useRef, useState } from "react"

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
                if(newNumber > 100){                
                    clearInterval(intervalRef.current)
                    setDone((preDone) => (preDone = true))
                    return 100
                }   
                return newNumber
            })

        }, 100);
    }   


    return (
        // container
        <div 
            style={{background : `conic-gradient(#f5036c ${number}%, #333 0%)`}}
            ref = {contaienrRef}
            className={`
                ${done ? "bg-[#0f0]" : "" }
                relative w-[200px] h-[200px] rounded-[50%] flex justify-center items-center
                cursor-pointer select-none overflow-hidden bg-[conic-gradient(#333_0%,#33_100%))]
                before:content-[''] before:absolute before:rounded-[50%] before:bg-[#222] opacity-90 before:inset-[15px]
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
                relative z-100 text-[3em] text-center text-white    
            `}>
                <span className={`
                    ${startDwonload ? 'flex' : 'hidden'}
                    ${done ? "absolute top-[10px] text-[.2em] whitespace-nowrap font-[500] uppercase -translate-x-1/2  translate-y-1/2 tracking-[.5em]" : ""}    
                
                `}>{number}%</span>
            </h2>
        </div>
    )
}

export default DownloadButton;