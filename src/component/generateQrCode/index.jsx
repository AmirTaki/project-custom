const options = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000' ]
const GenerateQrCode = () => {
    return(
        // box
        <div className="w-[400px] bg-[#155e75] p-[30px] rounded-[8px]">
            {/* qr header */}
            <div>
                <h1 className="text-[26px] text-center text-white mb-[26px] uppercase">Generate QR Code</h1>
                <input 
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
                    <select name="" id="sizes" className="p-[8px] rounded-[8px] text-[18px] outline-0 border-2 bg-white border-[#7fb7c9]">
                        {options.map((opt, ind) => {
                            return(
                                <option value = {opt} key = {ind}>{opt}x{opt}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default GenerateQrCode;