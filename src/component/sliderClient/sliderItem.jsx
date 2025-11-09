const SliderItem = () => {
    return(
        // {/* swiper-slide -> h */}
        <div className="w-[320px]  bg-[#d1ebff] shadow-[0_15px_50px_rgba(0,0,0,.2)] backdrop-blur-[4px] rounded-[10px] bg-center bg-cover">
            {/* testimonialBox */}
            <div className="relative w-full p-[40px] pt-[90px] text-[#999]">
                {/* img -> quote */}
                <img 
                    className="absolute bottom-[5px] right-[3px] opacity-20"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHj-4qt5ZMM1om-SSRsIe50XzOyznYOz0ZTQ&s" alt=""
                />
                {/* content */}
                <div className="">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique optio ipsam reprehenderit, voluptatem iusto fuga vitae eligendi. Reprehenderit impedit sapiente eos laborum voluptatum soluta magni dicta alias. Saepe, illo.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius dolore officiis consequuntur voluptatum neque provident? Iure ducimus saepe eos, dolor magni reprehenderit in accusantium illo nobis laboriosam quae consequuntur.
                    </p>
                    {/* details */}
                    <div className="flex items-center mt-[20px]">
                        {/* imgBx */}
                        <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden mr-[10px]">
                            <img 
                                className="absolute top-0 left-0 w-full h-full object-center"
                                src="https://plus.unsplash.com/premium_photo-1726873337697-b60c68e6f515?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D" alt="" 
                            />
                        </div>
                        <h3 className="text-[16px] font-[400] tracking-[1px] text-[#2196f3] leading-[1.1em]">
                            Someone Famous<br /> <span className="text-[#666] text-[12px]">Creative Designer</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SliderItem;