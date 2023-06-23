const container = document.querySelector('.container');

function getNum () {
    num = prompt("Enter a value for n: ", 1)
    return num;
}

function makeDivs() {
    for (i = 0; i < 16; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
    }
    const divs = document.querySelectorAll('.container > div');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add('changeClr');
        });
    });
}

let num = 0;
makeDivs();