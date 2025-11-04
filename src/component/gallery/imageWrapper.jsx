const ImageWrapper = ({state, wrapperImage}) => {
    return(
        <div className={`${state.displayWarpper ? 'flex' : 'hidden'} w-full h-screen bg-[rgba(0,0,0,.9)] fixed top-0 left-0  justify-center items-center z-[200]`}  >
            <img src = {state.image[0]} alt="" className='w-[90%] max-w-[500px]' ref = {wrapperImage}/>
            <span 
                onClick={() => {disptach({type : 'handlerCross'})}}
                className='absolute top-[5%] right-[5%] text-[30px] font-[sans-serif]  text-white cursor-pointer!'
            >
                X
            </span>
        </div>
    )
}

export default ImageWrapper