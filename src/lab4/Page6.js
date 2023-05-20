import React, { useState } from 'react';

function Page6() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleDigitClick = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  };

  const handleOperatorClick = (operator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator && !waitingForSecondOperand) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplayValue(result);
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(operator);
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleEqualsClick = () => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand !== null && !waitingForSecondOperand) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplayValue(result);
      setFirstOperand(null);
      setOperator(null);
    }
  };

  const handleSquareRootClick = () => {
    const inputValue = parseFloat(displayValue);
    const result = Math.sqrt(inputValue).toString();
    setDisplayValue(result);
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(true);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return (firstOperand + secondOperand).toString();
      case '-':
        return (firstOperand - secondOperand).toString();
      case '*':
        return (firstOperand * secondOperand).toString();
      case '/':
        return (firstOperand / secondOperand).toString();
      case '%':
        return (firstOperand * (secondOperand / 100)).toString();
      case '^':
        return Math.pow(firstOperand, secondOperand).toString();
      default:
        return secondOperand.toString();
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleDigitClick('7')}>7</button>
        <button onClick={() => handleDigitClick('8')}>8</button>
        <button onClick={() => handleDigitClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleDigitClick('4')}>4</button>
        <button onClick={() => handleDigitClick('5')}>5</button>
        <button onClick={() => handleDigitClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleDigitClick('1')}>1</button>
        <button onClick={() => handleDigitClick('2')}>2</button>
        <button onClick={() => handleDigitClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleDigitClick('0')}>0</button>
        <button onClick={handleDecimalClick}>.</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('%')}>%</button>
        <button onClick={handleSquareRootClick}>√</button>
        <button onClick={() => handleOperatorClick('^')}>^</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
}

export default Page6;
