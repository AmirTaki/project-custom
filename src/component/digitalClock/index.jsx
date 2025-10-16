import { useEffect, useRef, useState } from "react"
import Clock from "./clcok"

const DigitalClock = () => {
    // hours
    const hours =  useRef ()
    const hh = useRef()
    const hr_dot = useRef()
    const [h, setH]  = useState('')

    // minutes 
    const minutes = useRef ()
    const mm = useRef()
    const min_dot = useRef()
    const [m, setM] = useState('')
    

    // seconds
    const seconds = useRef()
    const ss = useRef()
    const se_dot = useRef()
    const [s, setSe] = useState('')

    useEffect(() => {
        setInterval(() => {
            // hours
            let H = new Date().getHours()
                H > 12 ? H -=12 : H;
                H =  H < 10 ? "0" + H  : H;
                setH((prevHour) => (prevHour = H))
         
                hh.current.style.strokeDashoffset = 440 - (440 * H) / 12
                hr_dot.current.style.transform = `rotate(${h * 30}deg)`
    
            // minutes
            let M = new Date().getMinutes();
                M = M < 10 ? "0" + M : M;
                setM((prevMin) => (prevMin = M))
    
                mm.current.style.strokeDashoffset = 440 - (440 * M) / 60
                min_dot.current.style.transform = `rotate(${M * 6}deg)`
    
            // seconds
            let S = new Date().getSeconds();
                S = S < 10 ? "0"+ S : S;
                setSe((prevSe) => (prevSe = S))
                
                ss.current.style.strokeDashoffset = 440 - (440 * S) / 60
                se_dot.current.style.transform = `rotate(${S * 6}deg)`
        })
    },)

    return (
        // time
        <div    className="flex gap-20 text-white ">
            {/* hours */}
            <Clock dots = {hr_dot} svgCircle = {hh} circle={hours} time = {h} text = {'Hours'} color = {'ff2972'} />

            {/* minuts */}
            <Clock dots = {min_dot} svgCircle = {mm} circle={minutes} time = {m} text = {'Minutes'} color = {'fee800'} />

            {/* seconds */}
            <Clock dots = {se_dot} svgCircle = {ss} circle={seconds} time = {s} text = {'Seconds'} color = {'04fc43'} />
        
            <div className="relative text-[1em] translate-x-[-20px]">
                <div className=""></div>
            </div>
        </div>
    )
}

export default DigitalClock