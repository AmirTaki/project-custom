const Ring = ({ring}) => {
    return(
        
        <div 
        style = {{
            '--ring-color' : `${ring.color}`,
            '--ring-content' : `"${ring.content}"`,
            '--ring-rotate' : `${ring.rotate}deg`,
            '--ring-top' : `${ring.top}`,
            '--ring-right' : `${ring.right}`,
            '--ring-left' : `${ring.left}`,
            '--ring-bottom' : `${ring.bottom}`
            
        }}

        className={`
            ${ring.animation}
            relative w-[150px] 
            h-[150px] border-6 border-transparent border-t-6 
            border-t-[var(--ring-color)] rounded-[50%] m-[-50px]
            before:content-[var(--ring-content)] 
            before:absolute 
            before:font-[fontAwesome] 
            before:text-[var(--ring-color)] 
            before:top-[var(--ring-top)] 
            before:right-[var(--ring-right)] 
            before:left-[var(--ring-left)]
            before:bottom-[var(--ring-bottom)]
            before:rotate-[var(--ring-rotate)] 
            before:text-[2em] 
        `}>
        </div>
    )
}

export default Ring