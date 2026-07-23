import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Internships from "../Components/Internships";
import MoreProjects from "../Components/MoreProjects";
import ProjectsSection from "../Components/ProjectsSection";
import Skills from "../Components/Skills";

interface LocationState {
  scrollTo?: string;
}

const HomePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as LocationState | null;
    if (state?.scrollTo) {
      const id = state.scrollTo;
      // Wait a frame so the home page's sections are mounted before scrolling.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
      navigate(location.pathname, { replace: true, state: {} });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  return (
    <>
      <Hero />
      <ProjectsSection />
      <Internships />
      <MoreProjects />
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default HomePage;
