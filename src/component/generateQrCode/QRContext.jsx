import { createContext, useRef } from 'react';

export const QRContext = createContext(null);

export function QRProvider({ children }) {
    const qrContainer = useRef(null);
    const imgRef = useRef(null);
    
    return (
        <QRContext.Provider value={{ qrContainer, imgRef }}>
            {children}
        </QRContext.Provider>
    );
}