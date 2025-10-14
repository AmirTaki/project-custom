const Switch = ({active}) => {
    const spans = Array.from({length : 40}, (_, i) => {
        return  Math.random() * .25
    })

    // ${active.button[index] ? "transform translate-x-[60px]" : ""}
    return(
        <>
            {spans.map((delay, index) => (
                <span 
                    className={`box-span-custom 
                        `
                    }
                    key = {index}
                    style={{top : `${index * 1}px`, transitionDelay : `${delay}s`}}
                ></span>
            ))}
        </>
    )
}

export default Switch;