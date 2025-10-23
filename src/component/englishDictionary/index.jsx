import { useRef, useState } from "react"

const EnglishDictionary = () => {
    
    const infoText =  useRef(null)
    const meaningContainer  = useRef(null)
    const title = useRef(null)
    const meaning = useRef(null)
    const audioRef = useRef(null)
    const [value, setValue] = useState('')

    const FetchApi = async (word) => {
        try{
            infoText.current.style.display = "block"
            meaningContainer.current.style.display = 'none'
            infoText.current.innerText = `Searching the meaning of "${word}"`        
            const url =  `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`; 
            const result =  await fetch(url).then((res) => res.json())

            if(result.title) {
                meaningContainer.current.style.display = 'flex'
                infoText.current.style.display = "none"
                title.current.innerText = word;
                meaning.current.innerText = "N/A";
                audioRef.current.style.display = 'none'
            }
            else {
                infoText.current.style.display = 'none'
                meaningContainer.current.style.display = 'flex'
                audioRef.current.style.display = 'inline-flex'
                title.current.innerText = result[0].word
                meaning.current.innerText = result[0].meanings[0].definitions[0].definition;
                audioRef.current.src = result[0].phonetics[0].audio;
            }
        }   
        catch (err) {
            console.log(err)
            infoText.current.innerText = "an error happened, try again later"   
        }
    }
    const handleKeyDown = (e) => {
        if(e.target.value && e.key === "Enter"){
            console.log("ok")
            FetchApi(value)
        }
    }
    
    
    return(
        // container
        <div className="bg-[rgba(255,255,255,.3)] p-[28px] rounded-[7px] shadow-[0_10px_10px_rgba(0,0,0,.3)]
             m-[100px] w-[800px]! text-center text-[18px] font-[500] 
            flex flex-col gap-5  justify-center items-center"
        >
            {/* heading*/}
            <h1 className="text-[28px]">English Dictionary</h1>
            {/* input */}
            <input 
                onKeyDown={handleKeyDown}
                onChange={(e) => {setValue(e.target.value)}}
                type="text" placeholder="Search a word" 
                className="h-[53px] w-[70%] bg-[rgba(255,255,255,.6)] border-[rgba(255,255,255,.4)] text-[16px] px-[42px] rounded-[5px]    "
            />
            {/* info-text */}
            <p ref = {infoText}>
                Type a word and press enter
            </p>
            {/* meaning-container */}
            <div className="hidden  flex-col gap-4 items-center justify-center" ref = {meaningContainer}>
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