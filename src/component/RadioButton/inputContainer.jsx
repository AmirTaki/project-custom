const InputContainer = ({item, dispatch}) => {
    return(
        //  input-container
        <div
            onClick={() => {dispatch({type : 'handlerClick', payload : {icon : item.icon}})}}
            className="relative h-[7rem] w-[7rem] m-[.5rem] hover:shadow-[0_0_12px_#07afd9]! rounded-[8px] duration-300 cursor-pointer!">
            {/* radio-title */}
            <div 
                className={`${item.flag ? "bg-[#07afd9] shadow-[0_0_12px_#07afd9] scale-110" : "bg-transparent"}
                flex flex-col items-center justify-center h-full border-2 border-[#07afd9]   rounded-[8px] transition-all duration-300! ease-in-out
                `}
            >
                <ion-icon name={item.icon} style = {{color : `${item.flag ? "white" : "#07afd9"}`}} className = {`text-[3rem]`}></ion-icon>
                <label htmlFor={item.name} className={`${item.flag ? "text-white" : "text-[#07afd9] "} text-[.8rem] font-[600] uppercase tracking-[1px]`}>{item.name}</label>
            </div>
        </div>
    )
}
export default InputContainer;