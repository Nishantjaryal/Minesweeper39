const mine_fields = document.querySelectorAll('.child')


export function blastAll() {
    mine_fields.forEach(element => {
        if (element.classList.contains('bomb')) {
            element.classList.add('blast')
        }
    })
}