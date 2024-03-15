import { useState } from "react";
import "./App.css";

function App() {
  // use states

  const [counter, setCounter] = useState(0);

  // add value
  const addValue = () => {
    // update the counter
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  // remove value
  const removeValue = () => {
    // update counter
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      {/* use curly braces to inject varibales into jsx */}
      <h1>React Course with Manu {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add</button>{" "}
      <button onClick={removeValue}>remove</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
