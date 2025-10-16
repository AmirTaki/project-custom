import { useEffect, useRef, useState } from "react"

// {dots, svgCircle, circle, time, color, text   }
const Clock = ({text, color}) => {

       // use ref
        const circle =  useRef ()
        const svgCircle = useRef()
        const dots = useRef()
        const [time,  setTime]  = useState('')
       
        useEffect(() => {
                setInterval(() => {
                    // hours
                    let C = new Date().getHours()
                        C > 12 ? C -=12 : C;
                        C =  C < 10 ? "0" + C  : C;
                        setTime((prevCircle) => (prevCircle = C))
                
                        svgCircle.current.style.strokeDashoffset = 440 - (440 * C) / 12
                        dots.current.style.transform = `rotate(${C * 30}deg)`

                }, )
            },)
    return(
        <>
            {/* circle */}
            <div className="relative w-[150px] h-[150px]  flex items-center justify-center">
                {/* dots */}
                <div 
                    style={{'--before-color': `#${color}` }}
                    ref = {dots}
                    className={`
                        text-center font-[500] text-[1.5em]
                        absolute w-[100%] h-[100%] z-10 flex justify-center items-center
                        before:content-[''] before:top-[-3px] before:absolute before:w-[15px] before:h-[15px] before:bg-[var(--before-color)]
                        before:rounded-[50%] before:shadow-[0_0_20px_var(--before-color),0_0_60px_var(--before-color)] 
                    `}
                        
                >
                </div>
                {/* svg */}
                <svg className="relative w-[150px] h-[150px] rotate-[270deg]">
                    <circle 
                        cx = '70' cy = "70" r = "70"
                        className="w-[100%] h-[100%] fill-transparent stroke-[#191919] stroke-4 translate-x-[5px] translate-y-[5px]"
                    ></circle>
                    
                    <circle 
                        style={{'--before-color': `#${color}` }}
                        ref = {svgCircle}
                        cx = '70' cy = "70" r = "70"
                        className={`w-[100%] h-[100%] fill-transparent stroke-[var(--before-color)]  [stroke-dasharray:440]  stroke-4 translate-x-[5px] translate-y-[5px]`}  
                    ></circle>
                </svg>
                {/* hours */}
                <div 
                    ref = {circle}
                    className="absolute text-center font-[500] top-10 text-[1.5em]"
                >
                    {time} <br /> 
                    <span className="absolute translate-x-[-50%] translate-y-[-3px] text-[12px] font-[300] uppercase tracking-[.1em]">
                        {text}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Clock;