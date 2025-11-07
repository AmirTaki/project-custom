const ShareButton = () => {
    return(
        // main-box
        <div className="absolute left-[50%] top-[60%] transform -translate-x-1/2 -translate-y-1/2">
            {/* check */}
            <input type="checkbox" />
            {/*  */}
            <label htmlFor="check"
                className="reltaive bg-white h-[50px] w-[150px] rounded-[35px] block text-center leading-[50px]
                    text-[22px] font-[500] uppercase text-[#0984ac] cursor-pointer shadow-[0_0_4px_rgba(0,0,0,.5)] 
                    transition-all duration-300 ease-in
                "
            >Share</label>
        </div>
    )
}
export default ShareButton;