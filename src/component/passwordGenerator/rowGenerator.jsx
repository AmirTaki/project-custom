const RowGenerator = ({row, dispatch}) => {
    return(
        /* row */ 
        <div className="flex items-center my-[8px]">
            <label htmlFor={row.id} className="basis-full text-[18px] ">{row.text}</label>
            <input type={row.type}  className="w-[20px] h-[20px]" id = {row.id}
                onChange={(e) => {dispatch({type : "handlerCheckBox", payload : {checked : e.target.checked}})}}
            />
        </div>
    )
}
export default RowGenerator;