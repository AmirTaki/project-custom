const Ring = ({ring}) => {
    return(
        
        <div 
        style = {{
            // '--bord-color' : `#${color}`,
            // '--bord-icon' : `"\\${icon}"`,
            
        }}

        className={`
            ${ring.animation}
            relative w-[150px] 
            h-[150px] border-4 border-transparent border-t-4 border-t-[#${ring.color}] rounded-[50%] m-[-30px]
            before:content-['${ring.content}'] 
            before:absolute 
            before:font-[fontAwesome] 
            before:text-[#${ring.color}] 
            before:top-[${ring.top}] 
            before:right-[${ring.right}] 
            before:left-[${ring.left}]
            before:bottom-[${ring.bottom}]
            before:rotate-[${ring.rotate}] 
            before:text-[2em] 
        `}>
        </div>
    )
}

export default Ring