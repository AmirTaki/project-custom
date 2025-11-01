import "./styles.css"
const ItemImage = ({item}) => {
    return(
        <div className={`${item.flag ? 'flex' : 'hidden'} w-full h-full absolute inset-0 `}>
            {/* img */}
            <img src = {item.image} alt="" className="w-full h-full object-cover" />
            {/* content */}
            <div className="absolute top-[20%] w-[1140px] max-w-[80%] left-[50%]  transform -translate-x-1/2 pr-[30%] max-lg:pr-[0]! box-border text-white text-shadow-[0_5px_10px_#0004] ">
                {/* title */}
                <div className="text-[5em] font-bold leading-[1.3em] max-md:text-[50px]! sliderAnimation titleContent">
                    {item.title}
                </div>
                {/* type */}
                <div className="text-[5em] font-bold leading-[1.3em] text-[#14ff72cb] sliderAnimation  typeContent">
                    {item.type}
                </div>
                {/* discription */}
                <div className="sliderAnimation descriptionContent ">
                    {item.description}
                </div>
                {/* button */}
                <div className="grid grid-cols-[130px_130px] grid-rows-[40px] gap-[5px] mt-[20px] sliderAnimation  buttonsContent">
                    <button 
                        className="border-0  text-black bg-[#eee] font-[Poppins]! font-[500]! cursor-pointer transition-all duration-500 tracking-[2px] hover:tracking-[3px] "
                    >SEE MORE</button>
                </div>
            </div>
        </div>
    )
}
export default ItemImage;