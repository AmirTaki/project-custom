const SearchInput = () => {
    return (
        <div 
            className ="flex center bg-[aliceblue] p-[5px] w-[300px] h-[50px] rounded-[50px] m-[10px] relative transition-[width] duration-150
                shadow-[6px_6px_10px_rgba(0,0,0,.2),-6px_-6px_10px_rgba(255,255,255,.7)]
            "
        >
            <img src="https://purepng.com/public/uploads/medium/search-icon-sl7.png"

            alt="" />
            <input type="text" placeholder="Search ..." />
            <img src="https://tse4.mm.bing.net/th/id/OIP.FkcQWaj4fNpipuwvqAOvMwHaI6?pid=Api&P=0&h=22" alt="" />
        </div>
    )
}

export default SearchInput;