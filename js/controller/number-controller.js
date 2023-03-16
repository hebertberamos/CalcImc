//Função que faça com que o valor seja lançado para que o usuário veja, mas que caso algum dos inputs não estejam 
//com um valor deverá tanto não calcular nada, como também deve mostrar na tela que o campo deve estar preenchido
import Constructor from './models/constructor.js';

export function calc(height, weight){
    const heightNumber = +height;
    const weightNumber = +weight;
    const result = weightNumber / (heightNumber * heightNumber);
    return result.toFixed(2);
}

export function getErrors(address){
    const errors = {}

    if (!address.height || address.height == "") {
        errors.height = "*Campo obrigatório";
    }

    if(!address.weight || address.weight == ""){
        errors.weight = "*Campo obrigatório";
    }

    return errors;
}