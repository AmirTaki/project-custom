const SubmitButton = ({value}) => {
    return(
        // inputBox 
        <div className="relative w-full mt-[30px]">
            <input 
                type="submit" value = {value} 
                className="w-full py-[20px] px-[25px] outline-0 rounded-[10px] bg-[rgba(0,0,0,.25)]  border-1 border-[#000] text-white  uppercase tracking-[.1em] backdrop-blur-[10px] peer pointer-events-auto 
                    cursor-pointer! text-[1.1em]! font-[500]! duration-300! text-center! hover:bg-[#0f0] hover:text-[#222] hover:border-[1px] hover:border-transparent!
                "    
            />
        </div>
    )

}

export default SubmitButton;
