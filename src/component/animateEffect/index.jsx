const AnimateEffect = () => {
    return(
        // container
        <div
            style = {{WebkitBoxReflect : 'below 2px linear-gradient(transparent, #0004)' }}
            className="relative flex justify-center items-center w-[100%] gap-[40px] "
        >
            {/* box  */}
            <div 
            style={{
                "--i" : 1
            }}
            className={`
             
                hue-rotate-[calc(2*90)deg]
                effectAnimationHover
                rotate-[calc(2*90)deg]
            `}>

            </div>

        </div>
    )
}

export default AnimateEffect;