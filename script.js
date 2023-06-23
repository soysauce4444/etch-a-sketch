const container = document.querySelector('.container');

function getNum () {
    num = prompt("Enter a value for n: ", 1)
    return num;
}

function makeDivs() {
    for (i = 0; i < 16; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        //num++;
    }
    //console.log(num)
    //return num;
}

let num = 0;
makeDivs();
