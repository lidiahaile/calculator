import "./style.scss";

//Elements HTML access
const resultBox = document.querySelector<HTMLDivElement>(".calculator__result-box");
const operators = document.querySelector<HTMLButtonElement>("#operators");
const numbers = document.querySelectorAll<HTMLButtonElement>("#number");
const equalTo =document.querySelector<HTMLButtonElement>(".calculator__button2--equal");
const clearBtn =document.querySelector<HTMLButtonElement>(".calculator__button1--c");




//Throw an error
if(!resultBox || !operators || !numbers || !equalTo ||!clearBtn){
    throw new Error ("Issue with selectors");
}

let variableOne = "";
let variableTwo = "";
let operator = "";


//event listeners for numbers buttons
const handleNumberClick = (event : Event) =>{
    console.log("clicked button event",event);
   const clickedNumber = event.target.innerText
    if (operator === "") {
       variableOne += Number( clickedNumber);
       resultBox.innerText= Number(variableOne);
    } else {
        variableTwo += Number( clickedNumber);
        resultBox.innerText= Number(variableTwo);
        };
};
numbers.forEach((num)=>{
    num.addEventListener("click", handleNumberClick)
});




