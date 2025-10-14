import Switch from "./switch"
import { useEffect, useReducer, useState } from "react"

const BoxSwitch = ({key}) => {
    const [active, setActive] = useState(false)
    
    const reducer = (state, action) => {
        switch (action.type){
         
            
        }
    }
    
    const [stateSwich, dispatchSwitch] = useReducer(reducer, {

    });

    useEffect(() => {
        // console.log(stateSwich)
    }, [stateSwich])

    const handleBox = () => {
        setActive((pre) => !pre)
    }

    return(
        <div className="box-custom-magic"
            // onClick={handleBox}

            
        >
            <Switch  active = {stateSwich} />
        </div>
    )
}

export default BoxSwitch