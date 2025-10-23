import { useRef } from "react"

const EnglishDictionary = () => {
    
    const infoText =  useRef(null)
    const meaningContainer  = useRef(null)
    const title = useRef(null)
    const meaning = useRef(null)
    const audioRef = useRef(null)
    
    const FetchApi = async (word) => {
        try{
            infoText.current.style.display = "block"
            meaningContainer.current.style.display = 'none'
            infoText.current.innerText = `Searching the meaning of "${word}"`        
            const url =  `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`; 
            const result =  await fetch(url).then((res) => res.json())

            if(result.title) {
                meaningContainer.current.style.display = 'block'
                infoText.current.style.display = "none"
                title.current.innerText = word;
                meaning.current.innerText = "N/A";
                audioRef.current.style.display = 'none'
            }
            else {
                infoText.current.style.display = 'none'
                meaningContainer.current.style.display = 'block'
                audioRef.current.innerText = result[0].word;
                meaning.innerText = result[0].meaning[0].definitions[0].definitions
                audioRef.current.src = result[0].phonetics[0].audio;
            }
        }   
        catch (err) {
            console.log(err)
            infoText.current.innerText = "an error happened, try again later"   
        }
    }
    const handleKeyDown = (e) => {
        if(e.target.value && e.key === "enter"){
            FetchApi(e.target.value)
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
            <input 
                onKeyDown={handleKeyDown}
                type="text" placeholder="Search a word" 
                className="h-[53px] w-[300px] bg-[rgba(255,255,255,.6)] border-[rgba(255,255,255,.4)] text-[16px] px-[42px] rounded-[5px]    "
            />
            {/* info-text */}
            <p ref = {infoText}>
                Type a word and press enter
            </p>
            {/* meaning-container */}
            <div className="hidden">
                {/* title */}
                <p>Word Title <span ref = {title}>___</span></p>
                {/* meaning */}
                <p>Meaning : <span ref = {meaning}>___</span></p>
                {/* audio */}
                <audio ref = {audioRef} src="" controls ></audio>
            </div>

        </div>
    )
}

export default EnglishDictionary;