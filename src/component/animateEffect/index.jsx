const AnimateEffect = () => {
    return(
        // container
        <div
            style = {{WebkitBoxReflect : 'below 2px linear-gradient(transparent, #0004)' }}
            className="relative flex justify-center items-center w-[100%] gap-[40px] "
        >
            {/* box  */}
            <div 
            style={{background : "linear-gradient(45deg, #00f376 10%, transparent 10%, transparent 50%, #00f376 50%, #00f376 60%, transparent 60%, transparent 100%),  linear-gradient(135deg, #00f37666 10%, transparent 10%, transparent 50%, #00f37666 50%, #00f37666 60%, transparent 60%, transparent 100%)"}}
            className={`
                relative w-[200px] h-[200px] bg-size-[40px_40px] hue-rotate-[calc(1*90)deg]
                rotate-[calc(1*90)deg] transform 
                
            `}>

            </div>

        </div>
    )
}

export default AnimateEffect;