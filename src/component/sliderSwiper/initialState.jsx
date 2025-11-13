
// let Images = []
// for (let i = 0; i < 500 ; i ++){
//     let obj = {
//         id : i ,
//         img : `src ${i + 1}`
//     }
//     Images.push(obj)
// }


const Images = Array.from({length : 500}, (_, i) => ({
    id : i ,
    src : `src ${i + 1}` 
}))

export const InitalStateItems = {
   Images,
}
