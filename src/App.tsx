import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


function App() {
  return (
    <div className="App w-full">
      <Navbar />
      {/* <Home />
      <About /> */}
      <Projects />
    </div>
  );
}

export default App;
