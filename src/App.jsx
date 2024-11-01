import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";

import Hero_Section from "./Components/Hero_Section";
import Navigation from "./Components/Navigation";
import Project from "./Components/Projects";
import WorkExperience from "./Components/WorkExperience";

function App() {
  return (
    <>
      <Navigation />
      <Hero_Section />
      <About />
      <WorkExperience />
      <Project />
      <Education />
      <Contact/>
    </>
  );
}

export default App;
