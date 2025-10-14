const Switch = ({active, box }) => {
    
    const spans = Array.from({length : 40}, (_, i) => {
        return  Math.random() * .25
    })
    // active[box].status
    return(
        <>
            {spans.map((delay, index) => (
                <span 
                className={`box-span-custom 
                    ${active.listSwitch[box] ? "transform translate-x-[60px]" : ""}   
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