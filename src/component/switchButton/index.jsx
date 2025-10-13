
const SwitchButton = () => {
    const spans = Array.from({length : 40}, (_, i) => {
        const randomDelay = Math.random() * .25
    
    })
    
    console.log(spans)
    return(
        <div className="relative flex flex-col gap-30">
            <div className="box-custom-magic"></div>
            <div className="box-custom-magic"></div>
            <div className="box-custom-magic">
                {spans.map((i) => (
                    <span 
                        key = {i}
                        style={{top : `${i * 1}px`, transitionDelay : `${3}s`}}
                    ></span>
                ))}

            </div>
        </div>
    )
}


export default SwitchButton;