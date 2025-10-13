import { useState } from "react"
import BoxSwitch from "./boxSwich"


const SwitchButton = () => {
    const boxSwitch = [1, 2, 3];
    const spans = Array.from({length : 40}, (_, i) => {
        return  Math.random() * .25
    })

    const [active, setActive] = useState(false)
    const handleBox = () => {
        setActive((pre) => !pre)
    }

    console.log(active)
    return(
        <div className="relative flex flex-col gap-7">
            {boxSwitch.map((box) => (
                <BoxSwitch key = {box}/>
            ))}
            <BoxSwitch/>
        
            <div className="box-custom-magic"
                onClick={handleBox}
            >
                {spans.map((delay, index) => (
                    <span 
                        className={`box-span-custom ${active ? "transform translate-x-[60px]" : ""}`}
                        key = {index}
                        style={{top : `${index * 1}px`, transitionDelay : `${delay}s`}}
                    ></span>
                ))}

            </div>
        </div>
    )
}


export default SwitchButton;