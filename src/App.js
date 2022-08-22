import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
