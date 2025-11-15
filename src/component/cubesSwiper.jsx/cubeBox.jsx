const CubeBox = ({cubes, dispatch}) => {
    return(
        <div 
          
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
                            style={{ backgroundImage: `url(${cube.img})` }}
                            // style = {{background : `#${cube.color}`}}
                            key = {cube.id}
                            className={`${cube.name} w-[400px] h-[400px]  z-10 absolute overflow-hidden  `
                        }
                        >
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default CubeBox