const Navbar = () => {
    return(
        <div className="flex justify-between items-center bg-blue-500">
            <div className="  h-20 bg-red-500 flex items-center justify-center">
                {/* logo */}
                <div className="">
                    <a href="">Web developer programming</a>
                </div>
            </div>
            <div className=" w-10 h-20 bg-green-500"></div>
            <div className=" w-10 h-20 bg-orange-500"></div>
        </div>
    )
}

export default Navbar