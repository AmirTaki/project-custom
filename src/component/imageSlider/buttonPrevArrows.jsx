

const NextPrevButton = ({Data, dispatch}) => {
    // const {DataImage, } = useContext(imageSliderContext)

    return(
        <div 
            className="absolute top-[80%] right-[52%] z-[100] w-[300px] max-w-[30%] flex gap-[10px] items-center"
        >
            {Data.buttons.map((but) => {
                return(
                    <button 
                    key = {but.id} 
                    onClick={() => {dispatch({type : but.name})}}
                    className="w-[40px] h-[40px] rounded-[50%] text-white bg-[#14ff72cb] border-0 font-[monospace] font-bold
                        transition-all duration-500 cursor-pointer hover:bg-white! hover:text-[#000]
                    ">
                        {but.symbol}
                    </button>
                )
            })}

        </div>
    )
}
export default NextPrevButton;