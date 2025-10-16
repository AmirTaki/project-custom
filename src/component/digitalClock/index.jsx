import { useEffect, useRef, useState } from "react"
import Clock from "./clcok"

const DigitalClock = () => {
    // hours
    const hours =  useRef ()
    const hh = useRef()
    const hr_dot = useRef()
    const [h, setH]  = useState('')

    // minutes 
    const minuts = useRef ()
    const mm = useRef()
    const min_dot = useRef()
    const [m, setM] = useState('')
    
    useEffect(() => {
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

            mm.current.style.strokeDashoffset = 440 - (440 * M) / 12
            min_dot.current.style.transform = `rotate(${h * 30}deg)`



    })
    return (
        // time
        <div    className="flex gap-40 text-white ">
            {/* hours */}
            <Clock dots = {hr_dot} svgCircle = {hh} circle={hours} time = {h} text = {'Hours'} color = {'ff2972'} />

            {/* minuts */}
            <Clock dots = {min_dot} svgCircle = {mm} circle={minuts} time = {m} text = {'Minutes'} color = {'ff2972'} />

            {/* seconds */}
            <Clock dots = {hr_dot} svgCircle = {hh} circle={hours} time = {h} text = {'Hours'} color = {'ff2972'} />
        </div>
    )
}

export default DigitalClock