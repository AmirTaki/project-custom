const IconImage = ({item}) => {

    return(
            // {/* icon-image */}
            <div key = {item.id} className="icon-image    last:[&>.hover-image]:transition-none 
            last:[&:hover_.hover-image]:transition-none   last:[&:hover_.details]:delay-0!
            relative bg-white rounded-[50%] h-[70px] w-[70px] my-0 mx-[5px] shadow-[0_5px_10px_rgba(0,0,0,.25)]
            ">
                {/* icon */}
                <div className="icon">
                    <img src={item.image} alt=""  
                        className="absolute h-[95%] w-[95%] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 object-cover rounded-[50%] border-[3px] border-[#0397FF]"
                    />
                </div>
                {/* hover-image */}
                <div className="hover-image  ">
                    {/* img */}
                    <div className="img">
                        <img src={item.image} alt="" 
                            className="absolute w-full h-full object-cover border-[3px] border-white rounded-[25px]"
                        />
                    </div>
                    {/* content */}
                    <div className="absolute  w-full bottom-[-10px] left-0 py-0 px-[10px]
                        before:content before:absolute before:h-[20px] before:w-[20px] before:bg-white 
                        before:left-[50%] before:bottom-[1px] before:transform before:-translate-x-1/2 
                        before:rotate-45 before:-z-1
                    ">
                        {/* details */}
                        <div className="details relative bg-white p-[10px] rounded-[12px] text-center opacity-0 transform translate-y-[10px]
                            before:content before:absolute before:h-[20px] before:w-[20px] before:bg-white before:left-[50%] 
                            before:-bottom-[10px] before:-translate-x-1/2 before:rotate-45 before:-z-1
                        ">
                            {/* name */}
                            <div className="text-[20px] font-[500]">{item.name}</div>
                            {/* job */}
                            <div className="text-[17px] text-[#0396FF] m-[-3px_0_5px_0]">{item.job}</div>
                        </div>

                    </div>
                </div>
            </div>

        )

    
}
export default IconImage