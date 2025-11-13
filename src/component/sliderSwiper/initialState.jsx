
let Images = []
for (let i = 0; i < 500 ; i ++){
    let obj = {
        id : i ,
        img : `src ${i + 1}`
    }
    Images.push(obj)
}

export const InitalStateItems = {
   Images,
}