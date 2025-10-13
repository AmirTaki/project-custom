
const SwitchButton = () => {
    const spans = Array.from({length : 40}, (_, i) => {
        return  Math.random() * .25
    })


    return(
        <div className="relative flex flex-col gap-30">
            <div className="box-custom-magic"></div>
            <div className="box-custom-magic"></div>
            <div className="box-custom-magic">
                {spans.map((i, index) => (
                    <span 
                        key = {index}
                        style={{top : `${i * 1}px`, transitionDelay : `${3}s`}}
                    ></span>
                ))}

            </div>
        </div>
    )
}


export default SwitchButton;