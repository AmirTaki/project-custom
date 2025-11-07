const ShareButton = () => {
    return(
        // main-box
        <div className="absolute left-[50%] top-[60%] transform -translate-x-1/2 -translate-y-1/2">
            {/* check */}
            <input type="checkbox" />
            {/*  */}
            <label htmlFor="check"
                className="reltaive bg-white h-[50px] w-[50px]"
            >Share</label>
        </div>
    )
}
export default ShareButton;