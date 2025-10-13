import Switch from "./switch"
import { useReducer, useState } from "react"

const BoxSwitch = () => {
    const [active, setActive] = useState(false)
    const reducer = () => {
        
    }
    const [stateSwich, dispatchSwitch] = useReducer(reducer, {});

    const handleBox = () => {
        setActive((pre) => !pre)
    }

    return(
        <div className="box-custom-magic"
            onClick={handleBox}
        >
            <Switch  active = {active}/>
        </div>
    )
}

export default BoxSwitch