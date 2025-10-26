const glassMorphism = () => {
    return (
        // container
        <div className="w-[600px] flex flex-wrap justify-around">
            {/* btn */}
            <div className="relative w-[155px] h-[50px] m-[20px]
                before:content-[''] before:absolute before:left-[50%] before:-translate-x-1/2
                before:bottom-[-5px] before:w-[30px] before:h-[10px] before:bg-[#ff1f71]
                before:
            "></div>
        </div>
    )
}
export default glassMorphism;