export const DataSection = [
    {
        id : 0,
        h1 : "Hi, I'm Codehal",
        p : "Animation on Scroll using HTML CSS and Javascript",
        showSection : 'translate-x-0 ' ,
        hideSection : 'translate-x-[-100%] ',
        showStyles : "opacity-100 blur-[0]",
        hideStyles : 'opacity-0 blur-3xl',
        status : true
    },
    {
        id : 1,
        h1 : "Keep Scrolling",
        p : "Animation on Scroll using HTML CSS and Javascript",
        showSection : 'translate-x-0! ' ,
        hideSection : 'translate-x-[100%]! ',
        showStyles : "opacity-100 blur-[0] text-[#0f0]",
        hideStyles : 'opacity-0 blur-3xl ',
        status : false

    },
    {
        id : 2,
        h1 : "Nice",
        p : "Animation on Scroll using HTML CSS and Javascript",
        showSection : 'scale-100 ' ,
        hideSection : 'scale-[.2]',
        showStyles : " opacity-100 blur-[0] text-[#e0f]",
        hideStyles : ' opacity-0 blur-3xl',
        status : false
    },
    {
        id : 3,
        h1 : "Very Good   <span className={`${section.status ? 'w-[100%] ' : 'w-0'} abolute top-0 right-0 h-[100%] bg-[#1f242d] duration-1000 delay-75`}></span>",
        p : "Animation on Scroll using HTML CSS and Javascript <span className={`${section.status ? 'w-[100%] ' : 'w-0'} abolute top-0 right-0 h-[100%] bg-[#1f242d] duration-1000 delay-500`}></span>",
        showSection : ' ' ,
        hideSection : '',
        showStyles : " opacity-100 blur-[0] text-[#ff0]",
        hideStyles : ' opacity-0 blur-3xl',
        status : false
    },



]