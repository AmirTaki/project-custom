const GlowingCorner = () => {
    return( 
        // container
        <div className="relative flex items-center justify-center min-h-[100vh] gap-[50px] bg-[#222] flex-wrap">
            {/* card */}
            <div 
                style={{'--left-position' : "20px", '--top-position' : '20px', "--color-bg" : "#0f0"}}
                className="relative w-[320px] h-[400px] bg-[rgba(45,45,45,1)] rounded-[20px] overflow-hidden
                before:content-[''] before:absolute before:-translate-x-1/2 before:-translate-y-1/2
                before:left-[10px] before:top-[20px] before:bg-[blue]
                before:w-[360px] before:h-[360px] before:rounded-[102%] before:opacity-100 before:transition-[left 0s_top 0s] duration-500
                
            "></div>
        </div>
    )
}

export default GlowingCorner;