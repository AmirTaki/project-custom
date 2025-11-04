import "./styles.css"
const LoginForm = () => {
    return(
        // container
        <div className="grid grid-cols-[repeat(3,150px)] gap-[4px]">
            {/* box */}
            <div 
                className="boxContainer
                after:content after:absolute after:inset-[2px] after:bg-[rgba(45,45,45,.9)]
                before:content before:absolute before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-red-500
                before:w-[300px] before:h-[300px] before:transition before:duration-[.5s,top_.1s,left_.1s]
                "
            >
                    
            </div>
        </div>
    )
}

export default LoginForm