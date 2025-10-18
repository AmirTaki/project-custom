const Card = () => {
    return(
        // wrapper
        <div className="relative w-[620px] h-[330px] perspective-[1000px] hover:rotate-y-180 ">
            {/* flipcard => transform-3d */}
            <div className="relative w-[100%] h-[100%] bg-[#D48600] transform-style-3d transition-all duration-1000 ease-in-out">
                
                {/* front card  */}
                <div className="
                    flex justify-center items-center w-[100%] h-[100%] bg-[#D48600] border-t-2 border-t-[#cc6600] border-l-2 border-l-[#cc6600]
                   shadow-[0_5px_10px_rgba(0,0,0,0.2)] backface-hidden absolute
                ">
                    {/* circle */}
                    <span className="w-[100px] h-[110px] border-[10px] border-[#4d2600] rounded-[50%]"></span>
                    {/* square */}
                    <span className="w-[100px] h-[110px] border-[10px] border-[#4d2600]"></span>
                    {/* triangle */}
                    <span 
                        className="relative h-0 w-0  border-b-[110px] border-b-[#4d2600] mr-[16px] 
                            border-l-[60px] border-r-[60px] border-transparent
                            before:content-[''] before:absolute before:h-0 before:w-0
                            before:border-r-[40px] before:border-l-[40px] before:border-transparent
                            before:border-b-[80px] before:border-b-[#D48600]
                            before:left-[-40px] before:top-[20px]
                    "></span>

                </div>

                {/* back card */}
                <div className="     
                    flex justify-center items-center w-[100%] h-[100%] bg-[#D48600] border-t-2 border-t-[#cc6600] border-l-2 border-l-[#cc6600]
                   shadow-[0_5px_10px_rgba(0,0,0,0.2)] backface-hidden absolute rotate-y-180
                ">
                    {/* home-logo */}
                    <span className="
                        relative h-[65px] w-[65px] border-[5px] border-[#4d2600] rounded-[50%] mr-[16px] 
                    ">
                        {/* icon */}
                        <spna className ="
                            relative top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 translate-y-[-2px]
                            inline-block h-[15px] w-[25px] bg-[#4d2600]
                            before:content-[''] before:absolute before:h-[25px] before:top-[-15px] before:w-[25px] before:bg-[#4d2600] before:rotate-45
                        ">            
                        </spna>
                    </span>
                    {/* num */}
                    <span className="text-[25px] font-[600] text-[#4d2600] ">8650 4006</span>
                </div>
            </div>
        </div>
    )
}

export default Card;



// ### 5. کلاس‌های مکمل برای افکت 3D:

// - `perspective-[1000px]` - عمق دید سه‌بعدی
// - `transform-style-3d` - حفظ فضای سه‌بعدی
// - `backface-hidden` - مخفی کردن پشت عناصر
// - `rotate-y-180` - چرخش 180 درجه روی محور Y
// - `transition-transform` - انیمیشن نرم

// این ترکیب یک کارت سه‌بعدی کامل ایجاد می‌کند که می‌تواند چرخش داشته باشد.