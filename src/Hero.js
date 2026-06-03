import React, { useEffect, useState } from "react";



function Hero({ setPage }) {
  const [showNav, setShowNav] = useState(true);
  const [heroProgress, setHeroProgress] = useState(0);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHeroTransition = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const progress = Math.min(scrollY / windowH, 1);

      setHeroProgress(progress);
    };

    window.addEventListener("scroll", handleHeroTransition);
    return () => window.removeEventListener("scroll", handleHeroTransition);
  }, []);

  return (
    <section className="hero">
      <nav className={`navbar ${showNav ? "nav-show" : "nav-hide"}`}>
        <div
          className="logo"
          onClick={() => {
            setPage("home");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

          }}
        >
        <img src="/logo.png" alt="logo" />
        </div>

        <div className="nav-links">
          <a href="#apie">APIE MANE</a>
          <a href="#darbai">DARBAI</a>
          <a href="#kontaktai">SUSISIEKIME</a>
        </div>
      </nav>

      <h1
        className="hero-title"
        style={{
          opacity: `${1 - heroProgress * 1.8}`,
          transform: `translate(-50%, -50%) scale(${1 - heroProgress * 0.2})`,
          filter: `blur(${heroProgress * 8}px)`,
        }}
      >
        <svg className="floating-star" viewBox="0 0 70 70" fill="none">
          <path
            d="M35 4L42 27L66 35L42 43L35 66L28 43L4 35L28 27L35 4Z"
            fill="white"
          />
        </svg>

        <svg className="floating-star star2" viewBox="0 0 70 70" fill="none">
          <path
            d="M35 4L42 27L66 35L42 43L35 66L28 43L4 35L28 27L35 4Z"
            fill="white"
          />
        </svg>

        <svg className="floating-star star3" viewBox="0 0 70 70" fill="none">
          <path
            d="M35 4L42 27L66 35L42 43L35 66L28 43L4 35L28 27L35 4Z"
            fill="white"
          />
        </svg>

        PORTFOLIO
      </h1>

      <div className="wave wave1"></div>
      <div className="wave wave4"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>

      <div
        className="wave-cover"
        style={{
          transform: `translateY(${100 - heroProgress * 100}%)`,
        }}
      ></div>
    </section>
  );
}

export default Hero;