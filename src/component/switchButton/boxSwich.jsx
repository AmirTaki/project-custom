import Switch from "./switch"
import { useReducer, useState } from "react"

const BoxSwitch = () => {
    const [active, setActive] = useState(false)
    
    const reducer = (state, action) => {
        switch (action.type){
            case "button":
                const newData =  Object.keys(state).reduce((a, b) => {
                    a[b] = false
                    return a
                },{})
                return {...newData, [action.payload.data] : true  };
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
            onClick={() => {dispatchSwitch({type : "button", payload : {data : key}})}}
        >
            <Switch  active = {active}/>
        </div>
    )
}

export default BoxSwitch