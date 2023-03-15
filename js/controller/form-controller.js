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

    //Função de change da altura
    state.inputHeight.addEventListener("change", (event) => {
        if(!event.target.value || event.target.value === ""){
            showErrorInput('height', "Campo Obrigatório");
            changeColorInput('height', "input-error");
        }
        else{
            showErrorInput('height', "");
            state.inputHeight.classList.remove("input-error");
        }
    });

    //Função de change do peso
    state.inputWeight.addEventListener("change", (event) => {
        if(!event.target.value || event.target.value === ""){
            showErrorInput('weight', "Campo Obrigatório");
            changeColorInput('weight', "input-error");
        }
        else{
            showErrorInput('weight', "");
            state.inputWeight.classList.remove("input-error");
        }
    });

    //Função de clique do botão de limpar
    state.btnClear.addEventListener('click', (event) => {
        event.preventDefault();
        clearForm();
        state.inputHeight.focus();
        showErrorInput('height', "");
        showErrorInput('weight', "");
        state.inputHeight.classList.remove("input-error");
        state.inputWeight.classList.remove("input-error");
    });
}


//Funções secundárias

function clearForm(){
    state.inputHeight.value = "";
    state.inputWeight.value = "";
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