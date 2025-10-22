import "./styles.css"
const EnergyButton = () => {
    return(
        <div className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[200px] h-[60px] 
            text-center leading-[60px] 
            font-sans uppercase decoration-0
            tracking-[6px] text-[24px]
            text-[#309220] bg-[rgba(80,241,0,1)]
            shadow-[0_0_15px_rgba(90,241,0,1),0_0_25px_rgba(80,241,0,1)]
            transition-transform duration-500
            transform-gpu
            hover:scale-90   
            hover:animate-pulse-custom
        "
        >
            Energy
        </div>
    )
}
export default EnergyButton;