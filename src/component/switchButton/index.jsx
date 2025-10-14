import { useState } from "react";
import BoxSwitch from "./boxSwich"
 

const SwitchButton = () => {
    const [menu, setMenu] = useState(false)
    const boxSwitch = [0, 1, 2];

    return(
        <div 
            className={`${menu ? " right-0  shadow-[5px_5px_50px_#7ef0ff] " : "-right-50 duration-300!  "}  duration-400! flex flex-row  items-center justify-center  fixed w-[200px] h-[300px]  border-2 border-[#7ef0ff]  rounded-4xl z-100!  `}
        >  
            <div className={` 
                ${menu ? " before:left-[1%] " : " before:left-[-9%] "}               
                before:content-[''] before:absolute before:w-[30px] before:h-[40px] before:bg-transparent before:border-2 before:border-[#7ef0ff]
                before:top-[45%]!  before:rounded-full before:cursor-pointer before:z-4 duration-400!`}
                onClick={() => {setMenu((pre) => (!pre))}}
            >
                <i className={`
                    ${menu ? "rotate-180 left-2  top-34.5" : " -left-4  top-34"}
                    bi bi-caret-left-fill text-[#7ef0ff] absolute  text-2xl z-5! cursor-pointer duration-400!`}    
                ></i>   
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