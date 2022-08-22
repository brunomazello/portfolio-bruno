import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Projetos from "./components/pages/Projetos";
import Sobre from "./components/pages/Sobre";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projetos />
      <Footer/>
    </div>
  );
}

export default App;
