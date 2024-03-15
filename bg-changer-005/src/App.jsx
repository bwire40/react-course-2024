function App() {
  return (
    <div className="w-full h-screen mx-auto duration-300 bg-black">
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
        px-3 py-2 rounded-3xl"
        >
          <button className="w-24 outline-none py-1 rounded-full  bg-slate-600 text-white shadow-lg ">
            test
          </button>
          <button className="w-24 outline-none py-1 rounded-full bg-slate-600 text-white shadow-lg ">
            test
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
