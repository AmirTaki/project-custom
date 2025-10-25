import "./styles.css"
const GoogleLoader = () => {
    return (
        // wrapper
        <div className="flex gap-10">
            {/* dot */}
            <div 
                style={{'--color-bg':'#008ae6', '--delay-time' : 0}}
                className="h-[20px] w-[20px] rounded-[50%] bg-[var(--color-bg)] shadow-[0_5px_10px_rgba(0,0,0,.1)]
                animate-[loaderGoogle_1s_ease-in-out_infinite_alternate] delay-[var(--delay-time)]
            "></div>
        </div>
    )
}


export default GoogleLoader;