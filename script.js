const container = document.querySelector('.container');

function randInt (min, max) {
    return Math.floor (Math.random() * (max - min + 1) + min);
}

function makeClr () {
    const divs = document.querySelectorAll('.container > div'); 
    divs.forEach((div) =>{ 
        div.addEventListener('mouseover', () => {
            const r = randInt(0, 255);
            const g = randInt(0, 255);
            const b = randInt(0, 255);
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    });
}


let num = 0;
function getNum () {
    let x = 1;
    while (x) {
        const x = prompt("Enter a value for n: ", 4);
        if (x <= 100) {
            return parseInt(x);
        }
        else {
            alert('Please enter a value below 100');
            continue;
        }
    }
}

function makeDivs(y) {
    for (i = 0; i < y; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
    }
}

function changeClr() {
    const divs = document.querySelectorAll('.container > div');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add('changeClr');
        });
    });
}

let ratio = 0.0;
function setGrid () {
    const divs = document.querySelectorAll('.container > div');
    const ratio = 1 / Math.sqrt(num) * 100;
    divs.forEach((div) => {
        div.style.flex = `0 0 ${ratio}%`;
    });
}

function makeGrid() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        num = getNum() ** 2;
        makeDivs(num);
        //changeClr();
        setGrid();
        makeClr();
    });
}

makeGrid();
