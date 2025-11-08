import './styles.css'
const RotatingCard = () => {
    return(
        // container
        <div className="bg-blue-600 w-[200px] h-[350px] mt-[10%] relative transform-3d perspective-[1000px] rotate3D">
            <div 
                style = {{"--i" : 0 , transform : "rotateY(calc(var(--i) * 45deg)) translateZ(400px);" }}
                className="absolute left-0 top-0 transform-3d duration-1000"
            >

            </div>
        </div>
    )
}
export default RotatingCard;