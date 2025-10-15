import { useState } from "react"

const DownloadButton = () => {

    const [startDwonload, setStartDownload] = useState(false)
    const handleButton = () => {
        setStartDownload(!startDwonload)
    }


    return (
        // container
        <div className={`
            relative w-[200px] h-[200px] rounded-[50%] flex justify-center items-center
            cursor-pointer select-none overflow-hidden bg-[conic-gradient(#333_0%,_#333_100%)]
            before:content-[''] before:absolute before:rounded-[50%] before:bg-[#222] opacity-90 before:inset-[15px]
        `}>
            {/* download */}
            <i 
                onClick = {() => {handleButton}}
                className={`
                    ${startDwonload ? 'translate-y-[-50%]' : "translate-y-[170%]"}
                    fa-solid fa-arrow-down-long
                    absolute top-[50%]  text-[#03a9f5] text-[4em] duration-500
                `}></i>
            {/* number */}
            <h2 className="
                relative z-100 text-[3em] text-center
            ">
            </h2>
        </div>
    )
}

export default DownloadButton;