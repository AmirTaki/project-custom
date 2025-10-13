
const BoxSwitch = () => {
    
    
    const spans = Array.from({length : 40}, (_, i) => {
        return  Math.random() * .25
    })

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