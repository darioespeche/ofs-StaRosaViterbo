import React from "react";
import "./Pages.css";
import jpic from "../assets/images/ofs-jpic.jpg";

function Jpic() {
  return (
    <div>
      <section className="page-section">
        <img src={jpic} alt="Formación OFS" />
        <div className="page-section-text">
          <h2>Justicia, Paz e Integridad de la Creación</h2>
          <p>
            Aquí podrás acceder a recursos y publicaciones que promueven el
            compromiso franciscano con la justicia social, el cuidado de la
            creación y la construcción de la paz desde el Evangelio.
          </p>
        </div>
      </section>

      <div className="drive-section">
        <iframe
          src="https://drive.google.com/embeddedfolderview?id=1XDpXowrilB56wQOMISjYRgtlUzg3NDa5#grid"
          title="Material de JPIC"
        />
      </div>
    </div>
  );
}

export default Jpic;
