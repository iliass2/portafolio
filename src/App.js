import yo from "./assets/yo.png";
import "./App.css";
import BasicExample from "./components/navbar.jsx";
import Centro from "./components/centro.jsx";
import About from "./components/about";
import { Projects } from "./components/projects";
import Footer from "./components/footer.jsx";
function App() {
  return (
    <>
    <BasicExample/>
      <Centro />
      <About/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
