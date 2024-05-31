
const mine_fields = document.querySelectorAll('.child')

// clear all previous mines for reloding purpose


export const sweepAll = () => {
    mine_fields.forEach((block) => {
        
        if (block.classList.contains('bomb')) {
            block.classList.remove('bomb') 
        }
        if (block.classList.contains('clicked')){
            block.classList.remove('clicked')
        }
        if (block.classList.contains('blast')){
            block.classList.remove('blast')
        }
        if (block.innerText !== ''){
            block.innerText = ''
        }
        
    })
    console.log("sweeped")

}
