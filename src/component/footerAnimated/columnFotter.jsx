const ColumnFooter = ({title, children}) => {
    return(
           
        <div className="p-[10px] basis-[15%] max-md:basis-[100%]">
            {/* col h3 */}
            <h3 className="w-fit mb-[40px] relative text-[16px] font-bold">
                {title} 
                {/* underline */}
                <div className="w-[100%] h-[5px] bg-[#767676] absolute top-[25px] left-0  rounded-[3px] overflow-hidden">
                    <span className="w-[15px] h-[100%] bg-[#fff] rounded-[3px] absolute top-0 left-[10px] animate-[movingFooter_2s_linear_infinite]"></span>
                </div>
            </h3>
            {/* col p */}
            {children}
       
        </div>
    )
}

export default ColumnFooter;