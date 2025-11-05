import { BoxItem } from "./boxItem"
import "./styles.css"
import Box from "./box"

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
                <div className="relative w-full mt-[30px]"></div>
            </div>
        </div>
    )
}

export default LoginForm