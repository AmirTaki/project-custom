import { useState } from "react";
import BoxSwitch from "./boxSwich"
 

const SwitchButton = () => {
    const [menu, setMenu] = useState(false)
    const boxSwitch = [0, 1, 2];

    return(
        <div 
            className={`${menu ? " right-0 duration-300!" : "-right-50 duration-300!"} flex flex-row  items-center justify-center  fixed w-[200px] h-[300px]  border-2 border-[#7ef0ff]  rounded-4xl  shadow-[5px_5px_50px_#7ef0ff] `}
        >  
           
            <div className={`                
                before:content-[''] before:absolute before:w-[40px] before:h-[40px] before:bg-gray-300
                before:top-[45%]!  before:left-[-10%]  before:rounded-full before:cursor-pointer before:z-40`}
                onClick={() => {setMenu((pre) => (!pre))}}
            >
                <i className="bi bi-caret-left"></i>
            </div>
           
            <div className=" flex flex-col gap-7 relative
             w-[200px]  items-center justify-center 
            ">
                {boxSwitch.map((box) => (
                    <BoxSwitch key = {box} box = {box} />
                ))}
            </div>
        </div>
    )
}
export default SwitchButton;