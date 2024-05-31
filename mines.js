
const mine_fields = document.querySelectorAll('.child')
export const limit_mines = 39;
let minesplanted = 0;


export function start_Count() {
    minesplanted = 0
}


export const Applymines = () => {
    mine_fields.forEach((block) => {
        const a = Math.random()
        const b = Math.random()
        if (minesplanted < limit_mines && a<b && !block.classList.contains('bomb')) {
            minesplanted++
            block.classList.add('bomb')
        }
    })
    if (minesplanted < limit_mines) {
        Applymines()
    }
    console.log('Planted', minesplanted)
}