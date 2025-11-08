import './styles.css'
const RotatingCard = () => {
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return(
        // container
        <div className=" w-[200px] h-[350px] mt-[10%] relative transform-3d perspective-[1000px] rotate3D">
            {}
            <div 
                style = {{"--i" : 0 , transform : "rotateY(calc(var(--i) * 45deg)) translateZ(400px);" }}
                className="absolute left-0 top-0 transform-3d duration-1000 "
            >
                <span
                    className='bg-[red] w-[200px] h-[350px] text-[10rem] text-white grid place-items-center font-[600]
                    text-shadow-[10px_10px_20px_blue] rounded-[24px] shadow-[0_15px_25px_rgba(0,0,0,.5)]'
                >1</span>
            </div>
        </div>
    )
}
export default RotatingCard;