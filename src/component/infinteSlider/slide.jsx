const Slide = ({data, isActive}) => {
    return (
        <div className={`relative w-full h-[400px] md:h-[500px] shrink-0  rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 select-none
            ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-60'}
            `}></div>
    )
}
export default Slide