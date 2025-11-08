import './styles.css'
const RotatingCard = () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8]
    return(
        <div className="grid place-items-center h-[50vh]   ">

        {/* // container */}
        <div className="  w-[200px] h-[350px]   relative transform-3d  rotate3D">
            {list.map((item) => (
                <div
                    key = {item} 
                    style = {{"--i" : item  }}
                    className="absolute left-0 top-0 transform-3d duration-1000  rotateSpan"
                >
                    <span
                        className='bg-[rgba(0,0,0,.4)] w-[200px] h-[320px] text-[10rem] text-white grid place-items-center font-[600]
                        text-shadow-[10px_10px_20px_crimson] rounded-[24px] shadow-[0_15px_25px_rgba(0,0,0,.5)]
                        max-lg:w-[150px]! max-lg:h-[220px]! max-lg:text-[7rem]!
                        max-sm:w-[120px]! max-sm:h-[170px]! max-sm:text-[5rem]!
                        '
                    >{item}</span>
                </div>
            ))}
        </div>
        </div>
    )
}
export default RotatingCard;