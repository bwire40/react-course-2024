import { useState } from "react";

function App() {
  // useState hook
  const [color, setColor] = useState("olive");

  // approach 1.
  // const changeColor = (color) => {
  //   setColor(color);
  // };

  // approach 2.
  // using setcolor direclty to our buttons
  return (
    <div
      className="w-full h-screen mx-auto duration-300 bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
        px-3 py-2 rounded-3xl"
        >
          <button
            onClick={() => setColor("red")}
            className="w-24 outline-none py-1 rounded-full  bg-slate-600 text-white shadow-lg "
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="w-24 outline-none py-1 rounded-full bg-slate-600 text-white shadow-lg "
          >
            Green
          </button>
          <button
            onClick={() => setColor("white")}
            className="w-24 outline-none py-1 rounded-full bg-slate-600 text-white shadow-lg "
          >
            White
          </button>
          <button
            onClick={() => setColor("blue")}
            className="w-24 outline-none py-1 rounded-full bg-slate-600 text-white shadow-lg "
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
