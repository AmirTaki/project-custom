import { createContext, useRef } from "react";

export const QRContext   =  createContext ()
const QRProvider = ({children}) => {
    const qrContainer = useRef(null);
    const imgRef = useRef(null);
    return(
       <QRContext.Provider value = {{qrContainer, imgRef}}>
            {children}
       </QRContext.Provider>
    )   
}
export default QRProvider