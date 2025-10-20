const ItemOption = ({item, dispatch, setOpen}) => {
    return(
          
        <div
            style={{'--text-color' : `${item.status ? 'blue'  : 'black'}`}}
            className="
            px-8 py-3 font-[500]  text-[14px] transition-all duration-[300ms] ease-in-out 
            hover:text-[#00a8ff] !text-[var(--text-color)]
            "
            onClick={() => {dispatch({type : "selected", payload : {data : item.id}}) ; setOpen(false)}} 
        >
            {item.title}
        </div>
    )
}

export default ItemOption;