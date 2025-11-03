
const ListSlider = ({state, sliderList}) => {
    return(
        <div className="list" ref = {sliderList}>
            {state.image.map((item) => {
                return(
                    <div className="item
                    w-[100%] h-[100%] absolute inset-0 
                    " key = {item.id}>
                        <img src={item.image} alt="" 
                            className="w-[100%] h-[100%] object-cover z-10"
                        />
                        {/* content */}
                        <div className="content
                            absolute top-[20%] w-[1140px] max-w-[80%] left-[50%]
                            h-[100%] -translate-x-1/2 pr-[30%] box-border text-white 
                            text-shadow-[0_5px_10px_#0004]
                        ">
                            {/* title */}
                            <div className="title 
                                text-[5em]  font-bold leading-[1.3em]
                            ">
                                {item.title}
                            </div>
                            {/* type */}
                            <div className="type
                                text-[5em]  font-bold leading-[1.3em] text-[#14ff72cb]
                            ">
                                {item.type}
                            </div>
                            {/* description */}
                            <div className="description">{item.description}</div>
                            
                            {/* button */}
                            <div className="buttons
                                grid grid-cols-[130px_130px] grid-rows-[40px] gap-[5px] mt-[20px] 
                            ">
                                <button
                                className="border-0 bg-[#eee] text-black font-[Poppins] font-[500] cursor-pointer duration-500
                                tracking-[2px] hover:tracking-[3px]
                                "
                                >SEE MORE</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default ListSlider;