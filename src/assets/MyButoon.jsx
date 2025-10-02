import { useState } from "react";

function MyButoon() {
  const [firstNumber, setfistSetNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [result, setResult] = useState();
  const firstNumberHandller = (event) => {
    console.log(typeof event.target.value);
    setfistSetNumber(event.target.value);
  };
  const secondNumberHandller = (event) => {
    console.log(event.target.value);
    setSecondNumber(event.target.value);
  };
  const resultHandller = () => {
    setResult(Number(firstNumber) + Number(secondNumber));
  };

  return (
    <>
      <lable>Enter FIRST NUMBER: </lable>
      <input value={firstNumber} onChange={firstNumberHandller} />
      <hr></hr>
      <label>ENTER SECOND NUMBER:</label>
      <input value={secondNumber} onChange={secondNumberHandller} />
      <hr></hr>
      <button onClick={resultHandller}>Count</button>
      <label>{result}</label>
    </>
  );
}

export default MyButoon;
