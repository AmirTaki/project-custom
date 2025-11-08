const PureRadio = () => {
    return(
        // container
        <div className="flex justify-center items-center">
            {/* radio-title-group */}
            <div className="flex flex-wrap justify-center">
                {/* input-container */}
                <div className="relative h-[7rem] w-[7rem] m-[.5rem]">
                    <input type="radio"  className="absolute w-full h-full m-0 cursor-pointer z-20 opacity-0"/>
                    {/* radio-title */}
                    <div className="flex flex-col items-center justify-center h-full border-2 border-[#07afd9] rounded-[8px] transition-all duration-300 ease-in-out">
                        <ion-icon name="walk" className = "text-[#07afd9] text-[3rem]"></ion-icon>
                        <label htmlFor="walk" className="text-[#07afd9] text-[.8rem] font-[600] uppercase tracking-[1px]">Walk</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PureRadio;