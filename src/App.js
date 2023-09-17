import "./css/bootstrap.min.css";
import "./css/App.css";
import "./css/responsive.css";

// // IMPORT COMPONENTS
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";

// // IMPORT PAGES
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";

// IMPORT COMPONENTS
import Lsb from "./components/Lsb";
import MainWrapper from "./components/MainWrapper";

function App() {
  return (
      <div className="App">
        {/* <Header /> */}
        {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
        <Lsb />
        <MainWrapper />
        {/* <Footer /> */}
      </div>
  );
}

export default App;
