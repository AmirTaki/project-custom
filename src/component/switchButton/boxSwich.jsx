import Switch from "./switch"

const BoxSwitch = ({box}) => {

  
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