
const SwitchButton = () => {
    const spans = Array.from({length : 40}, (_, i) => {
        const randomDelay = Math.random() * .25
    
    })
    
    
    return(
        <div className="relative flex flex-col gap-30">
            <div className="box-custom-magic"></div>
            <div className="box-custom-magic"></div>
            <div className="box-custom-magic">
                {spans.map((i) => (
                    <div className="text-white bg-red-300 w-1 h-1">{i}</div>
                ))}

            </div>
        </div>
    )
}


export default SwitchButton;