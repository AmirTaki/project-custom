const QRFooter = ({disptach, qrContainer, imgRef}) => {
    return (
        <div className="mt-[30px] flex justify-center">
            <button 
                onClick={() => {disptach({type : 'handerGenerate', payload : {qrContainer}})}}
                className="bg-white text-[20px] py-[14px] px-[36px] mx-[2px] text-[#155e75] font-[600] rounded-[8px] cursor-pointer"
            >
                Generate
            </button>

            <button                     
                onClick={() => {disptach({type : "handlerDownload", payload : {qrContainer, imgRef}})}}
                className="bg-white text-[20px] py-[14px] px-[36px] mx-[2px] text-[#155e75] font-[600] rounded-[8px] cursor-pointer"
            >
                Download
            </button>
        </div>
    )
}
export default QRFooter