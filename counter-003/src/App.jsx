import "./App.css";

function App() {
  let counter = 0;

  const addValue = () => {
    counter = counter + 1;
    console.log(counter);
  };
  return (
    <>
      <h1>React Course with Manu {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add</button> <button>remove</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
