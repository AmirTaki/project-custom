const LoadingBorder = () => {
    return(
        // container
        <div className="flex items-center justify-center relative h-[450px] w-[350px] rounded-[16px] bg-white overflow-hidden ">
            {/* overlay */}
            <span
                className="flex items-center justify-center"
            >0%</span>
        </div>
    )
}
export default LoadingBorder;