import playImg from "./image/play.png"
import dropDwonImg from "./image/dropdown.png"
import { useEffect, useReducer } from "react"
const TextSpeech = () => {
    const reducer = (state, action) => {
        switch(action.type){
            case "handlerVoices" :
                return {...state, voices : action.payload.availabe }
            case "handlerSpeek":
                
                const speech = new SpeechSynthesisUtterance(state.text)
                speech.voice = state.voices[languge]
                window.speechSynthesis.speak(speech)
                return{...state,}

            case "handlerLanguge" : 
                const {value} = action.payload
                return{...state, languge : value}
            
                case  "handlerTextArea":
                const {text} = action.payload
                return {...state,text :text }
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        voices : [],
        text : "",
        languge : 0
        
    })

    useEffect(() => {
        let speech  = new SpeechSynthesisUtterance();
        const load = () => {
            let availabeVoices =  window.speechSynthesis.getVoices()
            dispatch({type : 'handlerVoices', payload : {availabe : availabeVoices}})
            speech.voice = state.voices[0]

            console.log(state.languge)
            
        }

        window.speechSynthesis.onvoiceschanged = load
        load()
        return() => {
            window.speechSynthesis.onvoiceschanged = null
        }
    },[])
    return(
        // hero
        <div className="w-full min-h-screen bg-linear-[45deg,#010758,#490d61] text-white flex justify-center items-center flex-col ">
            <h1 className="text-[45px] font-[500] -mt-[50px] mb-[50px] ">Text To Speech
                <span className="text-[#ff2963] ml-2">Converter</span>
            </h1>
            {/* textarea */}
            <textarea 
                onChange={(e) => {dispatch({type : 'handlerTextArea', payload : {text : e.target.value}})}}
                name="" id="" placeholder="Write anything here..."
                className="w-[600px] h-[250px] bg-[#493d84] text-[15px]! border-0 outline-none p-[20px] rounded-[10px] resize-none mb-[30px]
                placeholder:text-[16px]! placeholder:text-[#ddd] text-white"    
            ></textarea>
            {/* row */}
            <div className="w-[600px] flex text-center gap-[20px]">
                <select 
                    style={{backgroundPositionX : "calc(100% - 20px)", backgroundPositionY : "20px",backgroundImage: `url(${dropDwonImg})`}}
                    className={`flex-1 text-white bg-[#403d84] h-[50px] px-[20px] outline-none border-0 rounded-[35px] appearance-none bg-no-repeat  bg-[length:15px]`}
                    onChange={(e) => {dispatch ({type : 'handlerLanguge', payload : {value : e.target.value}})}}
                >
                    {state.voices.map((voice, index) => {
                        return(
                            <option key={index} value = {voice} >{voice.name}</option>
                        )
                    })}
                </select>
                {/* button */}
                <button 
                    onClick={() => {dispatch({type : 'handlerSpeek'})}}
                    className="bg-[#ff296c] text-white text-[16px] p-[10px_30px] rounded-[35px] border-0 outline-none cursor-pointer flex items-center">
                        <img src={playImg} alt="" className="w-[16px] mr-[10px]" />
                        Listen
                </button>
            </div>
        </div>
    )
}
export default TextSpeech;