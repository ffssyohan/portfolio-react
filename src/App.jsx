import "./App.css";
import About from "./componentes/About";
import Contact from "./componentes/Contact";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import ProjectList from "./componentes/ProjectList";

function App() {
  return (
    <div className="App">
      <Header />

      <About />

      <ProjectList />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
