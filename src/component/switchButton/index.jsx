import BoxSwitch from "./boxSwich"
 

const SwitchButton = () => {
    const boxSwitch = [0, 1, 2];

    return(
        <div className="flex flex-row fixed ">  
            <div className="bg-blue-500 w-10 h-[300px]"></div>
            <div className=" flex flex-col gap-7 relative
                border-2 border-amber-400 h-[300px] w-[300px] items-center justify-center 
            ">
                {boxSwitch.map((box) => (
                    <BoxSwitch key = {box} box = {box} />
                ))}
            </div>
        </div>
    )
}
export default SwitchButton;