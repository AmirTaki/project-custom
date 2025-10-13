
const BoxSwitch = () => {
    
    const [active, setActive] = useState(false)
    const handleBox = () => {
        setActive((pre) => !pre)
    }

    return(
        <div className="box-custom-magic"
            onClick={handleBox}
        >

        </div>
    )
}

export default BoxSwitch