const GlowingCorner = () => {
    return( 
        // container
        <div className="relative flex items-center justify-center min-h-[100vh] gap-[50px] bg-[#222] flex-wrap">
            {/* card */}
            <div className="relative w-[320px] h-[400px] bg-[rgba(45,45,45,1)] rounded-[20px] overflow-hidden
                before:content-[''] before:absolute before:translate-x-[-115%] before:translate-y-[-100%]
            "></div>
        </div>
    )
}

export default GlowingCorner;