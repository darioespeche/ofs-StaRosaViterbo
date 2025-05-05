import React from "react";
import "../OrdenFranciscana/NuestrosSantos/PageOF.css";
import heroImage from "../../assets/images/ofs-grupo2.jpg";

function RedFranciscana() {
  return (
    <>
      <div className="saint-hero">
        <img
          className="saint-hero__img"
          src={heroImage}
          alt="Red Franciscana"
        />
        <div className="saint-hero__text">
          <h1>Red Franciscana</h1>
          <br />
          <br />
          <p>
            Aquí te compartimos otros sitios y canales de la familia franciscana
            alrededor del mundo.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <section className="saint-text">
        <ul className="redf-list">
          <li>
            <a
              href="https://ofm.org/es/la-orden.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Primera Orden Franciscana (OFM)
            </a>
          </li>
          <li>
            <a
              href="https://ciofs.info/es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consejo Internacional OFS (CIOFS)
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@ofsnoa2-nuestrasenoradelva273?si=UV5HM17DBWhROCjV"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canal YouTube OFS NOA
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@ofsdeargentina3348?si=pzqtVMwg0xsMzcGb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canal YouTube OFS Argentina
            </a>
          </li>
        </ul>
        <br />
        <br />
      </section>
    </>
  );
}

export default RedFranciscana;
