import { useEffect, useReducer, useRef, useState } from "react"


const options = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000' ]
const GenerateQrCode = () => {
    
    const reducer = (state, action)=>{
        switch(action.type){    
            case "input":
                return {...state, value : action.payload.event}
                
                case "size" : 
                return {...state, size : action.payload.event}
                
                case "handerGenerate" :
                    const generateQRCode = () => {
                        state.value.innerHTML = ''
        
                        new QRCode (qrContainer.current, {
                        text : inputQr.current.value,
                        width : sizesRef.current.value,
                        height : sizesRef.current.value,
                        colorDark : '#000000',
                        colorLight : '#ffffff'
                        })
                    }

                    state.value.length > 0 ? generateQRCode() : window.alert('Enter the text or URL to generate your QR code')
                    return {...state} 
                }
            }

        const [state, disptach] =   useReducer(reducer, {
            value : '',
            size : 100
        })
        
        const [valueInput, setValueInput] =  useState('')
        const [sizes, setSizes] = useState(100)
        
        const inputQr = useRef(state.value)
        const sizesRef = useRef(state.size)
            
    const qrContainer = useRef(null)
    const imgRef = useRef(null)

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

    const isEmptyInput = () => {
        inputQr.current.value.length > 0 ? generateQRCode() : window.alert('Enter the text or URL to generate your QR code')
    }   
    const handerGenerate = (event) => {
        event.preventDefault();
        isEmptyInput()
    }
    const handlerDownload = () => {
        const canvas =  qrContainer.current?.querySelector('canvas')
        if(!canvas){alert('QR code not generated yet'); return;}

        const dataUrl = canvas.toDataURL('image/png')

        if(imgRef.current) imgRef.current.src = dataUrl;

        const a =  document.createElement('a')
        a.href = dataUrl;
        a.download = dataUrl;
        a.click()
        a.remove()

    };
    return(
        // box
        <div className="w-[400px] bg-[#155e75] p-[30px] rounded-[8px]">
            {/* qr header */}
            <div>
                <h1 className="text-[26px] text-center text-white mb-[26px] uppercase">Generate QR Code</h1>
                <input 
                    ref = {inputQr}
                    onChange = {(e) => {disptach({type : "input", payload : {event : e.target.value}})}}
                    // onChange={(e) => {setValueInput(e.target.value)}}
                    className="w-[100%] mb-[12px] p-[15px] outline-0 rounded-[8px] text-[18px] border-2 border-[#7fb7c9] bg-white"
                    type = 'text'
                    placeholder="Type your text ot URL"
                />
                {/* select */}
                <div className="flex justify-between">
                    <label htmlFor="sizes" 
                        className="text-white text-[20px]"
                    >
                        Select Size :
                    </label>
                    <select
                        value={state.size}
                        onChange={(e) => {
                            // setSizes(e.target.value);
                            disptach({type : 'size', payload : {event : e.target.value}})
                        }}
                        ref={sizesRef}
                        name="sizes"
                        id="sizes"
                        className="p-[8px] rounded-[8px] text-[18px] outline-0 border-2 bg-white border-[#7fb7c9]"
                    >
                        {options.map((opt) => (
                            <option value={opt} key={opt}>{opt}x{opt}</option>
                        ))}
                    </select>
                </div>
            </div>
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
                    // onClick={handerGenerate}
                    onClick={() => {disptach({type : 'handerGenerate'})}}
                    className="bg-white text-[20px] py-[14px] px-[36px] mx-[2px] text-[#155e75] font-[600] rounded-[8px] cursor-pointer"
                >
                    Generate
                </button>

                <button 
                    onClick={handlerDownload}
                    className="bg-white text-[20px] py-[14px] px-[36px] mx-[2px] text-[#155e75] font-[600] rounded-[8px] cursor-pointer"
                >
                    Download
                </button>
            </div>
        </div>
    )
}

export default GenerateQrCode;