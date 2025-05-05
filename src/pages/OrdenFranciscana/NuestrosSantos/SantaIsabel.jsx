import React from "react";
import si from "../../../assets/images/santa-isabel.jpg";
import "./PageOF.css";

function SantaIsabel() {
  return (
    <>
      <div className="saint-hero">
        <img className="saint-hero__img" src={si} alt="Santa Isabel" />
        <div className="saint-hero__text">
          <h1>Santa Isabel de Hungría.</h1>
          <br />
          <br />
          <p>
            <em>
              "Mayor libertad de espíritu tendrás cuando menos deseos de cosas
              inútiles o dañinas tengas."
            </em>
          </p>
        </div>
      </div>

      {/* Contenido */}
      <section className="saint-text">
        <p>
          Santa Isabel de Hungría, Viuda, de la Tercera Orden (1207‑1231).
          Canonizada por Gregorio IX el 27 de mayo de 1235.
        </p>
        <p>
          Esta joven Santa del siglo XIII a quien, nosotros seglares
          franciscanos, veneramos como Patrona, se consumió en el ardor de todo
          lo bueno y dejó una estela luminosa de amor, un ejemplo que la
          cristiandad nunca ha olvidado.
        </p>
        <p>
          Isabel, Langravia de Turingia, nació en 1207 en Hungría, hija del rey
          Andrés II y de la reina Gertrudis de Merano. Siendo todavía niña fue
          dada por esposa a Luis, Langrave de Asia y Turingia y creció con él en
          el amor de Dios y del prójimo. Pasaba largas noches en oración y
          dedicaba sus días a visitar a los enfermos y a socorrer a los pobres.
          Pero su grandeza brilló sobre todo después de que murió su esposo, que
          se había hecho cruzado. Fue despojada de todos sus bienes, arrojada a
          la calle con sus hijitos y forzada a buscar refugio en un establo,
          ella, que había ayudado a tantos y construido hospitales para sus
          súbditos. No se quejó de ello, sino que entró a la iglesia de los
          Hermanos Menores y pidió que se cantara un “Te Deum” porque el Señor
          le había dado su pobreza. Vistió el hábito de la Tercera Orden y
          recibió de San Francisco el regalo de su manto.
        </p>
        <p>
          Cuando más tarde le fueron reconocidos sus derechos, que tuvo que
          reivindicar para sus hijos, no cambió de vida, sino que continuó
          trabajando con sus manos para ayudar a los pobres. Las visitas del
          Señor en la oración eran frecuentes.
        </p>
        <p>
          Santa Isabel en solos 24 años de vida conoció riqueza y miseria,
          honores y desprecio y santificó todas las condiciones de la vida de
          una mujer: religiosísima desde su juventud, amantísima esposa con un
          corazón maternal para con su pueblo, madre delicadísima de tres hijos,
          tempranamente viuda, arrojada, errante con sus hijitos hambrientos;
          siempre sobreabundante de gozo en la pobreza y en el dolor, porque
          abundaba totalmente en Dios, cuyo amor tierno y fuerte conocía. Dios
          la escuchó por sus hijos, cuyos derechos principescos fueron
          reconocidos; para sí conservó sólo el inestimable tesoro de la pobreza
          franciscana que le había revelado la dulzura de Dios.
        </p>
        <p>
          Característica de su vida es la caridad hacia los pobres, a quienes
          asistía siempre con regia generosidad y visitaba en sus barracas. Es
          célebre la anécdota de su esposo Luis, quien se encontró con ella
          mientras bajaba del castillo de Marburgo con las provisiones para los
          pobres, ocultas bajo el manto. Cuando él le preguntó qué llevaba,
          corrió el manto y aparecieron fresquísimas rosas a pesar del crudo
          invierno. Otra vez un leproso a quien después de lavarle los pies y
          dado alimento, lo colocó a dormir en su lecho regio; al regresar el
          esposo, indignado quiso ver quién era ese leproso que dormía en su
          lecho, y con sorpresa vio a Cristo, que en un nimbo de luz desapareció
          dejando gran gozo en el corazón de ambos cónyuges. Murió de
          veinticuatro años el 17 de noviembre de 1231 y fue sepultada en
          Marburgo el 19 del mismo mes.
        </p>
        <br />
        <br />
      </section>
    </>
  );
}

export default SantaIsabel;
