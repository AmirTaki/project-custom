const InputBox = ({input, type, id}) => {
    return(
        <div className="relative w-full mt-[30px]">

            <input type={type}   id = {id}  onChange={(e) => {e.target.value}} 
                className={`  w-full py-[20px] px-[25px] outline-0 rounded-[10px] bg-[rgba(0,0,0,.25)]  border-1 border-[#000] text-white text-[1em] uppercase tracking-[.1em] backdrop-blur-[10px] peer pointer-events-auto  `}
            />
        
            <label 
                htmlFor={id}
                className="absolute text-[1em] left-0 py-[20px] px-[25px] text-white uppercase rounded-[4px] duration-300 pointer-events-none tracking-[.2em]
                    peer-focus:translate-x-[15px] peer-focus:-translate-y-[10px] peer-focus:text-[.75em]! peer-focus:bg-white peer-focus:text-[#222]
                    peer-focus:py-[2px] peer-focus:px-[7px] peer-focus:border-[1px] peer-focus:border-black  peer-focus:tracking-[.1em] 
                    peer-valid:translate-x-[15px] peer-valid:-translate-y-[10px] peer-valid:text-[.75em]! peer-valid:bg-white peer-valid:text-[#222]
                    peer-valid:py-[2px] peer-valid:px-[7px] peer-valid:border-[1px] peer-valid:border-black peer-valid:tracking-[.1em] 
            ">      
                {input}
            </label>
        </div>
    )
}
export default InputBox