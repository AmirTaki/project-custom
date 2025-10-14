import BoxSwitch from "./boxSwich"
 

const SwitchButton = () => {
    const boxSwitch = [0, 1, 2];

    return(
        <div className="flex flex-row  items-center justify-center  fixed w-[200px] h-[300px]  border-2 border-amber-400 rounded-4xl  right-0 ">  
           
            <div className="
                before:content-[''] before:absolute before:w-[40px] before:h-[40px] before:bg-red-500 
                before:top-[45%]!  before:left-[-10%]  before:rounded-full before:cursor-pointer
                
                "
            >
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