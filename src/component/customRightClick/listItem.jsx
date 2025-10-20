const ListItem = () => {
    return(
        <li 
            style={{animation : "showMenu .5s ease-in-out 1 forwards", animationDelay : ".2s"}}
            className={`p-[20px] bg-[#525F6C] border-1 border-[#5d6a77] text-white duration-500 
                hover:bg-[#72DE73] hover:translate-x-0 hover:translate-y-[-10px] hover:shadow-[0_10px_50px_#636363]    
                opacity-0    
            `}
        >
                <i className="fa-solid fa-house mr-[15px]"></i> Home
        </li>
              
    )
}

export default ListItem;