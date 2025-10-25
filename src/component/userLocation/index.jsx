import imgUser from "./img/free-location-icon-2955-thumb.png"
const UserLocation = () => {

    const handlerLocation = () => {
        console.log(navigator.geolocation)
    }

    return (
        // container 
        <div className="w-[80vw] max-w-[37.5em] bg-white py-[3em] px-[1.8em] absolute
            -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] rounded-[6em] 
            shadow-[0_.6em_2.5em_rgba(0,7,70,.2)]"
        >
            {/* img */}
            <img src={imgUser} alt="" 
                className="w-[6.25em] block m-auto" 
            />
            {/* location details */}
            <div className="text-[1.75em] text-center m-[1em_0_1.7em_0] text-[#021d38] font-[500]">
                Click on the 'Get Location' Button
            </div>
            {/* button */}
            <button 
                onClick={handlerLocation}
                className="block m-auto bg-[#42a1ff] text-white border-0 text-[1.25em] py-[1em] px-[2.5em] rounded-[.25em] cursor-pointer">
                Get Location
            </button>

        </div>
    )
}
export default UserLocation;