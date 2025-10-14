import { useContext } from "react"
import Switch from "./switch"
import { switchNavigationContext } from "../componentNavigation"


const BoxSwitch = ({box}) => {
    const {dispatchSwitch, stateSwich} =   useContext(switchNavigationContext)

    return(
        <div className="box-custom-magic"
            // onClick={() => {dispatchSwitch ({type : "switchChange", payload : {box : box}})}}
            onClick={( ) => {dispatchSwitch({type : 'switchHandle', payload : {box}})}}
        >
            <Switch  active = {stateSwich}  box = {box}/>
        </div>
    )
}

export default BoxSwitch