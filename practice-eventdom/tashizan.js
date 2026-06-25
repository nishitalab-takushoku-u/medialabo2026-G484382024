function greeting(){
    let i1 = document.querySelector('input[name="left"]');
    let i2 = document.querySelector('input[name="right"]');
    let num1 = Number(i1.value);
    let num2 = Number(i2.value);
    let sum = num1 + num2;
    let answer = document.querySelector("#answer");
    answer.textContent = sum;
}

let b = document.querySelector('button#calc');
b.addEventListener('click', greeting);

let p = document.querySelector('p#message');