const ButtonArrows = ({state, dispatch, thumbnail, sliderList, slider}) => {
    return(
        <div className="nextPrevArrows
            absolute top-[80%] right-[52%] z-[100] w-[300px] max-w-[30%] flex gap-[10px] items-center
        ">
            {state.buttons.map((item) => {
                return(
                    <button 
                        className={`${item.name}
                            w-[40px] h-[40px] rounded-[50%] bg-[#14ff72cb] border-0 text-white font-[monospace]
                            font-bold duration-500 cursor-pointer hover:bg-white! hover:text-black    
                        `} 
                        key = {item.id}
                        onClick={() => {dispatch({type : `${item.name}`, payload : {thumbnail : thumbnail , sliderList : sliderList, slider : slider}})}}
                    >
                        {item.symbol}
                    </button>
                )
            })}
        </div>
    )
}
export default ButtonArrows;