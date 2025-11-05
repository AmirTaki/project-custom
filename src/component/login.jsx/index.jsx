import { BoxItem } from "./boxItem"
import { BrowserRouter } from "react-router-dom"
import SubmitButton from "./submit"
import InputBox from "./inputBox"
import Box from "./box"
import "./styles.css"
import GroupForm from "./group"

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
                <InputBox input = 'username'  type = 'text' value = "" />
                <InputBox input = 'password'  type = 'password' value = ''/>
                {/* submit */}
                <SubmitButton value = "login" />

                {/* group */}
                <BrowserRouter>
                    <GroupForm />
                </BrowserRouter>
            </div>
        </div>
    )
}

export default LoginForm