
/*
let number1="";
let number2="";

number1=new Number();
number2=new Number();

console.log(number1=number2);

console.log(typeof number1);
console.log(typeof number2);
*/

function add() {
    let number1 =Number(document.getElementById("number1").value);
    let number2 =Number(document.getElementById("number2").value);
    let output =document.getElementById("output")
    
    output.innerHTML=number1+number2;
}

function sub() {
    let number1 =Number(document.getElementById("number1").value);
    let number2 =Number(document.getElementById("number2").value);
    let output =document.getElementById("output")
    
    output.innerHTML=number1-number2;
}

function mult() {
    let number1 =Number(document.getElementById("number1").value);
    let number2 =Number(document.getElementById("number2").value);
    let output =document.getElementById("output")
    
    output.innerHTML=number1*number2;
}

function div() {
    let number1 =Number(document.getElementById("number1").value);
    let number2 =Number(document.getElementById("number2").value);
    let output =document.getElementById("output")
    
    output.innerHTML=number1/number2;
}



