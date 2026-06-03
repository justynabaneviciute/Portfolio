import React, { useEffect } from "react";

import kalnas from "./assets/kalnas.gif";
import cloud from "./assets/debesys_3.gif";
import burger from "./assets/burg.gif";
import rocket from "./assets/Raketa.gif";
import redbull from "./assets/Bul.gif";
import design from "./assets/Design.gif";

function WorksPage({ setPage }) {
  useEffect(() => {
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="works-page">
      <div
        className="back-button"
        onClick={() => {
          setPage("home");

          setTimeout(() => {
            window.location.hash = "darbai";
          }, 0);
        }}
      >
        <svg className="back-arrow" viewBox="0 0 46 16">
          <path
            d="M44 8H6M6 8L13 2M6 8L13 14"
            fill="none"
            stroke="#111"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Atgal</span>
      </div>

      <div className="works-page-grid">
        <div className="works-page-item big-dark">
          <img src={rocket} alt="" />
        </div>

        <div className="works-page-item tall-yellow">
          <img src={burger} alt="" />
        </div>

        <div className="works-page-item small-yellow">
          <img src={design} alt="" />
        </div>

       <div
  className="works-page-item medium-yellow"
  onClick={() => setPage("redbullDetail")}
>
  <img src={redbull} alt="" />
</div>
        <div
          className="works-page-item wide-yellow clickable-work"
          onClick={() => setPage("cloudDetail")}
        >
          <img src={cloud} alt="Debesėlio animacija" />
        </div>

        <div className="works-page-item dark-rocket">
          <img src={kalnas} alt="" />
        </div>
      </div>

      <div className="works-side-wave">
        <img src="/wave1.png" alt="wave" />
      </div>
    </div>
  );
}

export default WorksPage;