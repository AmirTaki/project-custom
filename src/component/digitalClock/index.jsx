const DigitalClock = () => {
    return (
        // time
        <div 
            className="flex gap-40 text-white "
        >
            {/* circle */}
            <div className="relative w-[150px] h-[150px] bg-red-400 flex items-center justify-center">
                {/* dots */}
                <div className="
                    absolute w-[100%] h-[100%] z-10 flex justify-center items-center bg-amber-400
                    before:content-[''] before:top-[-3px] before:absolute before:w-[15px] before:h-[15px] before:bg-[#ff2972]
                    before:rounded-[50%] before:shadow-[0_0_20px_bg-[#ff2972],0_0_60px_bg-[#ff2972]]
                "></div>
            </div>


        </div>
    )
}

export default DigitalClock