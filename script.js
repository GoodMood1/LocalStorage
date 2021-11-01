const colors = document.querySelector('#colors');
const radio = document.querySelectorAll('.choose input');


const loadColorTheme = () =>{
    let item = localStorage.getItem('colors');
    if(item != null) colors.setAttribute('href', item);
    for (const elem of radio) {
        if(elem.value == item) elem.setAttribute('checked', 'checked');
    }
}

for (const elem of radio) {
    elem.addEventListener('click', ()=>{
        apply.addEventListener('click', ()=>{
                colors.setAttribute('href', elem.value);
                localStorage.setItem('colors', elem.value);
        })
    })
}
function ready() {
    if(document.cookie==5){alert('You won 1 million $!');document.cookie=0}
    o=Number(document.cookie)+1;
    document.cookie = `${o}`; 
  }
loadColorTheme();
window.addEventListener('beforeunload', loadColorTheme);

document.addEventListener("DOMContentLoaded", ready);