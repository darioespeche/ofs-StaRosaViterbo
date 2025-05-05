import React from "react";
import "./Pages.css";
import pu from "../assets/images/ofs-publicaciones.jpg";

function Publicaciones() {
  return (
    <div>
      <section className="page-section">
        <img src={pu} alt="Formación OFS" />
        <div className="page-section-text">
          <h2>Publicaciones OFS</h2>
          <p>
            Se comparten aquí boletines, revistas y noticias producidas por la
            fraternidad, reflejo de la vida y el caminar de la OFS en sus
            distintas actividades, celebraciones y reflexiones mensuales.
          </p>
        </div>
      </section>

      <div className="drive-section">
        <iframe
          src="https://drive.google.com/embeddedfolderview?id=1uo4caMbMsOuHx-fNc82ENUQNHxkSPKyj#grid"
          title="Material de Formación"
        />
      </div>
    </div>
  );
}

export default Publicaciones;
