import { useState } from "react";

const CustomRightClick = () => {
    const [change, setChange] = useState(false)
    return(
        <>
        {/* menu */}
        <div className="fixed w-[200px] bg-red-500 h-[500px] top-[10%] left-[50%]">
            {/* ul */}
            <ul className="p-0 m-0 list-none">
                <li className={`p-[20px] bg-[#525F6C] border-1 border-[#5d6a77] text-white duration-500 
                    hover:bg-[#72DE73] hover:translate-x-0 hover:translate-y-[-10px] hover:shadow-[0_10px_50px_#636363]
                     ${change ? 'animate-[showMenu_.5s_ease-in-out_1_forwards]' : "opacity-0"}  `}>
                    <i className="fa-solid fa-house mr-[15px]"></i> Home
                </li>
            </ul>

        </div>
            <button className="text-white" onClick={() => setChange(!change)}>click</button>
        </>
 
    )
}

export default CustomRightClick;