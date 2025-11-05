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
            <div className="absolute w-[450px] h-[600px] px-[60px] py-[40px] text-center pointer-events-none"></div>
        </div>
    )
}

export default LoginForm