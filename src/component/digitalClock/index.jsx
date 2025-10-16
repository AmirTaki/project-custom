import { useEffect, useRef, useState } from "react"

const DigitalClock = () => {
    // hours
    const hours =  useRef ()
    const hh = useRef()
    const hr_dot = useRef()
    const [h, setH]  = useState('')
    
    useEffect(() => {
        let H = new Date().getHours()
            H > 12 ? H -=12 : H;
            H =  H < 10 ? "0" + H  : H;
            setH((prevHour) => (prevHour = H))
     
            hh.current.style.strokeDashoffset = 440 - (440 * H) / 12
            // hr_dot.current.style.transform = `rotate(${h * 30}deg)`
    })
    return (
        // time
        <div 
            className="flex gap-40 text-white "
        >
            {/* circle */}
            <div className="     relative w-[150px] h-[150px]  flex items-center justify-center">
                {/* dots */}
                <div 
                    // style={{transform : `rotate${h *30}deg`}}
                    className="
                        text-center font-[500] text-[1.5em]
                        absolute w-[100%] h-[100%] z-10 flex justify-center items-center
                        before:content-[''] before:top-[-3px] before:absolute before:w-[15px] before:h-[15px] before:bg-[blue]
                        before:rounded-[50%] before:shadow-[0_0_20px_#ff2972,0_0_60px_#ff2972] 
                    "
                >
                    {/* svg */}
                    <svg className="relative w-[150px] h-[150px] rotate-[270deg]">
                        <circle 
                            cx = '70' cy = "70" r = "70"
                            className="w-[100%] h-[100%] fill-transparent stroke-[#191919] stroke-4 translate-x-[5px] translate-y-[5px]"
                        ></circle>
                       
                        <circle 
                            ref = {hh}
                            cx = '70' cy = "70" r = "70"
                            className="w-[100%] h-[100%] fill-transparent stroke-[#ff2972]  [stroke-dasharray:440]  stroke-4 translate-x-[5px] translate-y-[5px]  "
                        ></circle>
                    </svg>
                    {/* hours */}
                    <div 
                       ref = {hours}
                       className="absolute text-center font-[500] text-[1.5em]"
                    >
                        {h} <br /> 
                        <span className="absolute translate-x-[-50%] translate-y-[-3px] text-[12px] font-[300] uppercase tracking-[.1em]">
                            Hours
                        </span>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default DigitalClock