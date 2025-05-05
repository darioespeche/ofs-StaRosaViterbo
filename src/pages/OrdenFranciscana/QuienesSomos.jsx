import React from "react";
import "../OrdenFranciscana/NuestrosSantos/PageOF.css";
import heroImage from "../../assets/images/ofs-grupo4.jpg";

function QuienesSomos() {
  return (
    <>
      <div className="saint-hero">
        <img className="saint-hero__img" src={heroImage} alt="QuienesSomos" />
        <div className="saint-hero__text">
          <h1>Quienes somos</h1>
          <br />
          <br />
          <p>
            Somos hombres y mujeres que, tras las huellas de San Francisco de
            Asís, formamos la gran familia Franciscana en Santiago del Estero.
          </p>
          <p>
            Ven a conocernos, compartir nuestra fe y servicio en la Iglesia y en
            la sociedad.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <section className="saint-text">
        <p>
          Somos hombres y mujeres que hemos sentido el llamado de seguir a
          Cristo, tras las huellas de San Francisco de Asís, conformando la gran
          Familia Franciscana en el mundo.
        </p>
        <p>
          Nuestro compromiso es de vivir el Evangelio en la sociedad actual, con
          nuestro propio estado de vida y con pertenencia a la Orden desde la
          Regla de Vida y las Constituciones Generales aprobadas por la Santa
          Sede, sin olvidarnos del Estatuto Nacional OFS Argentina dado y
          aprobado en Roma el 2 de noviembre de 2015 por la Presidencia del
          CIOFS.
        </p>
        <p>
          Vivimos esta vocación seglar franciscana desde nuestra fraternidad
          local “Santa Rosa de Viterbo” hacia nuestras familias, trabajos,
          ámbitos sociales y actividades pastorales llevando el “Evangelio a la
          vida y la vida al Evangelio”.
        </p>
        <p>Los seglares franciscanos santiagueños queremos:</p>
        <p>
          <ul>
            <li>Construir un mundo más fraterno,</li>
            <li>Luchar por la Justicia y la Equidad,</li>
            <li>Trabajar por y para la Ecología en la hermandad universal,</li>
            <li>
              Ser instrumentos de Paz llevando al mundo Paz, Esperanza y Alegría
              con nuestras acciones del día a día.
            </li>
          </ul>
        </p>
        <br />
        <br />
      </section>
    </>
  );
}

export default QuienesSomos;
