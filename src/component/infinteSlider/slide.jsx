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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 right-0 p-8 text-right w-full transform transition-transform duration-500">
                <h2 className={`text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    transition-all duration-500 delay-100
                `}>
                    {data.title}
                </h2>
            </div>
        </div>
    )
}
export default Slide