import {  useReducer, useRef } from "react"
import QrHeader from "./qrHeader"
import QRBody from "./qrBody";

const GenerateQrCode = () => {
    const qrContainer = useRef(null);
    const imgRef = useRef(null);
    const reducerQrCode = (state, action)=>{
    switch(action.type){    
        case "input":
            return {...state, value : action.payload.event}
            
            case "size" : 
                return {...state, size : action.payload.event}
            
            case "handerGenerate" :
                const generateQRCode = () => {
                    qrContainer.current.innerHTML = ''
    
                    new QRCode (qrContainer.current, {
                    text : state.value,
                    width : state.size,
                    height : state.size,
                    colorDark : '#000000',
                    colorLight : '#ffffff'
                    })
                }

                state.value.length > 0 ? generateQRCode() : window.alert('Enter the text or URL to generate your QR code')
                return {...state} 
            

            case "handlerDownload" : 
                const canvas =  qrContainer.current?.querySelector('canvas')
                if(!canvas){alert('QR code not generated yet'); return;}

                const dataUrl = canvas.toDataURL('image/png')

                if(imgRef.current) imgRef.current.src = dataUrl;

                const a =  document.createElement('a')
                a.href = dataUrl;
                a.download = dataUrl;
                a.click()
                a.remove()
                return {...state}
        }
    }

    const [state, disptach] =   useReducer(reducerQrCode, {
        value : '',
        size : 100,
        options : ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000' ]
    })

    return (
        <div className="w-[400px] bg-[#155e75] p-[30px] rounded-[8px]">
            {/* qr header */}
            <QrHeader state = {state} disptach = {disptach}/>
    
            {/* qr body */}
            <QRBody qrContainer={qrContainer} imgRef = {imgRef} />

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
    )
}

export default GenerateQrCode;