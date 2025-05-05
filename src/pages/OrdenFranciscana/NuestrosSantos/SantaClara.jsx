import React from "react";
import sc from "../../../assets/images/santa-clara.jpg";
import "./PageOF.css";

function SantaClara() {
  return (
    <>
      <div className="saint-hero">
        <img className="saint-hero__img" src={sc} alt="Santa Clara" />
        <div className="saint-hero__text">
          <h1>Santa Clara de Asís.</h1>
          <br />
          <br />
          <p>
            <em>
              "Debemos convertirnos en instrumentos del amor compasivo de Dios
              por los demás."
            </em>
          </p>
        </div>
      </div>

      {/* Contenido */}
      <section className="saint-text">
        <p>
          Santa Clara de Asís. Virgen, fundadora de la Segunda Orden
          (1194‑1253). Fue canonizada por Alejandro IV el 15 de agosto de 1265.
        </p>
        <p>
          Clara Offreduccio nació en Asís el 16 de julio de 1194, del noble
          Favorone de Offreduccio y de Hortulana. Cuando Francisco supo del
          deseo de la joven Clara de conocer su vida para vivirla también ella,
          su corazón saltó de alegría en el Señor. Los coloquios muy pronto la
          llevaron a la fuga de la casa paterna y a la vestición en Santa María
          de los Angeles de Porciúncula. En aquella iglesita de San Damián que
          Francisco había restaurado con sus manos profetizando a quien le
          ayudaba, que allí vendrían “santas damas”, que llenarían la Iglesia
          con el aroma de sus virtudes, Clara bien pronto reunió en torno a sí
          un grupo de vírgenes entre ellas sus hermanas Santa Inés y Beatriz y
          su madre Hortulana, de quien fue madre, maestra y hermana. No les
          prometía sino la riqueza de la más austera pobreza y penitencia, y en
          cambio la alegría de los coloquios con Dios. La vida que llevaban en
          San Damián pronto fue para toda la Iglesia un ejemplo de luz y de fe,
          un signo espléndido de las realidades celestes que ya estaban
          viviendo.
        </p>
        <p>
          Francisco amaba con predilección a Clara, como primogénita de su
          espíritu, plántula y alcázar de la pobreza; a ella recurrió cuando
          deseaba conocer la voluntad del Señor sobre la orientación que debería
          dar a su Orden. Le respondió: “El Señor quiere que los Hermanos no
          vivan sólo para sí, sino también para los demás: por tanto vida activa
          y vida contemplativa”.
        </p>
        <p>
          El Seráfico Pobre dictó para las “pobres damas” de San Damián una
          regla basada en la más estricta pobreza. Clara, siguiendo el ejemplo
          de San Francisco, fue celosa guardiana de la pobreza, tanto que obtuvo
          del papa Gregorio IX el llamado “privilegio de la pobreza”. Clara, fue
          abadesa hasta su muerte, y gobernó con gran amabilidad y comprensión,
          pero cuidando celosamente la disciplina religiosa. Para sí usó
          severidad hasta el heroísmo: llevaba el cilicio, dormía en el duro
          suelo, hasta que el mismo San Francisco la obligó a utilizar una
          estera.
        </p>
        <p>
          Santa Clara se distinguió por el culto a la Eucaristía, al cual está
          ligado el episodio prodigioso de la fuga de los sarracenos, que
          guiados por Vital de Aversa, en 1242, asediaron a Asís y llegaron
          hasta el refugio de San Damián. Aunque enferma, se hizo transportar
          llevando en una caja de plata a Jesús Sacramentado hasta el punto más
          alto del monasterio frente a los sarracenos. Cuando hizo oración se
          oyó una voz del cielo: “Yo siempre os cuidaré y protegeré!”. Los
          asaltantes, fulminados por una fuerza misteriosa, abandonaron
          precipitadamente el sagrado recinto. Dos alegrías tuvo en su vida:
          besar el cuerpo estigmatizado del Pobrecillo y desde su lecho de
          enferma ver la celebración de la noche de Navidad, como si fuera
          televisión. El 11 de agosto de 1253 sonrió por última vez y murió
          dulcemente. Tenía 59 años. Pío XII la proclamó patrona de la
          televisión.
        </p>
        <br />
        <br />
      </section>
    </>
  );
}

export default SantaClara;
