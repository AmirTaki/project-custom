import playImg from "./image/play.png"
import dropDwonImg from "./image/dropdown.png"
import { useEffect, useReducer } from "react"
import { InitialSpeech, ReducerSpeech } from "./reducerSpeech"

const TextSpeech = () => {
 
    const [state, dispatch] = useReducer(ReducerSpeech, InitialSpeech)

    useEffect(() => {
        dispatch({type : "handleSpeech"})

        const load = () => {
            dispatch({type : 'handlerAvailabe'})
            dispatch({type : 'handlerVoices'})
            dispatch({type : 'handlerSpeechVoice'})
        }

        window.speechSynthesis.onvoiceschanged = load
        load()
        return() => {
            window.speechSynthesis.onvoiceschanged = null
        }
    },[])
  
    return(
        // hero bg-linear-[45deg,#010758,#490d61]
        <div className="w-full min-h-screen  text-white flex justify-center items-center flex-col">
            <h1 className="text-[45px] font-[500] -mt-[50px] mb-[50px] ">Text To Speech
                <span className="text-[#ff2963] ml-2">Converter</span>
            </h1>
            {/* textarea */}
            <textarea 
                onChange={(e) => {dispatch({type : 'handlerTextArea', payload : {text : e.target.value}})}}
                name="" id="" placeholder="Write anything here..."
                className="w-[70%] max-w-[600px]  h-[250px] bg-[#493d84] text-[15px]! border-0 outline-none p-[20px] rounded-[10px] resize-none mb-[30px]
                placeholder:text-[16px]! placeholder:text-[#ddd] text-white"    
            ></textarea>
            {/* row */}
            
                <select 
                    style={{backgroundPositionX : "calc(100% - 20px)", backgroundPositionY : "25px",backgroundImage: `url(${dropDwonImg})`}}
                    className={`flex w-[70%] max-w-[600px]   text-white bg-[#403d84] h-[60px]  px-[20px] outline-none border-0 rounded-[35px] appearance-none bg-no-repeat  bg-[length:15px]`}
                    onChange={(e) => {dispatch ({type : 'handlerLanguge', payload : {value : e.target.value}})}}
                >
                    {state.voices.map((voice, index) => {
                        return(
                            <option key={index} value = {index} >{voice.name}</option>
                        )
                    })}
                </select>
            
            {/* button */}
            <button 
                onClick={() => {dispatch({type : 'handlerSpeek'})}}
                className="bg-[#ff296c] text-white text-[16px] p-[10px_30px] mt-7 rounded-[35px] border-0 outline-none cursor-pointer! flex items-center">
                    <img src={playImg} alt="" className="w-[16px] mr-[10px]" />
                    Listen
            </button>
        </div>
    )
}
export default TextSpeech;