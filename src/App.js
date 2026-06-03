import React, { useEffect, useState } from "react";


import Hero from "./Hero";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import WorksPage from "./WorksPage";
import CloudDetail from "./CloudDetail";
import WorkDetail from "./WorkDetail";
import RedBullDetail from "./RedBullDetail";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const handleReveal = () => {
      const sections = document.querySelectorAll(".reveal-section");

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;

        if (
          top < window.innerHeight * 0.75 &&
          bottom > window.innerHeight * 0.15
        ) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleReveal);
    handleReveal();

    return () => window.removeEventListener("scroll", handleReveal);
  }, []);

  if (page === "works") {
    return <WorksPage setPage={setPage} />;
  }

if (page === "cloudDetail") {
    return <CloudDetail setPage={setPage} />;

}
if (page === "workDetail") {
  return <WorkDetail setPage={setPage} />;
}

if (page === "redbullDetail") {
  return <RedBullDetail setPage={setPage} />;
}

  return (
    <div className="portfolio">
      <Hero setPage={setPage} />
      <About />
      <Works setPage={setPage} />
      <Contact />
    </div>
  );
}

export default App;
