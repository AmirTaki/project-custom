const Thumbnail = ({state, thumbnail}) => {
    return(            
        <div className="thumbnail
            absolute bottom-[50px] left-[50%] w-[max-content] z-[100] flex gap-[20px]
            " ref = {thumbnail}
        >
            {state.image.map((item) => {
                return(
                    // item
                    <div className="item
                        w-[150px] h-[220px] shrink-0 relative
                    "
                    
                        key = {item.id}
                    >
                        <img src={item.image} alt="" 
                            className="w-full h-full object-cover rounded-[20px] shadow-[5px_0_15px_rgba(0,0,0,.3)]"
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Thumbnail