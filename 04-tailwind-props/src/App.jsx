import Card from "./components/Card";

function App() {
  // passing arrays and objects
  let newObj = {
    name: "manu",
    age: 24,
    addresss: {
      city: "Nairobi",
      country: "Kenya",
    },
  };

  let newArr = [1, 3, 4, 5, 6, 7, 8];
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-green-500">
        Vite with Tailwindcss
      </h1>

      <div className="py-10">
        <Card username="Kevin" myArry={newArr} />
        <Card image="https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=300" />
      </div>
    </div>
  );
}

export default App;
