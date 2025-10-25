import "./styles.css"
const GoogleLoader = () => {
    return (
        // wrapper
        <div className="flex gap-10">
            {/* dot */}
            <div 
                className="h-[20px] w-[20px] rounded-[50%] bg-[#008ae6] shadow-[0_5px_10px_rgba(0,0,0,.1)]
                animate-[loaderGoogle_1s_ease-in-out_infinite_alternate]
            "></div>
        </div>
    )
}


export default GoogleLoader;