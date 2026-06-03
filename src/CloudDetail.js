import React, { useEffect } from "react";
import cloud from "./assets/debesys_3.gif";

function CloudDetail({ setPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="work-detail-content"
      onClick={() => setPage("works")}
      style={{ cursor: "pointer" }}
    >
      <img src={cloud} alt="Debesėlio animacija" />

      <div className="work-description">
        <h1>CLOUD ANIMATION</h1>

        <p>
Animuotas personažas, sukurtas naudojant Adobe After Effects. Projekte sukurtas ir animuotas eisenos ciklas (walk cycle), daug dėmesio skiriant judesio sklandumui, ritmui ir personažo charakteriui.
        </p>
      </div>
    </div>
  );
}

export default CloudDetail;