import img1 from "./Img/landscape-1.png"
import img2 from "./Img/landscape-2.png"
import img3 from "./Img/landscape-3.png"
const CardHoverEffect = () => {
    return(
        // container
        <div className="grid place-items-center mx-[1.5rem] py-[5rem] xl:h-[100vh]">
            {/* card__conatiner */}
            <div className="grid gap-y-[3.5rem] xl:grid-cols-3">
                {/* card__article */}
                <article className="relative overflow-hidden">
                    {/* card__image */}
                    <img src={img1} alt="" className="w-[328px] rounded-[1.5rem] xl:w-[348px]"/>


                    {/* card__data */}
                    <div 
                    className="w-[280px] bg-[hsl(0,0%,100%)] px-[1.5rem] py-[2rem]
                      rounded-[1rem] absolute bottom-[-9rem] left-0 shadow-[0_8px_24px_hsla(0,0%,0%,.15)]
                        right-0 mx-auto opacity-0 transition-opacity duration-1000 xl:w-[316px] xl:px-[2.5rem]
                    ">
                        {/* card_description*/}
                        <span className="block text-[.813rem] mb-[.25rem]">Vancover Muntains, Canada</span>
                        {/* card__title */}
                        <h2 className="text-[1.25rem] font-[500] text-[hsl(0,0%,15%)] mb-[.75rem]">The Great Path</h2>
                        {/* card__button */}
                        <a href="#" className="decoration-0 text-[.813rem] font-[500] text-[hsl(82,60%,28%)] hover:underline">Read More</a>

                    </div>
                </article>
            </div>

        </div>
    )
}

export default CardHoverEffect;