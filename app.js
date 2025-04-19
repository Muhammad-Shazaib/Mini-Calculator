document.getElementById("addition").onclick = function () {
    let add1 = +prompt("enter a first number '12345'");
    let add2 = +prompt("enter a second number'678910'");
    let addResult = add1 + add2;
    alert(addResult);
};

document.getElementById('subtraction').onclick = function (){
let sub1= +prompt("enter a first number '12345'");
let sub2= +prompt("enter a second number '678910'");
let subResult= sub1 - sub2;
alert(subResult);

};



document.getElementById('multiplication').onclick = function (){
    let mul1 =+prompt("enter a first number '12345'");
    let mul2 =+prompt("enter a second number '678910'");
    let mulResult = mul1 * mul2;
    alert(mulResult);
};

document.getElementById('division').onclick = function (){
    let div1 = +prompt("enter a first number '12345'");
    let div2 = +prompt("enter a second number '678910'");
    let divResult = div1 / div2;
    alert(divResult);
}