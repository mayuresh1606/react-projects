import { useState } from 'react';
import './App.css';

function App() {
  
  const [currentOperand, setCurrentOperand] = useState(0);
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState("");

  function appendCurrentOperand (value){
    
    if (currentOperand === 0){
      setCurrentOperand(value);
    }else if(value === "."){
      setCurrentOperand(String(currentOperand) + value);
    }
    else{
      setCurrentOperand(Number(String(currentOperand) + value));
    }
  }

  function updateOperator(operator){
    if (currentOperand !== 0){
      setPreviousOperand(currentOperand);
      setOperation(operator);
      setCurrentOperand(0);
    }
  }

  function allClear(){
    setCurrentOperand(0);
    setPreviousOperand("")
    setOperation("");
  }

  function deleteLastPlace(){
    let tempCurrentOperand = String(currentOperand);
    setCurrentOperand(tempCurrentOperand.split("").splice(0, tempCurrentOperand.length - 1).join(""))
    // setCurrentOperand(currentOperand.splice(0, currentOperand.length - 2));
  }

  function evaluate(){
    if (operation === '*'){
      setOperation(operation + " " + String(currentOperand))
      setCurrentOperand(currentOperand * previousOperand);
    }
    if (operation === '+'){
      setOperation(operation + " " + String(currentOperand))
      setCurrentOperand(currentOperand + previousOperand);
    }
    if (operation === '-'){
      setOperation(operation + " " + String(currentOperand))
      setCurrentOperand(previousOperand - currentOperand);
    }
    if (operation === '÷'){
      setOperation(operation + " " + String(currentOperand))
      if (String(currentOperand).split("").includes(".") || String(previousOperand).split("").includes(".")){
        setCurrentOperand(parseFloat(previousOperand) / parseFloat(currentOperand));
      }else{
        setCurrentOperand(parseFloat(Number(currentOperand) / Number(previousOperand)));
      }
    }
  }
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={allClear}>AC</button>
      <button onClick={deleteLastPlace}>DEL</button>
      <button onClick={(e) => updateOperator(e.currentTarget.textContent)}>÷</button>
      <button onClick={(e) => appendCurrentOperand(e.currentTarget.textContent)}>1</button>
      <button onClick={(e) => appendCurrentOperand(e.currentTarget.textContent)}>2</button>
      <button onClick={(e) => appendCurrentOperand(e.currentTarget.textContent)}>3</button>
      <button onClick={(e) => updateOperator(e.currentTarget.textContent)}>*</button>
      <button onClick={(e) => appendCurrentOperand(e.currentTarget.textContent)}>4</button>
      <button onClick={(e) => appendCurrentOperand(e.currentTarget.textContent)}>5</button>
      <button onClick={(e) => appendCurrentOperand(e.currentTarget.textContent)}>6</button>
      <button onClick={(e) => updateOperator(e.currentTarget.textContent)}>+</button>
      <button onClick={(e) => appendCurrentOperand(e.currentTarget.textContent)}>7</button>
      <button onClick={(e) => appendCurrentOperand(e.currentTarget.textContent)}>8</button>
      <button onClick={(e) => appendCurrentOperand(e.currentTarget.textContent)}>9</button>
      <button onClick={(e) => updateOperator(e.currentTarget.textContent)}>-</button>
      <button onClick={(e) => appendCurrentOperand(e.currentTarget.textContent)}>.</button>
      <button onClick={(e) => appendCurrentOperand(e.currentTarget.textContent)}>0</button>
      <button onClick={evaluate} className='span-two'>=</button>
    </div>
  );
}

export default App;