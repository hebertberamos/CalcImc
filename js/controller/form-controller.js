import Constructor from './models/constructor.js';
import * as numberController from './number-controller.js';
import * as textController from './text-controller.js';
import TextConstructor from './models/text.contructor.js';

function State(){

    this.constructor = new Constructor();
    this.TextConstructor = new TextConstructor()

    this.inputHeight = null;
    this.inputWeight = null;
    this.responseNumber = null;

    this.btnCalc = null;
    this.btnClear = null;

    this.divName = null;

    this.errorHeight = null;
    this.errorWeight = null
}

const state = new State();

export function init(){
    state.inputHeight = document.forms.answarForm.height;
    state.inputWeight = document.forms.answarForm.weight;
    state.responseNumber = document.querySelector("#response-number");
    state.btnCalc = document.forms.answarForm.btnCalc;
    state.btnClear = document.forms.answarForm.btnClear;

    state.errorHeight = document.querySelector('[data-error="height"]');
    state.errorWeight = document.querySelector('[data-error="weight"]');

//Função de alteração no input, colocando um ponto entre os dois primerios números
    state.inputHeight.addEventListener("input", function() {
        const value = state.inputHeight.value;

        if(value.length >= 2 && !value.includes(".")) {
            const newValue = (value.slice(0,1) + "." + value.slice(1));
            const numberNewValue = newValue
            state.inputHeight.value = numberNewValue;
        }
    });
//Função de change da altura
    state.inputHeight.addEventListener("change", (event) => {
        if(!event.target.value || event.target.value === ""){
            showErrorInput('height', "Campo Obrigatório");
            changeColorInput('height', "input-error");
            state.constructor.height = "";
        }
        else{
            showErrorInput('height', "");
            state.inputHeight.classList.remove("input-error");
            state.constructor.height = event.target.value;
        }
    });

//Função de change do peso
    state.inputWeight.addEventListener("change", (event) => {
        if(!event.target.value || event.target.value === ""){
            showErrorInput('weight', "Campo Obrigatório");
            changeColorInput('weight', "input-error");
            state.constructor.weight = "";
        }
        else{
            showErrorInput('weight', "");
            state.inputWeight.classList.remove("input-error");
            state.constructor.weight = event.target.value;
        }
    });

//Função de clique do botão de limpar
    state.btnClear.addEventListener('click', (event) => {
        event.preventDefault();
        clear();
        state.inputHeight.focus();
        showErrorInput('height', "");
        showErrorInput('weight', "");
        state.inputHeight.classList.remove("input-error");
        state.inputWeight.classList.remove("input-error");
    });

//Função de "click" do botão de calcular
    state.btnCalc.addEventListener('click', (event) => {
        event.preventDefault();

        const errors = numberController.getErrors(state.constructor);
        
    //Função Objecto.keys
    //verifica se os campos de input estão devidamente preenchidos
        const keys = Object.keys(errors);
        if(keys.length > 0){
            for(let i = 0; i < keys.length; i++){
                showErrorInput(keys[i], errors[keys[i]]);
                changeColorInput(keys[i], errors[keys[i]]);
            }
        }
        else{
            const result = numberController.calc(state.inputHeight.value, state.inputWeight.value);
            const resultNumber = Number(result);
            state.responseNumber.innerHTML = resultNumber;

            textController.changeDiv(resultNumber);
        }
    });
}


//Funções secundárias

function clear(){
    state.inputHeight.value = "";
    state.inputWeight.value = "";
    state.responseNumber.innerHTML = "";

    state.constructor = new Constructor();
}

function showErrorInput(key, value){
    const error = document.querySelector(`[data-error=${key}]`);
    error.innerHTML = value;
}

function changeColorInput(key, className){
    const input = document.querySelector(`#${key}`);
    className = "input-error"
    input.classList.add(className);
}