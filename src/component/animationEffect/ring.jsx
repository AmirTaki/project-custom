const Ring = ({ring}) => {
    return(
        
        <div 
        style = {{
            '--ring-color' : `${ring.color}`,
            '--ring-content' : `"${ring.content}"`,
            '--ring-rotate' : `${ring.rotate}deg`,
            
        }}

        className={`
            ${ring.animation}
            relative w-[150px] 
            h-[150px] border-4 border-transparent border-t-4 
            border-t-[var(--ring-color)] rounded-[50%] m-[-30px]
            before:content-[var(--ring-content)] 
            before:absolute 
            before:font-[fontAwesome] 
            before:text-[var(--ring-color)] 
            before:top-[${ring.top}] 
            before:right-[${ring.right}] 
            before:left-[${ring.left}]
            before:bottom-[${ring.bottom}]
            before:rotate-[var(--ring-rotate)] 
            before:text-[2em] 
        `}>
        </div>
    )
}

export default Ring