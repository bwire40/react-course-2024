import { useState } from "react";

function App() {
  //our states
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // generate passowrd method
  const generatepassword = () => {};

  //
  return (
    <div className="flex justify-center items-center flex-col py-10 bg-slate-800 w-full h-screen">
      <h1 className="py-10 text-white text-2xl">Password Generator</h1>
      {/* password */}
      <div className="flex">
        <input
          type="text"
          className=" p-4 outline-none rounded-l-lg"
          value={password}
          placeholder="Password"
          readOnly
        />
        <button className="bg-blue-600 p-4 text-white">Copy</button>
      </div>
      {/* length */}
      <div className="flex gap-x-2 text-sm">
        <input
          type="range"
          id=""
          min={6}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label className="text-white py-2" htmlFor="length">
          Length: {length}
        </label>
      </div>
      {/* numbers checkbox */}
      <div className="flex gap-x-2 text-sm">
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id=""
          className="cursor-pointer"
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label className="text-white " htmlFor="number">
          Numbers
        </label>
      </div>
      {/* character checkbox */}
      <div className="flex gap-x-2 text-sm">
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          id=""
          className="cursor-pointer"
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label className="text-white " htmlFor="character">
          Character
        </label>
      </div>
    </div>
  );
}

export default App;
