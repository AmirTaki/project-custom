const Box = ({index}) => {
    return (
        <div 
            style={{
            }}
            className={`
             
                hue-rotate-${index*90}
                effectAnimationHover
                rotate-${index*90}
            `}>

        </div>
    )
}

export default Box;