const ItemOption = ({option, dispatch}) => {
    return(
          
        <div
            onClick={() => {dispatch({type : "selected", payload : {data : option.id}})}} 
            style={{color : `${option.status ? '#00a8ff'  : 'black'}`}}
            className={` 
                px-8 py-3 font-[500]  text-[14px] transition-all duration-[300ms] ease-in-out 
                hover:text-[#00a8ff]! 
            `}
        >
            {option.title}
        </div>
    )
}

export default ItemOption;