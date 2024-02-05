var btn1 = document.getElementById('btn1');
var div1 = document.getElementById('div1');
btn1.addEventListener('click', function () { return div1.textContent = 'hello TypeScript'; });
function afficher() {
    div1.textContent = 'hello TypeScript';
}
