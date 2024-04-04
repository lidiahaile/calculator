import "./style.scss";

//Elements HTML access
const resultBox = document.querySelector<HTMLDivElement>(".calculator__result-box");
const operators = document.querySelectorAll<HTMLButtonElement>("#operators");
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


//EVENT LISTENER FOR NUMBER BUTTONS
const handleNumberClick = (event : Event) =>{
    console.log("Clicked number button event",event);
   const clickedNumber = event.target.innerText;
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



//EVENT LISTENER FOR OPERATORS BUTTONS
const handleOperatorsClick = ( event :Event) =>{
    console.log("Clicked operator button event", event);
     const clickedOpButton = event.target.innerText;
    operator = clickedOpButton;
    resultBox.innerText= operator;
}

operators.forEach((opButton) =>{
    opButton.addEventListener("click", handleOperatorsClick )
});

//EVENT LISTENERS FOR CANCEL BUTTON

const handleCleanButton = ( event : Event) => {
console.log("Clicked C button event", event);
const clickedCleanButton =event.target.innerText;
resultBox.innerText='';
}

clearBtn.addEventListener("click",handleCleanButton)




