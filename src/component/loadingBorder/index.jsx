import { useEffect, useState } from "react";

const LoadingBorder = () => {
    const [precent, setPercent] = useState(0)
    useEffect(() => {
        const itemer = setInterval(() => {
            setPercent(precent + 1)
        }, 200)
    })
    return(
        // container
        <div className="flex items-center justify-center relative h-[450px] w-[350px] rounded-[16px] bg-white overflow-hidden
            before:content before:absolute before:h-[650px] before:w-[650px] before:bg-[conic-gradients(transparent,transparent,transparent,#fff)] 
        ">
            {/* overlay */}
            <span
                className="flex items-center justify-center absolute h-[440px] w-[340px] text-[40px] font-[500] text-white rounded-[12px] bg-[#10131c] font-[Poopins]"
            >{precent}%</span>
        </div>
    )
}
export default LoadingBorder;