const ImageGallery = ({state, disptach, wrapperImage}) => {
    return(
       <div 
            className="w-[80%] h-[700px] max-md:h-[900px]  overflow-y-scroll m-[100px_auto_50px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[30px] scrollbarGarllery "
        >
            {state.image.map((item) => {
                //  img 
                return(
                    <img 
                       onClick={() => {disptach({type : 'handlerClick', payload : {src : item.image, wrapperImage : wrapperImage.current}})}} 
                        key = {item.id} src={item.image} alt="" 
                        className='w-[99%] h-full cursor-pointer! transition duration-1000 ease-in-out hover:scale-75 hover:shadow-[0_32px_75px_rgba(68,77,136,.2)] ' 
                    />
                )
            })}
        </div>
    )
}

export default ImageGallery;