import { useRef, useState } from 'react';
import './styles.css'
const GradientGenerator = () => {
    const [active, setActive] = useState(false)
    const colorA = useRef(null)
    const colorB = useRef(null)
    const codeRef = useRef(null)
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
                  <input ref = {colorA} type="color" className="input-color-custom " value = "#1488cc"/>  
                  <input ref = {colorB} type="color" className="input-color-custom " value = "#2b32b2"/>  
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
                <button 
                    className='block bg-[#4a6ee0] text-white text-[16px] py-[12px] px-[70px] rounded-[25px] m-[0_auto_30px_auto] cursor-pointer'
                >
                    Generate
                </button>

                {/* output */}
                <div className="bg-[#f0f2fc]">
                    {/* code */}
                    <textarea ref = {codeRef}  name="" rows = "2" className='w-[100%] resize-none text-[#30304a] py-[10px] px-[20px] bg-transparent' ></textarea>
                    {/* copy */}
                    <button className='text-[14px] bg-[#4a6ee0] text-white relative left-[85%] bottom-[10px] rounded-[3px] p-[5px] cursor-pointer'>
                        Copy
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default GradientGenerator;