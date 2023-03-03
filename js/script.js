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

function calcResult(weight, height){
    return weight / (height * height);
}

function handleBtnCalc(){
    console.log("clicked");
}