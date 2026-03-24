function calculate(){

let S1 = Number(document.getElementById("S1").value);
let S2 = Number(document.getElementById("S2").value);
let S3 = Number(document.getElementById("S3").value);
let S4 = Number(document.getElementById("S4").value);
let S5 = Number(document.getElementById("S5").value);
let S6 = Number(document.getElementById("S6").value);
let S7 = Number(document.getElementById("S7").value);
let S8 = Number(document.getElementById("S8").value);
let total = S1+S2+S3+S4+S5+S6+S7+S8;
let totaltext = document.getElementById("total");
let result = document.getElementById("result");
totaltext.innerHTML="Total marks:" + total;
if(S1>100 || S2>100){
    result.innerHTML="marks cannot be more than 100";
    return;
}
if(total < 400){
    result.innerHTML = "Fail";
    result.style.color = "Red";
}
else if(total < 500){
    result.innerHTML = "Third Division";
    result.style.color="Oragne";
}
else if(total < 600){
    result.innerHTML = "Second Division";
    result.style.color="Pink";
}
else if(total < 700){
    result.innerHTML = "First Division";
    result.style.color="Blue";
}
else{
    result.innerHTML = "Distinction";
    result.style.color = "Green";
}
}