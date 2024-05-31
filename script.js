const load = document.getElementById("reload")
import { Applymines , start_Count } from "./mines.js"
import { check_mines , start_Filter } from "./checkmines.js"
import { sweepAll } from "./sweep.js"

function play() {
    check_mines()
}

export const start = () => {
    start_Count()
    start_Filter()
    Applymines()
    play()
}

start()

load.addEventListener("click",()=>{
    sweepAll()
    start() 
})

