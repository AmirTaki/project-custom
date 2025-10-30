export const ReducerEditor = (state, action) => {
    switch(action.type){
        case "resetart":
            const newButtonsFilter = state.buttonsFilter.map((item) => ({...item, value : item.name == "Brighteness" || item.name == "Saturation" ? 100 : 0 }))
            return {...state, rotate : 0, flipHorizontal : 1, flipVertical : 1, value: 100, buttonsFilter : newButtonsFilter}
        
        case 'optionalButton':
            const newState = state.buttonsFilter.map((item) => ({...item, active :  item.id === action.payload.id ? true : false}))
            return {...state, buttonsFilter : newState}

        case "inputRange":
            const find =  state.buttonsFilter.find((item) => item.active )
            find.value = action.payload.value
            return{...state, value : action.payload.value}
        
        case "rotate": 
            action.payload.name == "fa-solid fa-rotate-left"? state.rotate -= 45 : state.rotate += 45
            return{...state }
        
        case "vertical" :
            return {...state, flipVertical : state.flipVertical == 1 ? -1 : 1}
        
        case "horizontal" :
            return {...state, flipHorizontal : state.flipHorizontal == 1 ? -1 : 1} 
    
        case 'loadImage' :
            var {fileInput} = action.payload
            if(fileInput){
                fileInput ?.click();
            }
            return {...state}
        
        case "imageInput" : 
            var {previewImg} = action.payload

            const file = action.payload.files?.[0]
            if(!file) return{...state}

            if(!file.type.startsWith('image/')){
                alert('Please select an image file.')
                return{...state}
            }
            if(previewImg){
                URL.revokeObjectURL(previewImg)
            }
            const newURL = URL.createObjectURL(file)

            if(previewImg){
                previewImg.src = newURL
            }

            return{...state, disable : false}

        case "downloadImage" :
            var {previewImg} = action.payload
            
            if (!previewImg) return {...state};

            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext('2d');
            if (!ctx)  return {...state};

            canvas.width = previewImg.naturalWidth;
            canvas.height = previewImg.naturalHeight;

            ctx.filter = `brightness(${state.buttonsFilter[0].value}%) saturate(${state.buttonsFilter[1].value}%) invert(${state.buttonsFilter[2].value}%) grayscale(${state.buttonsFilter[3].value}%)`
            ctx.translate(canvas.width / 2, canvas.height / 2);

            if (state.rotate !== 0) {
                ctx.rotate(state.rotate * Math.PI / 180);
            }

            ctx.scale(state.flipHorizontal, state.flipVertical);
            ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

            const link = document.createElement('a');
            link.download = `${previewImg.src}`;
            link.href = canvas.toDataURL();
            link.click(); 

            return {...state}
        }
}