let confirmed = 0;
const mine_fields = document.querySelectorAll('.child')

export const check_Surroundings = (index) => {
    const remainder = index % 10;


    if (mine_fields[index - 10] && mine_fields[index - 10].classList.contains('bomb')) confirmed++;
    if (mine_fields[index - 11] && remainder!==0 && mine_fields[index - 11].classList.contains('bomb')) confirmed++;
    if (mine_fields[index + 9] && remainder!==0 && mine_fields[index + 9].classList.contains('bomb')) confirmed++;
    if (mine_fields[index - 1] && remainder!==0 && mine_fields[index - 1].classList.contains('bomb')) confirmed++;
    if (mine_fields[index + 10] && mine_fields[index + 10].classList.contains('bomb')) confirmed++;
    if (mine_fields[index + 11] && remainder!==9 && mine_fields[index + 11].classList.contains('bomb')) confirmed++;
    if (mine_fields[index - 9] && remainder!==9  && mine_fields[index - 9].classList.contains('bomb')) confirmed++;
    if (mine_fields[index + 1] && remainder!==9 && mine_fields[index + 1].classList.contains('bomb')) confirmed++;



    console.log(confirmed)
    mine_fields[index].innerText = `${confirmed}`
    confirmed=0


}