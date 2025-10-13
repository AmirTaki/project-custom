const SwitchButton = () => {
    
    
    const spans = Array.from({length : 40}, (_, i))
    
    return(
        <div className="relative flex flex-col gap-30">
            <div className="box-custom-magic">{spans}</div>
            <div className="box-custom-magic">{spans}</div>
            <div className="box-custom-magic">{spans}</div>
        </div>
    )
}


export default SwitchButton;