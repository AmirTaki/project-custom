const SelectMenu = () => {
    return(
        // select menu
        <div className="w-[300px] cursor-pointer relative">
            {/* select */}
            <div className="bg-[#201e1e] p-[20px] text-white font-[500] rounded-[6px] flex justify-between items-center">
                <span > Select Languge </span>
                <i className="fas fa-angle-down"></i>
            </div>
        </div>
    )
}

export default SelectMenu;