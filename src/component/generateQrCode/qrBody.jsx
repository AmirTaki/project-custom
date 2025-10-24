const QRBody = ({qrContainer, imgRef}) => {
    return(
        <div 
            ref = {qrContainer}
            className="grid place-items-center"
        >
            <img 
                ref = {imgRef} 
                src="a" alt="" 
                className= "max-w-[100%] max-h-[100%] mb-[10px] p-[20px]border-[.5px] border-white rounded-[8px]"
            />
        </div>
    )
}

export default QRBody;