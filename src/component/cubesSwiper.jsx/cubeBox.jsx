const CubeBox = ({cubes, dispatch}) => {
    return(
        <div 
            onMouseDown={(e) => {dispatch({type : "handerStart", payload : {e : e.clientX}})}}
            onMouseUp={(e) => {dispatch({type : "handlerEnd", payload : {e : e.clientX}})}}
            className="w-[700px] h-[700px]  overflow-hidden relative flex justify-center itmes-center cursor-pointer">
            {/* container */}
            <div className="w-[500px] h-[500px]  flex justify-center items-center  perspective-[1300px]">
                {/* box */}
                <div 
                    style={{transform : `rotateY(${cubes.rotate}deg)`}}
                    className=" w-[350px] h-[350px]  transform-3d duration-1000 ease-in-out  transform"
                >
                    {/* cubs images */}
                    {cubes.images.map((cube) => (
                        <div 
                            style={{backgroundColor : `#${cube.color}`}}
                            key = {cube.id}
                            className={`${cube.name} w-[400px] h-[400px]   absolute overflow-hidden  `}
                        >
                            <img src={cube.img} className="w-full h-full bg-cover" alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default CubeBox