const Slide = ({data, isActive}) => {
    return (
        <div 
            className={`relative w-full h-[400px] md:h-[500px] shrink-0  rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 select-none
                ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-60'}`}
            draggable = {false}    
        >
            <img 
                src = {data.image}
                alt = {data.title}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                loading="lazy"    
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${data.color} opacity-80 mix-blend-multiply`}></div>
        </div>
    )
}
export default Slide