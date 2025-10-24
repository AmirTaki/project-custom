import { useEffect, useRef, useState } from "react"


const options = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000' ]
const GenerateQrCode = () => {

    const [valueInput, setValueInput] =  useState('')
    const [sizes, setSizes] = useState(100)

    const downloadBtn =  useRef(null)
    const generateBtn =  useRef(null)
    const inputQr = useRef(valueInput)
    const sizesRef = useRef(sizes)
    const qrContainer = useRef(null)

    const generateQRCode = () => {
        qrContainer.innerHTML = ''

        new QRCode (qrContainer.current, {
            text : inputQr.current.value,
            width : sizesRef.current.value,
            height : sizesRef.current.value,
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
    return(
        // box
        <div className="w-[400px] bg-[#155e75] p-[30px] rounded-[8px]">
            {/* qr header */}
            <div>
                <h1 className="text-[26px] text-center text-white mb-[26px] uppercase">Generate QR Code</h1>
                <input 
                    ref = {inputQr}
                    onChange={(e) => {setValueInput(e.target.value)}}
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
                        value={sizes}
                        onChange={(e) => {
                            setSizes(e.target.value);
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
                <img src="" alt=""  className="max-w-[100%] max-h-[100%] mb-[10px] p-[20px]
                    border-[.5px] border-white rounded-[8px]
                "/>
            </div>

            {/* qr footer */}
            <div className="mt-[30px] flex justify-center">
                <button 
                    onClick={handerGenerate}
                    ref = {generateBtn}
                    className="bg-white text-[20px] py-[14px] px-[36px] mx-[2px] text-[#155e75] font-[600] rounded-[8px] cursor-pointer"
                >
                    Generate
                </button>

                <button 
                    ref = {downloadBtn}
                    className="bg-white text-[20px] py-[14px] px-[36px] mx-[2px] text-[#155e75] font-[600] rounded-[8px] cursor-pointer"
                >
                    Download
                </button>
            </div>
        </div>
    )
}

export default GenerateQrCode;