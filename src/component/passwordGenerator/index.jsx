import RowGenerator from "./rowGenerator";

const PasswordGenerator = () => {
    return(
        // container
        <div className="border-[.5px] border-white text-gray-400 rounded-[10px] py-[28px] px-[32px] flex flex-col bg-transparent shadow-[8px_8px_4px_#909090,8px_8px_0_#575757]">
            <h1 className="text-[1.4em] my-[8px]">
                Password Generator
            </h1>
            {/* inputBox */}
            <div className="relative">
                {/* passbox */}
                <input type="text" className="bg-[#909090] border-0 outline-0 p-[10px] w-[300px] rounded-[4px] text-[20px] my-[8px] text-ellipsis " disabled />
                <span 
                    className="material-symbols-outlined absolute top-[16px] right-[6px] text-black text-[28px] cursor-pointer z-20" 
                    id = "copyIcon"
                >
                    content_copy
                </span>
            </div>
            {/* input range */}
            <input type="range" min = "1" max = '30'  />

            {/* row */}
            <div className="flex my-[8px]">
                <p className="basis-full text-[18px]">Password Length</p>
                <span>20</span>
            </div>

            <RowGenerator type = 'checkbox' id = "lowercase" text = "Include Lowercase Letters (a-z)"/>
            <RowGenerator type = 'checkbox' id = "uppercase" text = "Include Uppercase Letters (A-Z)"/>
            <RowGenerator type = 'checkbox' id = "numbers" text = "Include Numbers (0-9)"/>
        
    
        </div>
    )
}

export default PasswordGenerator;