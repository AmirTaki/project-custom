const ColumnFooter = ({}) => {
    return(
           
        <div className="p-[10px] basis-[15%]">
            {/* col h3 */}
            <h3 className="w-fit mb-[40px] relative">
                {title} 
                {/* underline */}
                <div className="w-[100%] h-[5px] bg-[#767676] absolute top-[25px] left-0  rounded-[3px] overflow-hidden">
                    <span className="w-[15px] h-[100%] bg-[#fff] rounded-[3px] absolute top-0 left-[10px] animate-[movingFooter_2s_linear_infinite]"></span>
                </div>
            </h3>
            {/* col p */}
            <p>ITPL Road Whitefield, Bangalore Karnataka, PIN 560066, Tehran</p>
            <p></p>
            <p className="w-fit border-b-1 border-b-[#ccc] my-[20px]">email@gamil.com</p>
            <h4>+98-0123456789</h4>
        </div>
    )
}

export default ColumnFooter;