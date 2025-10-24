const icons = ['bi bi-facebook', 'bi bi-twitter', 'bi bi-whatsapp', 'bi bi-pinterest']
const SocialIcons = () => {
    return (
        <div>
            {icons.map((icon, index) => {
                return(
                    <i 
                        key = {index}
                        className={`${icon}
                        w-[40px] h-[40px] rounded-[50%] text-center leading-[40px] bg-transparent mr-[15px] cursor-pointer
                    `}></i>
                )
            })}
        </div>
    )
}
export default SocialIcons;