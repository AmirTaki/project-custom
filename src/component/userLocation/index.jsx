import imgUser from "./img/free-location-icon-2955-thumb.png"
const UserLocation = () => {
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

        </div>
    )
}
export default UserLocation;