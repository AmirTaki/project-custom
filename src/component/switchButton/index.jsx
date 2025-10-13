import { useState } from "react"

const SwitchButton = () => {
    const spans = Array.from({length : 40}, (_, i) => {
        return  Math.random() * .25
    })

    const [active, setActive] = useState(false)
    const handleBox = () => {

    }

    return(
        <div className="relative flex flex-col gap-30">
            <div className="box-custom-magic"></div>
            <div className="box-custom-magic"></div>
            <div className="box-custom-magic"
                onClick={handleBox}
            >
                {spans.map((i, index) => (
                    <span 
                        className="box-span-custom "
                        key = {index}
                        style={{top : `${index * 1}px`, transitionDelay : `${3}s`}}
                    ></span>
                ))}

            </div>
        </div>
    )
}


export default SwitchButton;