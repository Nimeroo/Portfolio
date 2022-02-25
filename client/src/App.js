import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createRef } from "react";
import Nav from "./Components/Nav/Nav";
import Home from "./Screens/Home/Home";
import Projects from "./Screens/Projects/Projects";
import Footer from "./Components/Footer/Footer";

function App() {
  const aboutReference = createRef();
  const contactReference = createRef();
  const skillsReference = createRef();
  const homeReference = createRef();

  const scrollTo = (ref) => {
    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop - 40,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Nav
        scrollTo={scrollTo}
        homeReference={homeReference}
        aboutReference={aboutReference}
        contactReference={contactReference}
        skillsReference={skillsReference}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              scrollTo={scrollTo}
              homeReference={homeReference}
              aboutReference={aboutReference}
              contactReference={contactReference}
              skillsReference={skillsReference}
            />
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
