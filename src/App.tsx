import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


function App() {
  return (
    <div className="App w-full">
      <Navbar />
      <Routes>
      <Route  path="/" element={<Home />} />
      {/* <Route  path="/" element={<About />} /> */}
      <Route  path="/about" element={<About />} />
      <Route  path="projects" element={<Projects />} />
      {/* <Home /> */}

      {/* <Projects /> */}
      {/* <About /> */}
      </Routes>

    </div>
  );
}

export default App;
