import {limit_mines} from './mines.js'
let mines_detected = 0

export function winner() {
    mines_detected++;

    if (mines_detected === (100 - limit_mines)){
        return true
    }
    else return false
    
}