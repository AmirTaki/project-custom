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
                    before:rounded-[50%] before:shadow-[0_0_20px_#ff2972,0_0_60px_#ff2972]
                ">
                    {/* svg */}
                    <svg className="relative w-[150px] h-[150px] rotate-[270deg]">
                        <circle 
                            cx = '70' cy = "70" r = "70"
                            className="w-[100%] h-[100%] fill-transparent stroke-[#191919] stroke-4 translate-x-[5px] translate-y-[5px]"
                        ></circle>
                       
                        <circle cx = '70' cy = "70" r = "70"
                        ></circle>
                    </svg>

                </div>

            </div>


        </div>
    )
}

export default DigitalClock