import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Projetos from "./components/pages/Projetos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projetos />
    </div>
  );
}

export default App;
