export const ReducerSpeech = (state, action) => {
    switch(action.type){
        
        case "handleSpeech" :
            return {...state, speech : new SpeechSynthesisUtterance(state.text), }
        
        case "handlerAvailabe":
            return {...state, availabe : window.speechSynthesis.getVoices() }

        case "handlerSpeechVoice": 
            state.speech.voice = state.voices[0] 
            return{...state,}

        case "handlerVoices" :
            return {...state, voices : state.availabe }
        
        case "handlerSpeek":
            state.speech = new SpeechSynthesisUtterance(state.text)
            state.speech.voice = state.voices[state.languge]
            window.speechSynthesis.speak(state.speech)
            return{...state}

        case "handlerLanguge" : 
            const {value} = action.payload
            return{...state, languge : value}
        
        case  "handlerTextArea":
            const {text} = action.payload
            return {...state,text :text }
    }
}

export const InitialSpeech = {
    voices : [],
    text : "",
    languge : 0,
    speech : [],
    availabe : []
}