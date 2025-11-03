const IconImage = ({item}) => {

    return(
            // {/* icon-image */}
            <div key = {item.id} className="icon-image
            relative bg-white rounded-[50%] h-[70px] w-[70px] my-0 mx-[5px] shadow-[0_5px_10px_rgba(0,0,0,.25)]
            ">
                {/* icon */}
                <div className="icon">
                    <img src={item.image} alt=""  
                        className="absolute h-[95%] w-[95%] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 object-cover rounded-[50%] border-[3px] border-[#0397FF]"
                    />
                </div>
                {/* hover-image */}
                <div className="hover-image ">
                    {/* img */}
                    <div className="img">
                        <img src={item.image} alt="" 
                            className="absolute w-full h-full object-cover border-[3px] border-white rounded-[25px]"
                        />
                    </div>
                    {/* content */}
                    <div className="content">
                        {/* details */}
                        <div className="details">
                            {/* name */}
                            <div className="name">{item.name}</div>
                            {/* job */}
                            <div className="job">{item.job}</div>
                        </div>

                    </div>
                </div>
            </div>

        )

    
}
export default IconImage