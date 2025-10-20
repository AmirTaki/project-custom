const CustomRightClick = () => {
    return(
        // menu
        <div className="fixed w-[200px] bg-red-500 h-[500px] top-[10%] left-[50%]">
            {/* ul */}
            <ul className="p-0 m-0 list-none">
                <li>
                    <i className="fa-solid fa-house"></i> Home
                </li>
            </ul>
        </div>
    )
}

export default CustomRightClick;