const FormFooter = () => {
    return (
        <form className="pb-[15px] flex items-center justify-between border-b-1 border-b-[#ccc] mb-[50px]">
            <i className="bi bi-envelope text-[18px] mr-[10px]"></i>
            <input type="email" placeholder="Enter your email id" required 
                className="w-[130%]! bg-transparent text-[#ccc] border-0 outline-0"
            />
            <button type="submit" className="bg-transparent border-0 outline-0 cursor-pointer">
                <i className="bi bi-arrow-right  text-[16px] text-[#ccc]"></i>
            </button>
        </form>
    )
}

export default FormFooter;