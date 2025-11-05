import { BoxItem } from "./boxItem"
import Box from "./box"
import "./styles.css"

const LoginForm = () => {  
    return(
        // container
        <div className="grid grid-cols-[repeat(3,150px)] gap-[4px] mt-5">
            {/* box */}
            {BoxItem.box.map((box) => {
                return(
                    <Box  box = {box}/>
                )
            })}

            {/* login */}
            <div className="absolute w-[450px] h-[600px] px-[40px] py-[60px] text-center pointer-events-none">
                <h2 className="text-white text-[2em] mb-[60px] font-[600] uppercase leading-[.1em] pointer-events-auto">
                    Login
                </h2>
                {/* inputBox */}
                <div className="relative w-full mt-[30px]">
                    <input type="text"   required
                        className="w-full py-[20px] px-[25px] outline-0 rounded-[10px] bg-[rgba(0,0,0,.25)] border-1 border-[#000]
                        backdrop-blur-[10px] text-white text-[1em] uppercase leading-[.1em] pointer-events-auto group
                    "/>
                    <span className="absolute text-[1em] left-0 py-[20px] px-[25px] text-white uppercase rounded-4px duration-300 pointer-events-none
                        peer-focus:translate-x-[15px] peer-focus:-translate-y-[10px] peer-focus:text-[.75em] peer-focus:bg-white peer-focus:text-[#222]
                        peer-focus:py-[2px] peer-focus:px-[5px] peer-focus:border-[1px] peer-focus:border-black
                    ">
                        Username
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LoginForm