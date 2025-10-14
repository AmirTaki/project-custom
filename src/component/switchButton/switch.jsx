const Switch = ({active, box}) => {
    const spans = Array.from({length : 40}, (_, i) => {
        return  Math.random() * .25
    })

    return(
        <>
            {spans.map((delay, index) => (
                <span 
                className={`box-span-custom 
                    ${active[box].status ? "transform translate-x-[60px]" : ""}   
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