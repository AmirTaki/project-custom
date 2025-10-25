import {  useReducer, useRef } from "react"
import QrHeader from "./qrHeader"
import QRBody from "./qrBody";
import QRFooter from "./qrFooter";
import { reducerQrCode } from "./reducer";


const GenerateQrCode = () => {
     const qrContainer = useRef(null);
     const imgRef = useRef(null);
    


    const [state, disptach] = useReducer(reducerQrCode, {
        value : '',
        size : 100,
        options : ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000' ],
    })

    return (
        <div className="w-[400px] bg-[#155e75] p-[30px] rounded-[8px]">
            {/* qr header */}
            <QrHeader state = {state} disptach = {disptach}/>
    
            {/* qr body */}
            <QRBody qrContainer={qrContainer} imgRef = {imgRef} />

            {/* qr footer */}
            <QRFooter disptach={disptach}/>
        </div>
    )
}

export default GenerateQrCode;