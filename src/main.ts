import "./style.scss";

//Elements HTML access
const resultBox = document.querySelector<HTMLDivElement>(".calculator__result-box");
const operators = document.querySelectorAll<HTMLButtonElement>("#operators");
const numbers = document.querySelectorAll<HTMLButtonElement>("#number");
const equalTo =document.querySelector<HTMLButtonElement>(".calculator__button2--equal");
const clearBtn =document.querySelector<HTMLButtonElement>(".calculator__button1--c");
const dotButton =document.querySelector<HTMLButtonElement>(".calculator__button3--dot")
const signButton= document.querySelector<HTMLButtonElement>(".calculator__button1--sign")




//THROW NEW ERROR
if(!resultBox || !operators || !numbers || !equalTo ||!clearBtn || !dotButton || !signButton){
    throw new Error ("Issue with selectors");
}

let variableOne = "";
let variableTwo = "";
let operator = "";
let operationResult ="";


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





//EVENT LISTENER FOR CANCEL BUTTON

const handleCleanButton = ( event : Event) => {
console.log("Clicked C button event", event);
const clickedCleanButton =event.target.innerText;
resultBox.innerText='';
variableOne= '';
variableTwo= '';
operator= '';
}

clearBtn.addEventListener("click",handleCleanButton)



//EVENT LISTENER FOR DOT BUTTON
const handleDotButton = ( event : Event ) => {
    console.log("Clicked the dot button event", event)
    const clickedDotButton =event.target.innerText;
     resultBox.innerText=variableOne+= clickedDotButton;
     resultBox.innerText=variableTwo+= clickedDotButton;
  
}
dotButton.addEventListener("click", handleDotButton)

//EVENT LISTENER FOR POSITIVE/NEGATIVE BUTTON

const handleSignButton =( event : Event) => {
console.log("Clicked the positive/negative button event", event);
const clickedSignButton = event.target.innerText;
resultBox.innerText= variableOne += clickedSignButton;
resultBox.innerText= variableTwo += clickedSignButton;
}
signButton.addEventListener("click", handleSignButton)



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

//EVENT LISTENER FOR EQUAL BUTTON
const handleEqualToClick  = ( event :Event) =>{
     console.log("Clicked equal button event", event);
    const clickedEqualButton=event.target.innerText;

    if (operator ==="+"){
        operationResult= Number(variableOne) + Number(variableTwo);

    } else if(operator ==="x"){
        operationResult= Number(variableOne) *Number(variableTwo);
    }else if(operator === "-"){
        operationResult= Number(variableOne) - Number(variableTwo);
    }else if(operator=== "÷"){
        operationResult= Number(variableOne) / Number(variableTwo);
    }else if( operator==="%"){
         operationResult= Number(variableOne)/100;
    }
    resultBox.innerText= operationResult;
}
equalTo.addEventListener("click", handleEqualToClick )










