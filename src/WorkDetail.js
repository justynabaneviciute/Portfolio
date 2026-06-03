import React, { useEffect } from "react";
import cloud from "./assets/render.gif";

function WorkDetailPage({ setPage }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div
  className="work-detail-content"
onClick={() => {
  setPage("home");

  setTimeout(() => {
    document.getElementById("darbai")?.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
}}
  style={{ cursor: "pointer" }}
>
  <img src={cloud} alt="" />

  <div className="work-description">
    <h1>RED BULL COCONUT EDITION</h1>

    <p>
Animuotas reklaminis vizualas, sukurtas naudojant
Adobe After Effects.    </p>
  </div>
</div>
  );
}

export default WorkDetailPage;