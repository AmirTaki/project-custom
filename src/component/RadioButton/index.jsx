const PureRadio = () => {
    return(
        // container
        <div className="flex justify-center items-center">
            {/* radio-title-group */}
            <div className="flex flex-wrap justify-center">
                {/* input-container */}
                <div className="relative h-[7rem] w-[7rem] m-[.5rem]">
                    <input type="radio"  className="absolute w-full h-full m-0 cursor-pointer z-20 opacity-0"/>
                </div>
            </div>
        </div>
    )
}

export default PureRadio;