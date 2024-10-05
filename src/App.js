import React, { lazy, Suspense, startTransition, useState,useEffect } from 'react';
import NavBar from "./components/NavBar/Navbar";
import IntroSection from "./components/Intro/IntroSection";
import Snowfall from 'react-snowfall';
import './style.css'

const AboutMe = lazy(() => import("./components/About/AboutMe"));
const MySkills = lazy(() => import("./components/Skills/MySkills"));
const MyExperience = lazy(() => import("./components/Experience/MyExperience"));
const MyProjects = lazy(() => import("./components/Projects/MyProjects"));
const Contact = lazy(() => import("./components/ContactMe/Contact"));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    startTransition(() => {
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <div
          className="Cursor"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
        ></div>
      <Snowfall  color="white" snowflakeCount={window.innerWidth > 768 ? 100 : 50} />
      <NavBar/>
      <IntroSection/>
      {isLoaded && (
            <>
              <AboutMe/>
              <MySkills/>
              <MyExperience/>
              <MyProjects/>
              <Contact/>
            </>
          )}
      </div>
    </Suspense>
  );
}

export default App;
