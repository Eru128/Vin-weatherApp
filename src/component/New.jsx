import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { evaluate } from 'mathjs';

const New = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  

  const goBack= useNavigate()

  function goHome(){
      goBack('/')
  }

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleEvaluate = () => {
    try {
      const result = evaluate(input);
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  return(
      <>
      <div>
      <div>
        <input type="text" value={input} readOnly />
        <div>{output}</div>
      </div>
      <div>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div>
        <button onClick={handleClear}>C</button>
      </div>
    </div>

      <button onClick={goHome}>
        Home
      </button>
  
    </>
  )
  
}

export default New;



// const [expression, setExpression] = useState('');
//   const [result, setResult] = useState('');

        
// const handleCalculate = () => {
//   try {
//     const res = eval(expression); // Use with caution
//     setResult(res);
//   } catch (error) {
//     setResult('Error');
//   }
// };

// return (
//   <>
//     <div>
//       <input 
//         type="text" 
//         value={expression} 
//         onChange={(e) => setExpression(e.target.value)} 
//         placeholder="e.g., 5 + 3 * 2"
//       />
//       <button onClick={handleCalculate}>Calculate</button>
//       <p>Result: {result}</p>
//     </div>