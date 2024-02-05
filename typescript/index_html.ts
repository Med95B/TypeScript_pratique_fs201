
const btn1 = document.getElementById('btn1') as HTMLButtonElement
const div1 = document.getElementById('div1') as HTMLDivElement

btn1.addEventListener('click',()=>div1.textContent='hello TypeScript')

function afficher():void{
    div1.textContent='hello TypeScript'
}

