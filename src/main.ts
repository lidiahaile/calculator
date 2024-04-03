import "./style.scss";

//Elements HTML access
const resultBox = document.querySelector<HTMLDivElement>(".calculator__result-box");
const operators = document.querySelector<HTMLButtonElement>("#operators");
const valueNum = document.querySelectorAll<HTMLButtonElement>("#number");
const equalTo =document.querySelector<HTMLButtonElement>(".calculator__button2--equal");
const clearBtn =document.querySelector<HTMLButtonElement>(".calculator__button1--c");




//Throw an error
if(!resultBox || !operators || !valueNum || !equalTo){
    throw new Error ("Issue with selectors");
}

let variableOne = "";
let variableTwo = "";
let Operator = "";







