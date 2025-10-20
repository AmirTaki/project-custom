const LoadingAnimation = () => {
    return (
        // center
        <div className=" w-20 h-20 relative  ">
            {/* circle  */}
            <div className="
                absolute w-[33px] h-[33px] bg-[#262626]
                rounded-[50%]
                shadow-[0_35px_35px_rgba(0,0,0,0.25)]
            "> </div>
        </div>
    )
}

export default LoadingAnimation;