import Switch from "./switch"

const BoxSwitch = () => {
    
    
  
    const [active, setActive] = useState(false)
    
    const handleBox = () => {
        setActive((pre) => !pre)
    }

    return(
        <div className="box-custom-magic"
            onClick={handleBox}
        >
            <Switch />
        </div>
    )
}

export default BoxSwitch