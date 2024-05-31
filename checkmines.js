import { blastAll } from "./blast.js";
import { check_Surroundings } from "./checkSurrounding.js";
import { winner } from "./win.js";

const mine_fields = document.querySelectorAll('.child')
let filter_waka = true; // used to stop the game if it already ends 


export function start_Filter() {
    filter_waka = true
}


export function check_mines() {
    mine_fields.forEach((element, index) => 
{
    element.addEventListener('click',()=>{
        
        if(element.classList.contains('bomb') && filter_waka){
            blastAll()
            filter_waka = false; // used to stop the game if it already ends 
        }

        else if (filter_waka){

            element.classList.add('clicked') // to color the clicked element

            check_Surroundings(index)

            const Win = winner() // gives true or false
            if (Win) console.log('Congratulations, you won the game')


        }

    } , {
        once: true,
      })
});


}

