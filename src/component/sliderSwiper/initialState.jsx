
// let Images = []
// for (let i = 0; i < 500 ; i ++){
//     let obj = {
//         id : i ,
//         img : `src ${i + 1}`
//     }
//     Images.push(obj)
// }



import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
import img5 from "./images/img5.jpg"
import img6 from "./images/img6.jpg"
import img7 from "./images/img7.jpg"
import img8 from "./images/img8.jpg"
import img9 from "./images/img9.jpg"



const im = [img1, img2,img3, img4, img5, img6, img7, img8, img9, ]
const Images = Array.from({length : 10}, (_, i) => ({
    id : i ,
    src :  im[i]
}))

export const InitalStateItems = {
   Images,
}
