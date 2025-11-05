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
                <h2 className="text-white text-[2em] mb-[60px] font-[600] uppercase tracking-[.1em] pointer-events-auto">
                    Login
                </h2>
                {/* inputBox */}
                <div className="relative w-full mt-[30px]">
                    <input type="text"  required id = 'username'
                        className="w-full py-[20px] px-[25px] outline-0 rounded-[10px] bg-[rgba(0,0,0,.25)]  border-1 border-[#000] text-white text-[1em] uppercase tracking-[.1em] backdrop-blur-[10px] peer pointer-events-auto    "/>
                    <label 
                        htmlFor="username"
                        className="absolute text-[1em] left-0 py-[20px] px-[25px] text-white uppercase rounded-[4px] duration-300 pointer-events-none tracking-[.2em]
                            peer-focus:translate-x-[15px] peer-focus:-translate-y-[10px] peer-focus:text-[.75em]! peer-focus:bg-white peer-focus:text-[#222]
                            peer-focus:py-[2px] peer-focus:px-[7px] peer-focus:border-[1px] peer-focus:border-black  peer-focus:tracking-[.1em] 
                            peer-valid:translate-x-[15px] peer-valid:-translate-y-[10px] peer-valid:text-[.75em]! peer-valid:bg-white peer-valid:text-[#222]
                            peer-valid:py-[2px] peer-valid:px-[7px] peer-valid:border-[1px] peer-valid:border-black peer-valid:tracking-[.1em] 
                    ">      
                        Username
                    </label>
                </div>
                {/* inputBox */}
                <div className="relative w-full mt-[30px]">
                    <input type="password"  required id = 'password'
                        className="w-full py-[20px] px-[25px] outline-0 rounded-[10px] bg-[rgba(0,0,0,.25)]  border-1 border-[#000] text-white text-[1em] uppercase tracking-[.1em] backdrop-blur-[10px] peer pointer-events-auto    "/>
                    <label 
                        htmlFor="password"
                        className="absolute text-[1em] left-0 py-[20px] px-[25px] text-white uppercase rounded-[4px] duration-300 pointer-events-none tracking-[.2em]
                            peer-focus:translate-x-[15px] peer-focus:-translate-y-[10px] peer-focus:text-[.75em]! peer-focus:bg-white peer-focus:text-[#222]
                            peer-focus:py-[2px] peer-focus:px-[7px] peer-focus:border-[1px] peer-focus:border-black  peer-focus:tracking-[.1em] 
                            peer-valid:translate-x-[15px] peer-valid:-translate-y-[10px] peer-valid:text-[.75em]! peer-valid:bg-white peer-valid:text-[#222]
                            peer-valid:py-[2px] peer-valid:px-[7px] peer-valid:border-[1px] peer-valid:border-black peer-valid:tracking-[.1em]
                    ">      
                        Passwrod
                    </label>
                </div>
            </div>
        </div>
    )
}

export default LoginForm