import BoxSwitch from "./boxSwich"

const SwitchButton = () => {
    const boxSwitch = [1, 2, 3];

    return(
        <div className="relative flex flex-col gap-7">
            {boxSwitch.map((box) => (
                <div className="">{box}</div>
            ))}
        </div>
    )
}
export default SwitchButton;