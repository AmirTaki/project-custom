import BoxSwitch from "./boxSwich"
 

const SwitchButton = () => {
    const boxSwitch = [0, 1, 2];

    return(
        <div className="flex flex-row fixed   border-2 border-amber-400 rounded-4xl  right-0 ">  
           
            <div className="bg-blue-500 w-10 h-[260px] 
                before:content-[''] before:absolute before:w-[60px] before:h-[60px] before:bg-red-500 "></div>
           
            <div className=" flex flex-col gap-7 relative
             w-[200px] items-center justify-center 
            ">
                {boxSwitch.map((box) => (
                    <BoxSwitch key = {box} box = {box} />
                ))}
            </div>
        </div>
    )
}
export default SwitchButton;