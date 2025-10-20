const ItemOption = ({option, dispatch, setOpen}) => {
    return(
          
        <div
            onClick={() => {dispatch({type : "selected", payload : {data : option.id}}) ; setOpen(false)}} 
            style={{'--text-color' : `${option.status ? 'blue'  : 'black'}`}}
            className="
                px-8 py-3 font-[500]  text-[14px] transition-all duration-[300ms] ease-in-out 
                hover:text-[#00a8ff] text-[var(--text-color)]!
            "
        >
            {option.title}
        </div>
    )
}

export default ItemOption;