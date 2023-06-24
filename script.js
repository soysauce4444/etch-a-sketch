const container = document.querySelector('.container');

let num = 0;
function getNum () {
    const x = prompt("Enter a value for n: ", 1);
    return parseInt(x);
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

function setGrid() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        num = getNum();
        makeDivs(num);
        changeClr();
    });
}

setGrid();
