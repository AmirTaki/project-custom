const ImgComponent = () => {
    return(

    <div className="bg-white w-[960px] max-lg:w-[640px]!  max-sm:w-[320px]! h-[500px] mt-20 flex flex-wrap  flex-col  justify-evenly   overflow-x-scroll">
      
        <div className="bg-red-500 w-[300px] h-[95%] mx-[10px] ">
        </div>
        <div className="bg-blue-500 w-[300px] h-[95%] mx-[10px] ">
        </div>
        <div className="bg-green-500 w-[300px] h-[95%] mx-[10px] ">
        </div>
        <div className="bg-pink-500 w-[300px] h-[95%] mx-[10px]">
        </div>
        <div className="bg-orange-500 w-[300px] h-[95%] mx-[10px]">
        </div>
        <div className="bg-yellow-500 w-[300px] h-[95%] mx-[10px]">
        </div>
        <div className="bg-gray-500 w-[300px] h-[95%] mx-[10px]">
        </div>
        <div className="bg-pink-500 w-[300px] h-[95%] mx-[10px]">
        </div>
    </div>
    )
}

export default ImgComponent;


 // gallery 
        // <div className="flex justify-center items-center mx-auto my-[10%] bg-blue-700  ">
        //     {/* back */}
        //     <img 
        //         src= {imgBack} 
        //         alt="" 
        //         className="w-[50px] cursor-pointer m-[40px]" 
        //         onClick={() => {handlerBack()}}
        //     />


            // <div ref = {galleryRef} className="hidden  bg-amber-300  w-[90%] h-[100%]  flex overflow-x-scroll overflow-y-hidden  scrollbar-hide">
            //     <div className=" w-[100%] md:w-100 grid grid-cols-3 gap-[20px] p-[10px] flex-none">
            //         <span>
            //             <img src={img1} alt="" className="w-[100%] h-100 grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
            //         </span>
            //         <span>
            //             <img src={img2} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
            //         </span>
            //         <span>
            //             <img src={img3} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
            //         </span>
            //     </div>
            //     <div className="w-[100%] grid grid-cols-3 gap-[20px] p-[10px] flex-none ">
            //         <span>
            //             <img src={img4} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
            //         </span>
            //         <span>
            //             <img src={img5} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
            //         </span>
            //         <span>
            //             <img src={img6} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
            //         </span>
            //     </div>
            // </div>

            {/* next */}
            <img 
                src={imgNext} 
                alt="" 
                className="w-[50px] cursor-pointer m-[40px]" 
                onClick={()=> {handlerNext()}}    
            />
        // </div>