
const whitechipBTN = document.getElementById("white"); // 1
const bluechipBTN = document.getElementById("blue"); // 5
const greenchipBTN = document.getElementById("green"); // 25
const redchipBTN = document.getElementById("red"); // 50 
const blackchipBTN = document.getElementById("black"); //100
let wagerinput=document.getElementById("amountwagered");

blackchipBTN.addEventListener('click', function(){
    betamount(100);
});
whitechipBTN.addEventListener('click', function(){
    betamount(1);
});
bluechipBTN.addEventListener('click', function(){
    betamount(5);
});
greenchipBTN.addEventListener('click', function(){
    betamount(25);
});
redchipBTN.addEventListener('click', function(){
    betamount(50);
});
// let y=null;
function betamount(chipval){
    console.log("chip clicked:"+ chipval);
    let x= parseInt(wagerinput.value);
    wagerinput.value =  x+chipval;
    y=wagerinput.value
}


// // https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

