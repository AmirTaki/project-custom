
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
import img10 from "./images/pins (1).jpg"
import img12 from "./images/pins (2).jpg"
import img13 from "./images/pins (3).jpg"
import img14 from "./images/pins (4).jpg"
import img15 from "./images/pins (5).jpg"
import img16 from "./images/pins (6).jpg"
import img17 from "./images/pins (7).jpg"
import img18 from "./images/pins (8).jpg"
import img19 from "./images/pins (9).jpg"
import img20 from "./images/pins (10).jpg"
import img21 from "./images/pins (11).jpg"
import img22 from "./images/pins (12).jpg"
import img23 from "./images/pins (13).jpg"
import img24 from "./images/pins (14).jpg"
import img25 from "./images/pins (15).jpg"
import img26 from "./images/pins (16).jpg"
import img27 from "./images/pins (17).jpg"
import img28 from "./images/pins (18).jpg"
import img29 from "./images/pins (19).jpg"
import img30 from "./images/pins (20).jpg"



const im = [img1, img2,img3, img4, img5, img6, img7, img8, img9, ]
const Images = Array.from({length : 10}, (_, i) => ({
    id : i ,
    src :  im[i]
}))

export const InitalStateItems = {
   Images,
}
