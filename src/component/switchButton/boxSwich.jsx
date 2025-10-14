import Switch from "./switch"
import { useReducer, useState } from "react"

const BoxSwitch = () => {
    const [active, setActive] = useState(false)
    
    const reducer = (state, action) => {
        switch (action.type){
            case "":
                return state;
        }
    }
    
    const [stateSwich, dispatchSwitch] = useReducer(reducer, 
        {
            1 : false,
            2 : false,
            3 : false
        }
    );

    const handleBox = ({key}) => {
        setActive((pre) => !pre)
    }

    return(
        <div className="box-custom-magic"
            // onClick={handleBox}
            onClick={() => {dispatchSwitch({type : "button", pyaload : {data : key}})}}
        >
            <Switch  active = {active}/>
        </div>
    )
}

export default BoxSwitch