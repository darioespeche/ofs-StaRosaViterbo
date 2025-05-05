import React from "react";
import sr from "../../../assets/images/santa-rosa.jpg";
import "./PageOF.css";

function SantaRosa() {
  return (
    <>
      <div className="saint-hero">
        <img className="saint-hero__img" src={sr} alt="Santa Rosa" />
        <div className="saint-hero__text">
          <h1>Santa Rosa de Viterbo.</h1>
          <br />
          <br />
          <p>
            <em>
              ""Si Jesús fue golpeado por mi causa, yo puedo ser golpeada por
              causa suya. Yo solo haré lo que Él me dijo que hiciera. No puedo
              desobedecerle"."
            </em>
          </p>
        </div>
      </div>

      {/* Contenido */}
      <section className="saint-text">
        <p>
          Nació en Viterbo, Italia, en 1234. Era hija de humildes campesinos y,
          según cuentan las crónicas, su infancia estuvo plagada de signos
          virtuosos; creció rodeada de prodigios. Desde muy niña era frecuente
          verla ensimismada ante las imágenes de santos y de la Virgen, y
          mostraba una clara inclinación por todo elemento religioso. Su falta
          de recursos económicos y escasa edad le impidieron ingresar en el
          convento de San Damián de Viterbo. El escenario de su entrega fue su
          modesto hogar paterno y las calles de las ciudades donde vivió. El
          momento histórico que le tocó vivir no fue fácil. La población estaba
          amedrentada por la violencia ejercida contra ella por el emperador
          Federico II, que había sido doblemente excomulgado por Gregorio IX,
          pero que respondió imponiéndose por la fuerza en todos los estados que
          permanecían fieles al pontífice.
        </p>
        <p>
          Entretanto, esta penitente precoz tenía 7 u 8 años y llevaba ya una
          vida de intensa oración. Sus severísimas mortificaciones estuvieron a
          punto de enviarla al otro mundo. Sentía especial devoción por la
          Virgen y fue por su mediación que sanó de las lesiones que afectaron a
          su organismo por las disciplinas que se infligía. Un día María se le
          apareció rodeada de un coro de vírgenes y le indicó que recorriera las
          iglesias de San Francisco de Asís, la de San Juan Bautista y la de
          Santa María del Poggio. Debía vincularse a la Tercera orden de San
          Francisco sin abandonar su domicilio. El hábito le fue impuesto en la
          iglesia parroquial. Recuperada su salud, tal vez sin haber cumplido
          aún los 10 años de edad, se dedicó a predicar por las calles vestida
          con tosco sayal. Y profundamente afligida, como si fuera un profeta,
          alertaba a las gentes. Les hacía ver la gravedad de los desmanes que
          cometían contra el Redentor, denunciando cómo transitaban día tras día
          imbuidas en sus quehaceres, ajenas a la entrega de su vida ofrecida al
          Padre por ellas que formaban parte del género humano. Rosa era una
          niña, pero sus encendidas palabras suscitaban grandes conversiones.
          Sin proponérselo ejercía una autoridad moral entre sus convecinos que,
          a pesar de estar acostumbrados a verla deambular con la fogosidad de
          un apóstol de Cristo, con el rostro arrebolado y los cabellos sin
          orden alguno, no podían evitar quedar impactados por su impecable
          conducta. Era notorio su amor por los pobres, a los que socorría con
          evangélica prontitud. Sin dudarlo se privaba de la pieza de pan que le
          correspondía para ofrecérsela a ellos. Y esa austeridad de la que
          hacía gala era de dominio público.
        </p>
        <p>
          Sin embargo, aunque los ciudadanos en general agradecían su entrega,
          hubo también incontables detractores. Molestos por las consecuencias
          que sus palabras y acciones tenían para los planes del emperador
          Federico, la convirtieron en objeto de mofa y se plantearon darle
          muerte. Su padre, inquieto ante el cariz que tomaban los
          acontecimientos, le prohibió evangelizar como hacía, so pena de
          infligirle algún castigo si persistía en este empeño apostólico.
          Impertérrita, Rosa respondió: «Si Jesús fue golpeado por mi causa, yo
          puedo ser golpeada por causa suya. Yo solo haré lo que Él me dijo que
          hiciera. No puedo desobedecerle». Aún pudo seguir difundiendo la fe
          por las calles dos años más. Después, instigada por este grupo de
          fanáticos, la autoridad de Viterbo la apresó y luego la desterró. Sus
          padres la acompañaron en su expulsión y se establecieron en Soriano,
          nuevo escenario de su predicación que atrajo a los moradores de otras
          localidades circundantes.
        </p>
        <p>
          En diciembre de 1250 vaticinó públicamente la muerte del emperador,
          hecho que se produjo el 13 de ese mes y año. Entonces regresó a su
          patria, donde fue acogida con gran entusiasmo. Pero en realidad, ella
          siempre había querido gozar de la soledad y la paz del monasterio. Por
          eso, acudió a las religiosas de Santa María de las Rosas deseando
          vestir el hábito de las damianitas. Nuevamente, su pobreza fue un veto
          para cumplir este deseo. Y cuando la madre abadesa rechazó su
          petición, ella aseguró que ya que no la habían recibido en vida,
          posiblemente tendrían que acogerla cuando estuviese muerta, como así
          sucedió. El párroco Pedro de Capotosti, su confesor, le sugirió que
          llevase en su hogar la vida de oración y penitencia que anhelaba. Y
          eso hizo. Algunas jóvenes que compartían su ideal se reunían junto a
          ella en una aledaña capilla que el sacerdote mandó erigir cerca del
          convento. Pero este nuevo foco religioso fue suprimido por Inocencio
          IV a instancia de las damianitas, que no deseaban ver el fecundo
          crecimiento de otra comunidad nacida al lado de la suya. La santa
          regresó con sus padres y su voz se apagó discretamente, sin notoriedad
          alguna, el 6 de marzo de 1252. Sus últimas palabras fueron: Jesús y
          María.
        </p>
        <br />
        <br />
      </section>
    </>
  );
}

export default SantaRosa;
