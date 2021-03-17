import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div
      id="page-container"
      className="container-fluid pr-0 pl-0 h-100 d-flex flex-column"
    >
      <NavBar />
      <Router>
        <Main path="/" />
        <Contact path="/contact" />
        <Portfolio path="/portfolio" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
