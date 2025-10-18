const Ring = ({color, icon, animation, start}) => {
    return(
        
        <div 
        style={{'--Color' : color , '--Icon' : icon, '--Animation' : animation}}
        className={`
            relative w-[150px] h-[150px] border-4 border-transparent border-t-4 border-t-[#var(--Color)] rounded-[50%] m-[-30px]
           var(--Animation)
            before:content-['var(--Icon)'] before:absolute before:font-[fontAwesome] before:text-[#var(--Color)] 
            before:top-[10px] before:-right-3 before:rotate-90 before:text-[2em]
        `}>
        </div>
    )
}

export default Ring