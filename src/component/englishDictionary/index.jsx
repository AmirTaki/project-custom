import { useRef } from "react"

const EnglishDictionary = () => {
    
    const infoText =  useRef(null)
    const meaningContainer  = useRef(null)
    
    const FetchApi = async (word) => {
        try{
            infoText.current.style.display = "block"

        }   
        catch (err) {
            console.log(err)
            infoText.current.innerText = "an error happened, try again later"   
        }
    }
    
    
    
    return(
        // container
        <div className="bg-[rgba(255,255,255,.3)] p-[28px] rounded-[7px] shadow-[0_10px_10px_rgba(0,0,0,.3)]
            w-[90%] m-[100px] max-w-[450px] text-center text-[18px] font-[500]  "
        >
            {/* heading*/}
            <h1 className="text-[28px]">English Dictionary</h1>
            {/* input */}
            <input type="text" placeholder="Search a word" 
                className="h-[53px] w-[300px] bg-[rgba(255,255,255,.6)] border-[rgba(255,255,255,.4)] text-[16px] px-[42px] rounded-[5px]    "
            />
            {/* info-text */}
            <p ref = {infoText}>
                Type a word and press enter
            </p>
            {/* meaning-container */}
            <div className="hidden">
                {/* title */}
                <p>Word Title <span>___</span></p>
                {/* audio */}
                <audio src="" controls ></audio>
            </div>

        </div>
    )
}

export default EnglishDictionary;