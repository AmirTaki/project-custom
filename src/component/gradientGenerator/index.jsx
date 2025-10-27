import { useReducer, useRef } from 'react';
import { ListButtons } from './listButtons';

import './styles.css'
const GradientGenerator = () => {
    const codeRef = useRef(null)

    const reducer = (state, action) => {
        switch(action.type){
            case "handlerButton":
                const newSatate =  state.buttons.map((item) => ({...item, flag : item.id === action.payload.id ? true : false }))
                return {...state, buttons : newSatate}
            case "HandlerColor" :
                if(action.payload.data === 'A'){
                    return {...state , colorA : action.payload.color}
                }
                return  {...state , colorB : action.payload.color}

            case "HandlerGenerate" : 
                const itemButtons =  state.buttons.find((item) => item.flag)
                return {...state, backGround : `linear-gradient(${itemButtons.value}, ${state.colorA}, ${state.colorB})` }
        }
    }
    const [state, dispatch] =  useReducer(reducer, ListButtons)    




    return(
        // box
        <div 
            style = {{backgroundImage : `${state.backGround}`}}
            className="w-[3000px]! h-[500px] mx-auto ">
            {/* container */}
            <div className="bg-[#fff] w-[440px] px-[50px] p-[30px] absolute 
                -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]
                rounded-[10px] shadow-[0_20px_25px_rgba(0,0,0,0.25)]
            ">
                {/* colors */}
                <div className="w-[100%] flex justify-around">
                  <input value = {state.colorA} onChange={(e) => {dispatch({type : 'HandlerColor', payload : {data : 'A', color : e.target.value}})}}  type="color" className="input-color-custom "/>  
                  <input value = {state.colorB} onChange={(e) => {dispatch({type : 'HandlerColor', payload : {data : "B", color : e.target.value}})}}  type="color" className="input-color-custom " />  
                </div>

                {/* buttons  */}
                <div className={` w-[100%] flex justify-between my-[40px] mx-0 gap-1`}>
                   
                    {state.buttons.map((btn) => {
                        {/* button */}
                        return(
                            <button 
                                key = {btn.id}
                                onClick={() => {dispatch({type : 'handlerButton', payload : {id : btn.id}})}}
                                className={`${btn.flag ? "border-0 bg-[#4a6ee0]! text-white" : "border-2 border-[#d5d5dc] text-[#d5d5dc] "} h-[35px] w-[35px] bg-transparent  rounded-[5px] cursor-pointer`}
                            >
                                <i className={`${btn.icon} ${btn.rotateIcon ? "rotate-45" : ""} `}></i>
                            </button>
                        )
                    })}                   
                  

                </div>
                {/* submit */}
                <button 
                    onClick={()=> {dispatch({type : 'HandlerGenerate'})}}
                    className='block bg-[#4a6ee0] text-white text-[16px] py-[12px] px-[70px] rounded-[25px] m-[0_auto_30px_auto] cursor-pointer'
                >
                    Generate
                </button>

                {/* output */}
                <div className="bg-[#f0f2fc]">
                    {/* code */}
                    <textarea ref = {codeRef}  name="" rows = "2" className='w-[100%] resize-none text-[#30304a] py-[10px] px-[20px] bg-transparent' ></textarea>
                    {/* copy */}
                    <button className='text-[14px] bg-[#4a6ee0] text-white relative left-[85%] bottom-[10px] rounded-[3px] p-[5px] cursor-pointer'>
                        Copy
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default GradientGenerator;