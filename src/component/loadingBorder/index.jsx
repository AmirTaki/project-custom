import { useEffect, useRef, useState } from "react";
import "./styles.css"
const LoadingBorder = () => {
    const [precent, setPercent] = useState(0)
    const [active, setActive] = useState(true)

    useEffect(() => {
        if(!active) return;

        const timer =  setInterval(() => {
            setPercent((prePercent) => {
                if(prePercent >= 100) {
                    clearInterval(timer)
                    setActive(false)
                    return 100
                }
                return prePercent + 1
            })
        }, 1000)

        return() => clearInterval(timer)
    }, [precent]) 

    return(
        // container
        <div className={`${active ? "bg-[#000]! container" : ""}
            flex items-center justify-center relative h-[450px] w-[350px] rounded-[16px] bg-white overflow-hidden
            before:content before:absolute before:h-[650px] before:w-[650px] before:bg-[conic-gradient(transparent,transparent,transparent,#fff)]
        `}>
            {/* overlay */}
            <span
                className="flex items-center justify-center absolute h-[440px] w-[340px] text-[40px] font-[500] text-white rounded-[12px] bg-[#10131c] font-[Poopins]"
            >{precent}%</span>
        </div>
    )
}
export default LoadingBorder;