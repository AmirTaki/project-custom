const GenerateQrCode = () => {
    return(
        // box
        <div className="w-[400px] bg-[#155e75] p-[30px] rounded-[8px]">
            {/* qr header */}
            <div>
                <h1 className="text-[26px] text-center text-white mb-[26px] uppercase">Generate QR Code</h1>
                <input 
                    className="w-[100%] mb-[12px] p-[15px] outline-0 rounded-[8px]"
                    type = 'text'
                    placeholder="Type your text ot URL"
                />
            </div>
        </div>
    )
}

export default GenerateQrCode;