const GlowingCorner = () => {
    return( 
        // container
        <div className="relative flex items-center justify-center min-h-[100vh] gap-[50px] bg-[#222] flex-wrap">
            {/* card */}
            <div 
                style={{left : "10px", top : '10px', background : "linear-gradient(#0f0, blue, red)"}}
                className="relative w-[320px] h-[400px] bg-[rgba(45,45,45,1)] rounded-[20px] overflow-hidden
                before:content-[''] before:absolute before:translate-x-[-115%] before:translate-y-[-100%]
                before:w-[360px] before:h-[360px] before:rounded-[102%] before:opacity-0 before:transition-[left 0s_top 0s] duration-500
            "></div>
        </div>
    )
}

export default GlowingCorner;