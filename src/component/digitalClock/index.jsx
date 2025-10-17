import { useEffect, useRef, useState } from "react"
import Clock from "./clcok"

const DigitalClock = () => {
  
    // AM PM
    const [AM_PM, setAM_PM] = useState('')

    useEffect(() => {
        setInterval(() => {
            let H = new Date().getHours()
            // AM PM
            setAM_PM( H > 12 ? "PM" : "AM")
        }, )
    },)

    return (
        // time
        <div    className="flex gap-20 flex-wrap items-center justify-center text-white  text-center font-[500] text-[1.5em] mx-auto ">
            {/* hours */}
            <Clock  text = {"hours"}  color = {'ff2972'} flash={"hours"}  />
            
            {/* minuts */}
            <Clock  text = {"minutes"} color = {'fee800'} flash={"minutes"} /> 
            
            {/* seconds */}
            <Clock  text = {"seconds"} color = {'04fc43'} flash={"seconds"} />        
           
            {/* AM PM */}
            <div className="relative text-[1em] translate-x-[-20px] -translate-y-10">
                <div>{AM_PM}</div>
            </div>

        </div>
    )
}

export default DigitalClock