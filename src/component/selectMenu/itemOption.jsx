const ItemOption = ({option}) => {
    return(
          
        <div 
            className={` ${option.status ? "text-[#00a8ff]" : "text-black"}
                px-8 py-3 font-[500]  text-[14px] transition-all duration-[300ms] ease-in-out 
                hover:text-[#00a8ff]    
            `}
        >
            {option.title}
        </div>
    )
}

export default ItemOption;