import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// get the root element of our index.html
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

// render
root.render(<App />);
