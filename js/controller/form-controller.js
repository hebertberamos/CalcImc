function State(){
    this.inputHeight = null;
    this.inputWeight = null;

    this.btnCalc = null;
    this.btnClear = null;

    this.errorHeight = null;
    this.errorWeight = null
}

const state = new State();

export function init(){
    state.inputHeight = document.forms.answarForm.height;
    state.inputWeight = document.forms.answarForm.weight;
    state.btnCalc = document.forms.answarForm.btnCalc;
    state.btnClear = document.forms.answarForm.btnClear;

    state.errorHeight = document.querySelector('[data-error="height"]');
    state.errorWeight = document.querySelector('[data-error="weight"]');

    state.inputHeight.addEventListener("change", handleInputHeightChange);
    state.inputWeight.addEventListener("change", handleInputWeightChange);
}


function handleInputHeightChange(event){
    if(!event.target.value || event.target.value === ""){
        showErrorInput('height', "Campo Obrigatório");
        changeColorInput('height', "input-error");
    }
    else{
        showErrorInput('height', "");
        state.inputHeight.classList.remove("input-error");
    }
}

function handleInputWeightChange(event){
    if(!event.target.value || event.target.value === ""){
        showErrorInput('weight', "Campo Obrigatório");
        changeColorInput('weight', "input-error");
    }
    else{
        showErrorInput('weight', "");
        state.inputWeight.classList.remove("input-error");
    }
}

function showErrorInput(key, value){
    const error = document.querySelector(`[data-error=${key}]`);
    error.innerHTML = value;
}

function changeColorInput(key, className){
    const input = document.querySelector(`#${key}`);
    input.classList.add(className);
}

function removeClass(key, className){
    const input = document.querySelector(`#${key}`);
    input.classList.remove(className);
}