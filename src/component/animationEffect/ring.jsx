const Ring = ({color, icon, animation}) => {
    return(
        
        <div 
        style = {{
            '--bord-color' : `#${color}`,
            '--bord-icon' : `"\\${icon}"`,
            
        }}

        className={`
            ${animation}
            relative w-[150px] h-[150px] border-4 border-transparent border-t-4 border-t-[var(--bord-color)] rounded-[50%] m-[-30px]
            before:content-[var(--bord-icon)] before:absolute before:font-[fontAwesome] before:text-[var(--bord-color)] 
            before:top-[10px] before:-right-3 before:rotate-90 before:text-[2em] 
        `}>
        </div>
    )
}

export default Ring