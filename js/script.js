const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height")
const btnCalc = document.querySelector("#btnCalc");

inputWeight.addEventListener('change', handleInputWeight);
inputHeight.addEventListener('change', handleInputHeight);
btnCalc.addEventListener("click", handleBtnCalc);

function handleInputWeight(event){
    let eventNumberWeight = parseFloat(event.target.value)
    console.log(eventNumberWeight);
}

function handleInputHeight(event){
    let eventNumberHeight = parseFloat(event.target.value)
    console.log(eventNumberHeight);
}

function calcImc(weight, height){
    const calc = weight / (height * height);
    console.log(calc);
}

function handleBtnCalc(eventNumberWeight, eventNumberHeight){
    
    console.log("clicked");
}