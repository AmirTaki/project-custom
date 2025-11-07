const TextSpeech = () => {
    return(
        // hero
        <div className="w-full min-h-screen bg-linear-[45deg,#010758,#490d61] text-white flex justify-center items-center flex-col ">
            <h1 className="text-[45px] font-[500] -mt-[50px] mb-[50px]">Text To Speech
                <span className="text-[#ff2963]">Converter</span>
            </h1>
            {/* textarea */}
            <textarea 
                name="" id="" placeholder="Write anything here..."
                className="w-[600px] h-[250px] bg-[#493d84] text-[15px]! border-0 outline-none p-[20px] rounded-[10px] resize-none mb-[30px]
                placeholder:text-[16px]! placeholder:text-[#ddd] text-white"    
            ></textarea>
            {/* row */}
            <div className="w-[600px] flex text-center gap-[20px]">
                <select 
                    style={{backgroundPositionX : "calc(100%-20px)", backgroundPositionY : "20px"}}
                    className="flex-1 text-white bg-[#403d84] h-[50px] px-[20px] outline-none border-0 rounded-[35px] appearance-none bg-[url('./image/dropdown.png')] bg-no-repeat  bg-[length:15px]
                
                    "
                ></select>
            </div>
        </div>
    )
}
export default TextSpeech;