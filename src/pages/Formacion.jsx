import React from "react";
import "./Pages.css";
import FI from "../assets/images/ofs-formacion.jpg";

function Formacion() {
  return (
    <div>
      <section className="page-section">
        <img src={FI} alt="Formación OFS" />
        <div className="page-section-text">
          <h2>Formación OFS</h2>
          <p>
            Este apartado contiene materiales formativos diseñados para
            profundizar en la espiritualidad franciscana, la Regla y la vida en
            fraternidad, destinados tanto a iniciantes como a miembros con
            camino recorrido.
          </p>
        </div>
      </section>

      <div className="drive-section">
        <iframe
          src="https://drive.google.com/embeddedfolderview?id=1xJIEjUYVjBQvaXfaP9zRt-f3udZ8T7l6#grid"
          title="Material de Formación"
        />
      </div>
    </div>
  );
}

export default Formacion;
