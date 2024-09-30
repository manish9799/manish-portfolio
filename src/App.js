import AboutMe from "./components/About/AboutMe";
import Contact from "./components/ContactMe/Contact";
import MyExperience from "./components/Experience/MyExperience";
import IntroSection from "./components/Intro/IntroSection";
import NavBar from "./components/NavBar/Navbar";
import MyProjects from "./components/Projects/MyProjects";
import MySkills from "./components/Skills/MySkills";
import './style.css'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <IntroSection/>
     <AboutMe/>
     <MySkills/>
     <MyExperience/>
     <MyProjects/>
     <Contact/>
    </div>
  );
}

export default App;
