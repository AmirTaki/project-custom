const AnimateEffect = () => {
    return(
        // container
        <div className="relative flex justify-center items-center w-[100%] gap-[40px] 
        [-webkit-box-reflect:below_2px_linear-gradient(transparent,#0004)]
            
        ">
            {/* box  */}
            <div 
            className={`
                relative w-[200px] h-[200px] bg-size-[40px_40px] hue-rotate-[calc(1*90)deg]
                rotate-[calc(1*90)deg]
                
            `}>

            </div>

        </div>
    )
}

export default AnimateEffect;