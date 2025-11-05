const LoadingBorder = () => {
    return(
        // container
        <div className="flex items-center justify-center relative h-[450px] w-[350px] rounded-[16px] bg-white overflow-hidden
            before:content before:absolute before:h-[650px] before:w-[650px] before:bg-amber-400
        ">
            {/* overlay */}
            <span
                className="flex items-center justify-center"
            >0%</span>
        </div>
    )
}
export default LoadingBorder;