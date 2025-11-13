
// let Images = []
// for (let i = 0; i < 500 ; i ++){
//     let obj = {
//         id : i ,
//         img : `src ${i + 1}`
//     }
//     Images.push(obj)
// }



import img1 from "./images/img1.jpg"
// import img2 from "./images/img2"
// import img3 from "./images/img3"
// import img4 from "./images/img4"
// import img5 from "./images/img5"
// import img6 from "./images/img6"
// import img7 from "./images/img7"
// import img8 from "./images/img8"
// import img9 from "./images/img9"




const Images = Array.from({length : 10}, (_, i) => ({
    id : i ,
    src :  img1
}))

export const InitalStateItems = {
   Images,
}
