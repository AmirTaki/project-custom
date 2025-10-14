import Switch from "./switch"
import { useEffect, useReducer, useState } from "react"

const BoxSwitch = ({box}) => {
    const [active, setActive] = useState(false)
    
    const reducer = (state, action) => {
        switch (action.type){
            case "switchChange" : 
               const newSwitch =  state.map((item) => {
                   if (item.id === action.payload.box){
                    console.log(item.status)
                    return item.status = !item.status
                   }
                   return item
                })
        
                return [...newSwitch ]
        }
    }
    
    const [stateSwich, dispatchSwitch] = useReducer(reducer, [
        {id : 0, status : false},
        {id : 1, status : false},
        {id : 2, status : false},
    ]);

    useEffect(() => {
        console.log(stateSwich)
    }, [stateSwich])

    const handleBox = () => {
        setActive((pre) => !pre)
    }

    return(
        <div className="box-custom-magic"
            // onClick={handleBox}
            onClick={() => {dispatchSwitch ({type : "switchChange", payload : {box : box}})}}

        >
            <Switch  active = {stateSwich} box = {box} />
        </div>
    )
}

export default BoxSwitch