import { useReducer } from "react"
import { QRProvider } from "./QRContext"
import QrHeader from "./qrHeader"

const GenerateQrCode = () => {

    const [state, disptach] =   useReducer(reducerQrCode, {
        value : '',
        size : 100,
        options : ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000' ]
    })

    return (
        <QRProvider>
            <div className="w-[400px] bg-[#155e75] p-[30px] rounded-[8px]">
                {/* qr header */}
                <QrHeader state = {state} disptach = {disptach}/>
        
                {/* qr body */}
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

                {/* qr footer */}
                <div className="mt-[30px] flex justify-center">
                    <button 
                        onClick={() => {disptach({type : 'handerGenerate'})}}
                        className="bg-white text-[20px] py-[14px] px-[36px] mx-[2px] text-[#155e75] font-[600] rounded-[8px] cursor-pointer"
                    >
                        Generate
                    </button>

                    <button                     
                        onClick={() => {disptach({type : "handlerDownload"})}}
                        className="bg-white text-[20px] py-[14px] px-[36px] mx-[2px] text-[#155e75] font-[600] rounded-[8px] cursor-pointer"
                    >
                        Download
                    </button>
                </div>
            </div>
    
        </QRProvider>
    )
}

export default GenerateQrCode;