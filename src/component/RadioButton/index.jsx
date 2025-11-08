import { useReducer, } from "react";

const PureRadio = () => {
    const initialState = {
        buttons :[
            {
                id : 0,
                name : 'walk'
            },
            
            {
                id : 1,
                name : 'bike'
            },
            {
                id : 2,
                name : 'car-sport'
            },
            {
                id : 3,
                name : 'airplane'
            },

        ]
    }
    const  reducer = (state, action) => {
        switch(action.type){
            case "":
                return {...state}
        }
    }
    const [radio, dispatch] = useReducer(reducer, initialState)
    // const [radio, setRadio] = useState(false)
    return(
        // container
        <div className="flex justify-center items-center">
            {/* radio-title-group */}
            <div className="flex flex-wrap justify-center">
                {/* input-container */}
                <div
                    onClick={() => {setRadio(!radio)}} 
                    className="relative h-[7rem] w-[7rem] m-[.5rem] hover:shadow-[0_0_12px_#07afd9]! rounded-[8px] duration-300 cursor-pointer">
                    {/* radio-title */}
                    <div 
                        className={`${radio ? "bg-[#07afd9] shadow-[0_0_12px_#07afd9] scale-110" : "bg-transparent"}
                        flex flex-col items-center justify-center h-full border-2 border-[#07afd9]   rounded-[8px] transition-all duration-300! ease-in-out
                        `}
                    >
                        <ion-icon name="walk" style = {{color : `${radio ? "white" : "#07afd9"}`}} className = {`text-[3rem]`}></ion-icon>
                        <label htmlFor="walk" className={`${radio ? "text-white" : "text-[#07afd9] "} text-[.8rem] font-[600] uppercase tracking-[1px]`}>Walk</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PureRadio;