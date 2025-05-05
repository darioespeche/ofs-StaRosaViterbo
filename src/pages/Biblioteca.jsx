import React from "react";
import "./Pages.css";
import bi from "../assets/images/ofs-biblioteca.jpg";

function Biblioteca() {
  return (
    <div>
      <section className="page-section">
        <img src={bi} alt="Formación OFS" />
        <div className="page-section-text">
          <h2>Biblioteca</h2>
          <p>
            En este espacio se encuentra la colección virtual de libros
            espirituales, materiales de estudio y documentos fundamentales para
            el crecimiento en la fe y formación continua de los miembros de la
            OFS.
          </p>
        </div>
      </section>

      <div className="drive-section">
        <iframe
          src="https://drive.google.com/embeddedfolderview?id=1Ra-wZ-GKw5xpa6L7tobVDlbh60I7Y1Vo#grid"
          title="Material de Formación"
        />
      </div>
    </div>
  );
}

export default Biblioteca;
