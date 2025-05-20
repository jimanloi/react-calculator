import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import { evaluate } from "mathjs";

function App() {
  const [expression, setExpression] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const handleClick = (value: string) => {
    if (isCalculated) {
      setExpression(value);
      setIsCalculated(false);
    } else {
      setExpression((prevExp) => prevExp + value);
    }
  };

  const handleCal = () => {
    try {
      setExpression(evaluate(expression).toString());
      setIsCalculated(true);
    } catch {
      setExpression("Error");
      setIsCalculated(true);
    }
  };

  return (
    <>
      <h1>Calculator</h1>
      <Display>{expression}</Display>
      <div className="card">
        <Button text="7" className="buttons" onClick={() => handleClick("7")} />
        <Button text="8" className="buttons" onClick={() => handleClick("8")} />
        <Button text="9" className="buttons" onClick={() => handleClick("9")} />
        <Button text="÷" className="buttons" onClick={() => handleClick("/")} />
        <Button text="4" className="buttons" onClick={() => handleClick("4")} />
        <Button text="5" className="buttons" onClick={() => handleClick("5")} />
        <Button text="6" className="buttons" onClick={() => handleClick("6")} />
        <Button text="x" className="buttons" onClick={() => handleClick("*")} />
        <Button text="1" className="buttons" onClick={() => handleClick("1")} />
        <Button text="2" className="buttons" onClick={() => handleClick("2")} />
        <Button text="3" className="buttons" onClick={() => handleClick("3")} />
        <Button text="-" className="buttons" onClick={() => handleClick("-")} />
        <Button text="0" className="zero" onClick={() => handleClick("0")} />
        <Button text="." className="buttons" onClick={() => handleClick(".")} />
        <Button text="+" className="buttons" onClick={() => handleClick("+")} />
        <Button text="=" className="buttons" onClick={handleCal} />
      </div>
    </>
  );
}

export default App;
