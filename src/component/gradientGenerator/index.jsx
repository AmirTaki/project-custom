const GradientGenerator = () => {
    return(
        // box
        <div className="w-[3000px]! h-[500px] mx-auto">
            {/* container */}
            <div className="bg-[#fff] w-[400px] px-[50px] p-[30px] absolute 
                -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]
                rounded-[10px] shadow-[0_20px_25px_rgba(0,0,0,0.25)]
            ">
                {/* colors */}
                <div className="w-[100%] flex justify-around">
                  <input type="colors" className="bg-transparent w-[100px] h-[45px]  cursor-pointer select-none " value = "#1488cc"/>  
                  <input type="colors"  value = "#2b32b2"/>  
                </div>

            </div>
        </div>
        
    )
}

export default GradientGenerator;