const NumberSpinner = () => {
    return (
        // box
        <div className="w-[80px] h-[500px] flex justify-center items-center bg-[#333] rounded-[50px] shadow-[0_5px_50px_rgba(0,0,0,.5)]">
            {/* spinner */}
            <div className="relative flex items-center justify-center flex-col w-[40px] select-none">
                
                {/* output */}
                <span>0</span>

                {/* progress */}
                <div className="relative w-[10px] h-[300px] bg-[#222] rounded-[20px] flex flex-col-reverse">
                    {/* meter */}
                    <span 
                        style={{filter : "drop-shadow(0 0 2.5px #0f0) drop-shadow(0 0 10px #0f0f)"}}
                        className="absolute w-[100%] h-7 bg-[#0f0] rounded-[20px] duration-500 transition-all  "
                        ></span>
                </div>

            </div>
        </div>
    )
}
export default NumberSpinner