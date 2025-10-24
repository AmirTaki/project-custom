const QrHeader = ({state, disptach}) => {
    return(
      <div>
            <h1 className="text-[26px] text-center text-white mb-[26px] uppercase">Generate QR Code</h1>
            <input 
                onChange = {(e) => {disptach({type : "input", payload : {event : e.target.value}})}}
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
                    onChange={(e) => {  disptach({type : 'size', payload : {event : e.target.value}})}}
                    name="sizes"
                    id="sizes"
                    className="p-[8px] rounded-[8px] text-[18px] outline-0 border-2 bg-white border-[#7fb7c9]"
                >
                    {state.options.map((opt) => (
                        <option value={opt} key={opt}>{opt}x{opt}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default QrHeader;