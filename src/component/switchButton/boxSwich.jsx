import Switch from "./switch"
import { useEffect, useReducer, useState } from "react"

const BoxSwitch = ({box}) => {

    const reducer = (state, action) => {
        switch (action.type){
            case "switchChange" : 
                return state.map((item) => ({
                    ...item,
                    status : item.id === action.payload.box ? !item.status : item.status
                }))     

            case  "switchHandle" : 
                return {...state, listSwitch : {...state.listSwitch,  [action.payload.box] : !state.listSwitch[box]}}
        }
    }
    
    // {id : 0, status : false},
    // {id : 1, status : false},
    // {id : 2, status : false},
    const [stateSwich, dispatchSwitch] = useReducer(reducer, {
        listSwitch : {}
    });

    useEffect(() => {
       console.log( stateSwich.listSwitch)   
    })
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