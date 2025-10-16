const DigitalClock = () => {
    return (
        // time
        <div 
            className="flex gap-40 text-white "
        >
            {/* circle */}
            <div className="relative w-[150px] h-[150px] bg-red-400 flex items-center justify-center">
                {/* dots */}
                <div className="absolute w-[100%] h-[100%] z-10 flex justify-center items-center bg-amber-400"></div>
            </div>


        </div>
    )
}

export default DigitalClock