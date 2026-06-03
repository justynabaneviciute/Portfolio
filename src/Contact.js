import React from "react";

function Contact() {
  return (
    <section
      id="kontaktai"
      className="section contact reveal-section"
    >
      <div className="contact-waves">
        <div className="wave wave1"></div>
        <div className="wave wave4"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      <h2>SUSISIEKIME</h2>
<svg className="floating-star star4" viewBox="0 0 70 70" fill="none">
  <path
    d="M35 4L42 27L66 35L42 43L35 66L28 43L4 35L28 27L35 4Z"
    fill="#FFC933"
  />
</svg>
      <div className="contact-list container">
        <div className="row">

          <div className="contact-item col-md-4">
            <img src="/phone.png" alt="phone" />

            <div>
              <h3>TELEFONAS</h3>
              <p>+370 (656) 35 669</p>
            </div>
          </div>

          <div className="contact-item col-md-4">
            <img src="/mail.png" alt="mail" />

            <div>
              <h3>EL.PAŠTAS</h3>
              <p>justyna.baneviciute@gmail.com</p>
            </div>
          </div>

          <div className="contact-item col-md-4">
            <img src="/linkedin.png" alt="linkedin" />

            <div>
              <h3>LINKEDIN</h3>
              <p>Justyna Banevičiūtė</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;