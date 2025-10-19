const Box = ({index}) => {
    return (
        <div 
            style={{
                filter : `hue-rotate(calc(${index} * 90deg))`,
                transform : `rotate(calc(${index} * 90deg)) `  
            }}
            className={`
                effectAnimationHover
            `}>

        </div>
    )
}

export default Box;