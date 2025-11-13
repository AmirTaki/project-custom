export const Items = Array.from({length : 500} ,(_,i)=> `img: ${i + 1}`)

Object.from({length: 500}, (_, i) => `id : ${i} img : ${i+100} ` )
export const InitalStateItems = {
    images : [
        Items
    ]
}