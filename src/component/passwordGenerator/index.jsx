const PasswordGenerator = () => {
    return(
        // container
        <div className="border-[.5px] border-white text-gray-400 rounded-[10px] py-[28px] px-[32px] flex flex-col bg-transparent shadow-[8px_8px_4px_#909090,8px_8px_0_#575757]">
            <h1 className="text-[1.4em] mx-[8px]">
                Password Generator
            </h1>
            {/* inputBox */}
            <div className="relative">
                {/* passbox */}
                <input type="text" className="bg-white border-0 outline-0 p-[10px] w-[300px] rounded-[4px] text-[20px] cursor-pointer z-20" disabled />
            </div>
        </div>
    )
}

export default PasswordGenerator;