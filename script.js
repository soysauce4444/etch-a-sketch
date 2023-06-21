const container = document.querySelector('.container');

function getNum () {
    num = prompt("Enter a value for n: ", 1)
    return num;
}

function getDivs() {
    for (i = 0; i < 16; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        //num++;
    }
    //console.log(num)
    //return num;
}

function getSqrt(num) {
    let i = 1;
    while (i * i < num) {
        i++;
        (i * i == num) ? sqrt = i :
        ++sqrt;
    }
    return (Math.floor(sqrt));
}

let num = 0;
let sqrt = 1;
getNum();
getDivs();
console.log(getSqrt(num));