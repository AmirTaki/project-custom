import './styles.css'
const RotatingCard = () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8]
    return(
        <div className="grid place-items-center h-[10vh]">

        {/* // container */}
        <div className="  w-[200px] h-[350px] mt-[10%] relative transform-3d  rotate3D">
            {list.map((item) => (
                <div
                    key = {item} 
                    style = {{"--i" : item  }}
                    className="absolute left-0 top-0 transform-3d duration-1000  rotateSpan"
                >
                    <span
                        className='bg-[silver] w-[200px] h-[350px] text-[10rem] text-white grid place-items-center font-[600]
                        text-shadow-[10px_10px_20px_crimson] rounded-[24px] shadow-[0_15px_25px_rgba(0,0,0,.5)]'
                    >{item}</span>
                </div>
            ))}
        </div>
        </div>
    )
}
export default RotatingCard;