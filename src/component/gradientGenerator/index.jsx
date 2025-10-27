import { useState } from 'react';
import './styles.css'
const GradientGenerator = () => {
    const [active, setActive] = useState(false)
    return(
        // box
        <div className="w-[3000px]! h-[500px] mx-auto bg-amber-700">
            {/* container */}
            <div className="bg-[#fff] w-[400px] px-[50px] p-[30px] absolute 
                -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]
                rounded-[10px] shadow-[0_20px_25px_rgba(0,0,0,0.25)]
            ">
                {/* colors */}
                <div className="w-[100%] flex justify-around">
                  <input type="color" className="input-color-custom " value = "#1488cc"/>  
                  <input type="color" className="input-color-custom " value = "#2b32b2"/>  
                </div>

                {/* buttons  */}
                <div className={` w-[100%] flex justify-between my-[30px] mx-0`}>
                    {/* button */}
                    <button className={`${active ? "border-0 bg-[#4a6ee0]! text-white" : "border-2 border-[#d5d5dc] text-[#d5d5dc] "} h-[35px] w-[35px] bg-transparent  rounded-[5px] cursor-pointer`}>
                        <i className='fas fa-arrow-up'></i>
                    </button>
                    {/* button */}
                    <button className={`${active ? "border-0 bg-[#4a6ee0]! text-white" : "border-2 border-[#d5d5dc] text-[#d5d5dc] "} h-[35px] w-[35px] bg-transparent  rounded-[5px] cursor-pointer`}>
                        <i className='fas fa-arrow-down'></i>
                    </button>

                </div>
                {/* submit */}
                <button >Generate</button>
            </div>
        </div>
        
    )
}

export default GradientGenerator;