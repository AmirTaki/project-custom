const Card = () => {
    return(
        // wrapper
        <div className="relative w-[620px] h-[330px] perspective-[1000px] ">
            {/* flipcard => transform-3d */}
            <div className="relative w-[100%] h-[100%] bg-[#D48600] transform-style-3d transition-all duration-1000 ease-in-out">
                
                {/* front card  */}
                <div className="
                    flex justify-center items-center w-[100%] h-[100%] bg-[#D48600] border-t-2 border-t-[#cc6600] border-l-2 border-l-[#cc6600]
                   shadow-[0_5px_10px_rgba(0,0,0,0.2)] backface-hidden absolute
                "></div>

                {/* back card */}
                <div className=""></div>
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