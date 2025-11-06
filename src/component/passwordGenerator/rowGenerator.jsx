const RowGenerator = ({type, id, text}) => {
    return(
        /* row */ 
        <div className="flex items-center my-[8px]">
            <label htmlFor={id} className="basis-full text-[18px] ">{text}</label>
            <input type={type}  className="w-[20px] h-[20px]" id = {id}/>
        </div>
    )
}
export default RowGenerator;