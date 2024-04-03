import "./style.scss";

//Elements access
const resultBox = document.querySelector<HTMLDivElement>(".calculator__result-box");
const operators = document.querySelector<HTMLButtonElement>("#operators");
const valueNum = document.querySelectorAll<HTMLButtonElement>("#number");
const equalTo =document.querySelector<HTMLButtonElement>(".calculator__button2--equal");



//Throw an error
if(!resultBox || !operators || !valueNum || !equalTo){
    throw new Error ("Issue with selectors");
}








