import React from "react";

import render from "./assets/render.gif";
import kalnas from "./assets/kalnas.gif";
import rocket from "./assets/Raketa.gif";
import burger from "./assets/burg.gif";

function Works({ setPage }) {
  return (
    <section
      id="darbai"
      className="section works-section reveal-section"
    >
      <div className="container">

        <h2>DARBAI</h2>

        <div className="works-grid">
          <div
  className="work-item work1 clickable-work"
  onClick={() => setPage("workDetail")}
>
  <img
    className="img-fluid"
    src={render}
    alt="Debesėlio animacija"
  />
</div>

          <div className="work-item work2 dark">
            <img
              className="img-fluid"
              src={kalnas}
              alt=""
            />
          </div>

          <div className="work-item work3 dark">
            <img
              className="img-fluid"
              src={rocket}
              alt=""
            />
          </div>

          <div className="work-item work4 yellow">
            <img
              className="img-fluid"
              src={burger}
              alt=""
            />
          </div>

          <div
            className="more-link"
            onClick={() => setPage("works")}
          >
            <span>DAUGIAU DARBŲ</span>

            <svg className="arrow-svg" viewBox="0 0 46 16">
              <path
                d="M2 8H40M40 8L33 2M40 8L33 14"
                fill="none"
                stroke="#0A294D"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Works;