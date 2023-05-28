const firstNumber = Number(prompt('Enter first number: '));
let character = prompt('Choose one: +, -, *, / or %.');
let secondNumber = Number(prompt('Enter second number: '));
let result;

const addition = (firstNumber, secondNumber) => {
  result = firstNumber + secondNumber;
};

const subtraction = (firstNumber, secondNumber) => {
  result= firstNumber - secondNumber;
};

const multiplication = (firstNumber, secondNumber) => {
  result = firstNumber * secondNumber;
};

const divide = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
      alert(`Don't divide by zero!`);
    } else {
    result = firstNumber / secondNumber;
    }
};

const modulo = (firstNumber, secondNumber) => {
  result = firstNumber % secondNumber;
};
  
const actions = (character, firstNumber, secondNumber) => {

  switch(character) {
    case '+':
      addition(firstNumber, secondNumber);
      break;
      case '-':
      subtraction(firstNumber, secondNumber);
      break;
      case '*':
      multiplication(firstNumber, secondNumber);
      break;
      case '/':
      divide(firstNumber, secondNumber);
      break;
      case '%':
      modulo(firstNumber, secondNumber);
      break;
  }
  alert(result);
};

  let checkNumbers = (firstNumber, secondNumber, character) => {
  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
  alert('Something is not a number!'); 
    return;
  }
      actions(character, firstNumber, secondNumber);
};

checkNumbers(firstNumber, secondNumber, character);

while(true) {
  character = prompt('Choose one: +, -, *, / or %. Leave blank if you want to finish.');
  if(character === '') {
    break;
  }
  secondNumber = Number(prompt('Enter another number: '));
  checkNumbers(result, secondNumber, character);
};

alert('Finish!');
