const container = document.querySelector('.container');

let num = 0;
function getNum () {
    const x = prompt("Enter a value for n: ", 1);
    return parseInt(x);
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
     num = getNum();
    console.log(num);
});

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

makeDivs();