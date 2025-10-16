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
            hr_dot.current.style.transform = `rotate(${h * 30}deg)`
    })
    return (
        // time
        <div 
            className="flex gap-40 text-white "
        >



        </div>
    )
}

export default DigitalClock