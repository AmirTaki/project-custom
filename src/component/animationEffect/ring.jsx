const Ring = ({color, icon}) => {
    return(
        <div className={`
           relative w-[150px] h-[150px] border-4 border-transparent border-t-4 border-t-[${color}] rounded-[50%] m-[-30px]
            glowSkyBlueEffect

            before:content-[${icon}] before:absolute before:font-[fontAwesome] before:text-[${color}] 
            before:top-[10px] before:-right-3 before:rotate-90 before:text-[2em]
        `}>
        </div>
    )
}

export default Ring