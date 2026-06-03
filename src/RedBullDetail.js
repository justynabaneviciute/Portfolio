import React, { useEffect } from "react";
import redbull from "./assets/Bul.gif";

function RedBullDetail({ setPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="work-detail-content"
      onClick={() => setPage("works")}
      style={{ cursor: "pointer" }}
    >
      <img src={redbull} alt="" />

      <div className="work-description">
        <h1>RED BULL BLUE EDITION</h1>

        <p>
3D animuotas reklaminis vizualas, sukurtas naudojant Blender.        </p>
      </div>
    </div>
  );
}

export default RedBullDetail;