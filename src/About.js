import React from "react";

function About() {
  return (
    <section id="apie" className="section about-section reveal-section">
      <div className="about-container">
        <div className="about-text">
          <h2>APIE MANE</h2>

          <p className="intro">Esu Justyna Banevičiūtė.</p>

          <p>
            Studijuoju Multimediją ir kompiuterinį dizainą Vilnius Tech
            universitetas (III kursas).
          </p>

          <p>
            Kuriu vizualiai patrauklius dizaino sprendimus, kuriuose dera
            estetika ir aiškus informacijos perteikimas.
          </p>

          <p>
            Dirbu su Adobe Photoshop, Illustrator ir Figma, nuolat tobulėju
            kūrybinėje srityje bei plečiu savo žinias.
          </p>
        </div>

        <div className="about-right">
          <div className="blob">
            <img className="avatar-full" src="/avatar.png" alt="avatar" />
          </div>

          <p className="role">Graphic & Motion Design</p>

          <div className="tools-icons">
         <img src="/ae.png" alt="ae" />
         
            <img src="/ps.png" alt="ps" />
            <img src="/figma.png" alt="figma" />
            <img src="/ai.png" alt="ai" />
            <img src="/blender.png" alt="blener" />
          </div>
        </div>
      </div>

      <div className="side-wave">
        <img src="/wave1.png" alt="wave" />
      </div>
    </section>
  );
}

export default About;