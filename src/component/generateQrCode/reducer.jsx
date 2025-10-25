export  const reducerQrCode = (state, action)=>{
    switch(action.type){    
        case "input":
            return {...state, value : action.payload.event}
            
            case "size" : 
                return {...state, size : action.payload.event}
            
            case "handerGenerate" :
                const generateQRCode = () => {
                    const  {qrContainer} = action.payload 
                    qrContainer.current.innerHTML = ''

                    new QRCode (qrContainer.current, {
                    text : state.value,
                    width : state.size,
                    height : state.size,
                    colorDark : '#000000',
                    colorLight : '#ffffff'
                    })
                }

                state.value.length > 0 ? generateQRCode() : window.alert('Enter the text or URL to generate your QR code')
                return {...state} 
            

            case "handlerDownload" :
                const  {qrContainer} = action.payload 
                const  {imgRef} = action.payload 
                const canvas =  qrContainer.current?.querySelector('canvas')
                if(!canvas){alert('QR code not generated yet'); return;}

                const dataUrl = canvas.toDataURL('image/png')

                if(imgRef.current) imgRef.current.src = dataUrl;

                const a =  document.createElement('a')
                a.href = dataUrl;
                a.download = dataUrl;
                a.click()
                a.remove()
                return {...state}
        }
    }