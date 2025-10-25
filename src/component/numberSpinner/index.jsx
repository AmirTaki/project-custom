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
                    <span></span>
                </div>

            </div>
        </div>
    )
}
export default NumberSpinner