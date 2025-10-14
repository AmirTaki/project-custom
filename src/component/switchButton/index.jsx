import BoxSwitch from "./boxSwich"
 

const SwitchButton = () => {
    const boxSwitch = [0, 1, 2];

    return(
        <div className="relative flex flex-col gap-7">
            {boxSwitch.map((box) => (
                <BoxSwitch key = {box} box = {box} />
            ))}
        </div>
    )
}
export default SwitchButton;