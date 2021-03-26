// JS Goes here - ES6 supported

import "./css/style.scss";

alert(
    'w3lcome, look behind u 🔙'
)

let body = document.body;

let checkThis = document.querySelector('.check-this');

checkThis.addEventListener('mouseover', function(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    body.style.setProperty('background-color', 'rgb(' +r+ ',' +g+ ',' +b+')');
})

function rotate() {
    let all = document.body.querySelectorAll('*');
    let x = Math.floor(Math.random() * 180);

    for (each of all) {
        each.style.setProperty('transform', 'rotateZ(' +x+ 'deg)');
    }
}

// setTimeout(rotate(), 3000);
// a function that calls another function after a certain period of time.

// setTimeout(function(){
//     rotate()
// }, 3000);

document.addEventListener('mousemove', rotate);

