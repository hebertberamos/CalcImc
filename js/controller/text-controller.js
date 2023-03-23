import TextConstructor from "./models/text.contructor.js";

function State() {
    this.textConstructor = new TextConstructor();
}

const state = new State();

export function init(){
    state.sectionText = document.querySelector("#resp-section");
    state.divChanged = document.querySelector("#div-changed");
    state.titleText = document.querySelector("#title-text");
    state.text = document.querySelector("#text");

    console.log(state.titleText.innerHTML);
}

// export function changDiv(value){

//     const h2 = document.createElement("h2");
//     const titleText = getTitle(value);
//     h2.innerHTML = titleText;

//     const p = document.createElement("p");
//     const textValue = getText(value);
//     p.innerHTML = textValue;

//     state.divChanged.appendChild(h2);
//     state.divChanged.appendChild(p);
    
// }

export function changeDiv(result){
    changTitle(result);
    changText(result)
}

function changTitle(value){
    const title = getTitle(value);
    state.titleText.innerHTML = title;
    return state.titleText.innerHTML;
}

function changText(value){
    const text = getText(value);
    state.text.innerHTML = text;
    return state.text.innerHTML;
}


// export function addCard(value){
//     const typeImc = createCard(value);
//     state.sectionText.appendChild(typeImc);
// }

//fazer função que pegue a div que foi criada anteriorment e delete ela quando o botão de calcular for clicado


// function createCard(value){
//     const div = document.createElement("div");
//     div.classList.add("card-text");

//     const h2 = document.createElement("h2");
//     const titleText = getTitle(value);
//     h2.innerHTML = titleText;

//     const p = document.createElement("p");
//     const textValue = getText(value);
//     p.innerHTML = textValue;

//     div.appendChild(h2);
//     div.appendChild(p);

//     return div;
// }

function getTitle(value){
    const titleThinness = "MAGREZA";
    const titleNormal = "NORMAL";
    const titleOverweight = "SOBREPESO"

    if(value < 18.5){
       state.textConstructor.titleText = titleThinness;
       return state.textConstructor.titleText;
    } else if(value >= 18.5 && value <=24.9){
        state.textConstructor.titleText = titleNormal;
        return state.textConstructor.titleText;
    } else {
        state.textConstructor.titleText = titleOverweight;
        return state.textConstructor.titleText;
    }
}

function getText(value){
    const overweight = "O sobrepeso pode causar alguns problemas de circulação no corpo, além de fadiga. Mas assim como a magreza leve, se o IMC estiver pouco acima de 25, não é preocupante. Ou seja, uma dieta com um pouco menos de calorias ou um pouco mais de exercícios na rotina pode resolver a situação.\nObesidade grau I(30 a menor que 35)\nAcima do IMC 30 a pessoa é considerada obesa, o que por si só já é uma doença. Graças ao peso, o risco para diversas condições aumenta consideravelmente. Um médico pode indicar um meio ideal para a regulação do peso.\nObesidade grau II(35 a menor que 40)\nEstar com obesidade grau II é ter riscos elevados de diabetes, hipertensão, além de câncer e infarto. Procure um médico para lidar com a situação.\nIMC Obesidade grau III(Maior que 40)\nChamada de obesidade mórbida, esta condição representa sérios riscos à saúde. Procure ajuda médica.";
    const normal = "Essa classificação garante um risco menor para diversas doenças que variam de anemia a infarto. Estar nessa classificação é estar no peso ideal para seu corpo, mas é bom lembrar de verificar a circunferência da cintura em busca de excesso de gordura.\nMas, para mulheres, a cintura deve ter até 80 cm. Para homens, até 94 cm. Por outro lado, a cintura deve ser medida logo abaixo das costelas.";
    const thinness = "Magreza grave(Menor que 16)\nA magreza grave (IMC abaixo de 16) é uma condição que pode ser causada por desnutrição severa. Assim, consulte um médico, pois este peso é uma ameaça à saúde.\nMagreza moderada(16 a menor que 17)\nCondições hormonais, como o hipertireoidismo, podem afetar o peso de uma pessoa, além de parasitas ou simplesmente uma dieta com poucas calorias diárias. Nesse sentido, você pode consultar um médico para ter certeza de que não tem nada de errado.\nMagreza leve(17 a menor que 18,5)\nPode ter algumas consequências, mas no geral não é preocupante. Logo, um IMC acima de 17 não fica muito longe do saudável.";

    if(value < 18.5){
        state.textConstructor.text = thinness;
        return state.textConstructor.text;
    } else if(value >= 18.5 && value <=24.9){
        state.textConstructor.text = normal;
        return state.textConstructor.text;
    } else {
        state.textConstructor.text = overweight;
        return state.textConstructor.text;
    }
}