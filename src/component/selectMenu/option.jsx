const OptionalLanguge = ({item, dispatch, setOpen}) => {
    return (
        <div
            className={`${item.status   ? "text-[#00a8ff]" : "text-black"}
                px-8 py-3 font-[500]  text-[14px] transition-all duration-[300ms] ease-in-out 
                hover:text-[#00a8ff] 
            `}
            onClick={() => {dispatch({type : "selected", payload : {data : item.id}}) ; setOpen(false)}} 
        >
            {item.title}
        </div>
    )
}

export default OptionalLanguge