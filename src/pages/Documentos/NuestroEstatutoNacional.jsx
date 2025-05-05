import React from "react";
import "./Documentos.css";
import heroImage from "../../assets/images/hero-estatuto.jpg";

function NuestroEstatutoNacional() {
  return (
    <div className="doc-container">
      {/* Hero */}
      <section className="doc-hero">
        <div className="doc-hero__logo">
          <img src={heroImage} alt="Nuestro Estatuto" />
        </div>
        <div className="doc-hero__text">
          <h1>
            Estatutos Nacionales
            <br />
            de La OFS Argentina
          </h1>
          <h5>
            Publicación Oficial de la Orden Franciscana Seglar en Argentina 8 de
            noviembre de 2015
          </h5>
        </div>
      </section>

      {/* Acordeón */}
      <section className="doc-accordion">
        {/* OFS */}
        <details className="doc-panel">
          <summary className="doc-panel__title">OFS Argentina</summary>
          <div className="doc-content">
            <p>
              <strong>Estatutos Nacionales de la OFS Argentina</strong>
            </p>
            <p>
              Publicación Oficial de la Orden Franciscana Seglar en Argentina 8
              de noviembre de 2015
            </p>
            <p>
              Orden Franciscana Seglar Consejo Nacional.
              <br />
              Cóndor 2150 – Ciudad Autónoma de Buenos Aires.
              <br />
              CP: C1437FJP - Argentina
              <br />
              Prot. n. T. 144-1/2000
              <br />
              e-mail: ministronacional@ofs.org.ar web: www.ofs.org.ar
              <br />
              Protocolo 65/15
            </p>
            <p>
              <strong>DECRETO</strong>
            </p>
            <p>
              Es el deseo del Consejo Nacional que los nuevos Estatutos sean
              instrumento que iluminen cual lámpara encendida (Mt. 15,5) la
              vocación, identidad y caminar de la Orden Franciscana Seglar de
              Argentina.{" "}
            </p>
            <p>
              Fieles al Señor Jesús, “que se despojó a sí mismo, tomando forma
              de siervo, hecho semejante a los hombres; y estando en la
              condición de hombre, se humilló a sí mismo, haciéndose obediente
              hasta la muerte, y muerte de cruz” (Filipenses 2,7-8) es que se
              promueven estos lineamientos, motivando a sus miembros a tener los
              mismos sentimientos de Jesús. El Señor es y da la vida, esperanza
              y misericordia. Quien llama al compromiso y conversión moviendo al
              hermano Seglar al servicio de los hombres y mujeres de buena
              voluntad en acciones concretas.
            </p>
            <p>
              Adhiriendo la propia vida a la Palabra viva del Evangelio, es que
              se confían estas líneas al Espíritu Santo para que guíe a la
              comprensión de quienes las aplican centrados en el espíritu de la
              ley más que en su letra.
            </p>
            <p>
              El Capítulo Legislativo, celebrado en Villa Allende, Córdoba en
              enero del año 2012 elaboró (tras larga y asidua preparación,
              comprensión y diálogo sincero), el texto de los nuevos Estatutos
              Nacionales y lo reconoció con su voto, a fin de presentarlos para
              la aprobación por parte de la Presidencia del CIOFS. (CCGG. Art.
              65.3 y FIOFS Art 13.1.g).
            </p>
            <p>
              Después de recibidas las sugerencias por parte de la Comisión
              Jurídica de la Presidencia del CIOFS y aceptadas en distintas
              instancias por el Consejo Nacional, la Asamblea Nacional y siendo
              estas, aprobadas vía confirmación escrita de los hermanos
              Ministros Locales, Ministros Regionales e integrantes del Consejo
              Nacional (Prot. 18/14 – 22/06/2014). Por Protocolo Nº 2810/14-20
              CIOFS (02/11/2015) y Decreto de la misma fecha el hermano Tibor
              Kauser, Ministro General, aprueba y ratifica, el texto definitivo
              de los Estatutos Nacionales, que lleva fecha 25 de octubre de
              2015, el que será conservado tanto en el archivo del Consejo
              Nacional de Argentina como en el del Secretariado del CIOFS.
            </p>
            <p>
              La Regla de la Orden Franciscana Seglar aprobada por SS Pablo VI
              el 24 de junio de 1978, las Constituciones Generales aprobadas el
              8 de diciembre de 2000 se complementan con los Estatutos
              Nacionales aprobados el 2 de noviembre de 2015. Estos tres textos
              constituyen el cuerpo normativo para la OFS en la República
              Argentina.
            </p>
            <p>
              Por lo expresado, PROMULGO los Estatutos Nacionales de Argentina
              que en su texto definitivo inician con las letras “La Orden
              Franciscana Seglar” y finalizan con “cumplidos treinta días
              continuos.” los que deberán observarse a partir del 8 de diciembre
              de 2015 Festividad de la Inmaculada Concepción.
            </p>
            <p className="doc-content__fecha">
              Dado en Villa Mercedes, San Luis el 08 de Noviembre de 2015.
              <br />
              Festividad de Juan Duns Escoto
            </p>
            <p>
              <strong>
                Jorge Alberto Jornet
                <br />
                Ministro Nacional OFS - Argentina
              </strong>
            </p>
          </div>
        </details>

        {/* Decreto */}
        <details className="doc-panel">
          <summary className="doc-panel__title">Decreto</summary>
          <div className="doc-content">
            <p>
              La Presidencia del Consejo Internacional de la Orden Franciscana
              Seglar, ha examinado el Estatuto de la “Fraternidad nacional de la
              Orden Franciscana Seglar de ARGENTINA” que le ha sido presentado
              para su aprobación. Habiéndolo encontrado conforme a la
              legislación de la Orden Franciscana Seglar y a los requisitos para
              la vida del franciscano/a secular:
            </p>
            <p>Con este Decreto, la Presidencia</p>
            <p>
              <strong>aprueba y ratifica</strong>
            </p>
            <p>
              El Estatuto de la Fraternidad nacional de ARGENTINA, según el
              texto aprobado y propuesto por su Consejo nacional.
            </p>
            <p>
              El texto definitivo, que lleva fecha 25 de octubre de 2015, será
              conservado tanto en el archivo del Consejo nacional de Argentina
              como en el del Secretariado del CIOFS.
            </p>
            <p className="doc-content__fecha">
              Dado en Roma, el 2 de noviembre de 2015.
            </p>
            <p>
              <strong>
                Tibor Kauser
                <br />
                Ministro General OFS
              </strong>
            </p>
          </div>
        </details>

        {/* Introduccion  */}
        <details className="doc-panel">
          <summary className="doc-panel__title">Introducción</summary>
          <div className="doc-content">
            <p>
              La Orden Franciscana Seglar (O.F.S.), presente en Argentina desde
              el comienzo de la evangelización se ha denominado a lo largo de
              nuestra historia de distintas formas: Fraternidad Seglar
              Franciscana, Tercera Orden Franciscana (T.O.F.), Tercera Orden de
              San Francisco, Venerable Tercera Orden de San Francisco.
            </p>
            <p>
              <strong>Definición</strong>
            </p>
            <p>
              <strong>Art. 1</strong>
            </p>
            <p>
              1. La Orden Franciscana Seglar (O.F.S.) es una asociación pública
              en la Iglesia. Se articula en Fraternidades de diversos niveles:
              local, regional, nacional e internacional. Cada una,
              individualmente, tiene personalidad jurídica en la Iglesia (cc.
              116, 301 § 3 y 303; certificación de la C.I.V.C. y S.V.A.
              (Congregación para los Institutos de Vida Consagrada y las
              Sociedades de Vida Apostólica) del 22/07/2001 y certificación
              emitida por la Nunciatura en la Argentina el 11/03/2002.{" "}
            </p>
            <p>
              2. La Fraternidad nacional de la Orden Franciscana Seglar de
              Argentina es la unión orgánica de todas las Fraternidades locales
              y personales, erigidas canónicamente y en formación, en el
              territorio de la República Argentina (Cfr. Const. O.F.S. 65.l).
            </p>
          </div>
        </details>

        {/* Sede */}
        <details className="doc-panel">
          <summary className="doc-panel__title">Sede</summary>
          <div className="doc-content">
            <p>
              <strong>Art. 2</strong>
            </p>
            <p>
              La Fraternidad nacional de la O.F.S. de Argentina tiene su sede en
              la Ciudad Autónoma de Buenos Aires (Cfr. Const. O.F.S. 65.3)
            </p>
            <p>
              <strong>Objetivos:</strong>
            </p>
            <p>
              <strong>Art. 3</strong>
            </p>
            <p>
              1. Los franciscanos seglares de la Argentina tienen en María,
              Madre de Jesús, el modelo para escuchar la Palabra y ser fieles a
              la vocación; como San Francisco, en Ella ven realizadas todas las
              virtudes evangélicas.{" "}
            </p>
            <p>
              2. La finalidad de la Fraternidad nacional es vivir el Evangelio
              en comunión fraterna, a la manera de San Francisco de Asís, y
              promoverla en la realidad eclesial y la vida pública de Argentina
              (Cfr. Regla O.F.S. 4 y 14), respetando la cultura común, las
              estructuras sociales, la organización civil y la identidad de los
              grupos étnicos.
            </p>
            <p>
              3. Inspirándose en el ejemplo y en los escritos de San Francisco y
              Santa Clara y con la gracia del Espíritu, los hermanos vivan día a
              día, con fe, el gran don que nos ha otorgado Cristo, la revelación
              del Padre. Den así testimonio de esta fe delante de los hombres:
              <ul>
                <li>en la vida de familia;</li>
                <li>en el trabajo; </li>
                <li>en el encuentro con los hombres,</li>
                <li>hermanos todos en el mismo Padre; </li>
                <li>
                  en la presencia y en la participación en la vida social;
                </li>
                <li>en la relación fraterna con todas las criaturas.</li>
                <li>
                  Como mensajeros de la perfecta alegría e insertos en la
                  resurrección de Jesucristo, amen y vivan la pureza de corazón,
                  fuente de la verdadera Fraternidad.
                </li>
              </ul>
            </p>
            <p>
              4. La Fraternidad nacional con orientaciones oportunas, se propone
              mantener vivas y operantes las relaciones con las Fraternidades
              locales directamente o a través de las Fraternidades regionales,
              de modo que se dé entre ellas una provechosa cooperación, una
              reciprocidad vital y una ayuda mutua.
            </p>
            <p>
              5. Es deber del Consejo nacional mantener una relación viva y
              operante con la Fraternidad Internacional.{" "}
            </p>
          </div>
        </details>

        {/* Fraternidad Local */}
        <details className="doc-panel">
          <summary className="doc-panel__title">Fraternidad local</summary>
          <div className="doc-content">
            <p>
              <strong>El Consejo de la Fraternidad y el Ministro</strong>
            </p>
            <p>
              <strong>Art. 4</strong>
            </p>
            <p>
              La Fraternidad es animada y guiada por un Consejo y por un
              Ministro, elegidos en la forma y en los términos previstos en el
              presente Estatuto. Forma parte del Consejo el Asistente
              espiritual, que ejerce su oficio en conformidad con el Art. 90.2
              de las Constituciones O.F.S. y el Art. 12.3 del Estatuto para la
              Asistencia espiritual y pastoral a la Orden Franciscana Seglar.
            </p>
            <p>
              <strong>El Consejo de la Fraternidad</strong>
            </p>
            <p>
              <strong>Art. 5</strong>
            </p>
            <p>
              1. El Consejo de la Fraternidad, formado a norma del art. 49 de
              las Constituciones O.F.S., ejerce las competencias que le atribuye
              el art. 50 de las mismas. Se ocupa, además, de:
              <ul>
                <li>preparar las reuniones de la Fraternidad;</li>
                <li>
                  promover, con espíritu de familia, encuentros de oración,
                  estudio, actividades caritativas y apostólicas, con los
                  integrantes de la Familia Franciscana de su ámbito;
                </li>
                <li>decidir sobre la dispensa del tiempo de iniciación;</li>
                <li>
                  decidir sobre la admisión de candidatos a la formación
                  inicial;
                </li>
                <li>
                  considerar la oportunidad de prolongar el tiempo de la
                  formación inicial;
                </li>
                <li>
                  decidir sobre la admisión de los candidatos a la profesión;
                </li>
                <li>
                  adoptar las medidas a las que se refieren las Constituciones
                  O.F.S., arts. 56-57, respecto de quienes desatienden las
                  obligaciones que se derivan de la vida de Fraternidad, y el
                  art. 58, en los casos expresamente previstos;
                </li>
                <li>
                  decidir sobre la constitución de secciones o grupos dentro de
                  la Fraternidad o en común con otras Fraternidades locales;
                </li>
                <li>
                  confiar la animación y la guía de las secciones o grupos a un
                  miembro del Consejo o a otro profeso de la misma Fraternidad o
                  de una Fraternidad próxima;
                </li>
                <li>
                  pedir al Consejo de nivel superior el paso de la Fraternidad
                  local al cuidado pastoral de otra obediencia de la Primera
                  Orden o de la Tercera Orden Regular (TOR).
                </li>
              </ul>
            </p>
            <p>
              2. Donde haya Juventud Franciscana (JUFRA), ésta participa en el
              Consejo de la Fraternidad con un representante que, si es miembro
              profeso de la O.F.S., tiene derecho a voto (Cfr. Const. O.F.S.
              97.4).
            </p>
            <br />
            <br />
            <p>
              <strong>El Ministro</strong>
            </p>
            <p>
              <strong>Art. 6</strong>
            </p>
            <p>
              1. El Ministro es el primer responsable de la Fraternidad (Cfr.
              Const. O.F.S. 51.1) y ejerce su oficio colegialmente con el
              Consejo.
            </p>
            <p>
              2. Las competencias del Ministro están indicadas en el art. 51 de
              las Constituciones O.F.S. Corresponde al Ministro, además, cuidar
              el funcionamiento de los diversos oficios, y vigilar que los
              ingresos y los gastos se realicen según la indicaciones aprobadas
              previamente por el Consejo.
            </p>
            <br />
            <br />
            <p>
              <strong>La Juventud Franciscana (JUFRA)</strong>
            </p>
            <p>
              <strong>Art. 7</strong>
            </p>
            <p>
              1. La Fraternidad local, siguiendo las orientaciones del Consejo
              de nivel superior y en colaboración con el Asistente espiritual,
              busque los medios más idóneos para promover la creación de una
              Fraternidad de Jóvenes Franciscanos.
            </p>
            <p>
              2. La Juventud Franciscana tiene Estatuto, organización y métodos
              de formación pedagógica propios y adecuados a sus exigencias (Cfr.
              Const. O.F.S. 96.5; Documentos Juventud Franciscana Argentina)
            </p>
            <p>
              3. El Movimiento JUFRA comprende las siguientes etapas:
              <ul>
                <li>
                  Heraldos: para la niñez (a nivel internacional llamado niños
                  franciscanos, NIFRA), comprende a los niños entre 9 y 12 años.
                </li>
                <li>
                  Juglares: para la adolescencia (Adolescentes Franciscanos,
                  ADOFRA), comprende a los adolescentes entre los 13 y los 17
                  años.
                </li>
                <li>
                  JUFRA: para la juventud (Cfr. CT. 37-40), comprende a los
                  jóvenes desde los 18 años a los 30 años (Documentos JUFRA)
                </li>
              </ul>
            </p>
            <p>
              4. La Fraternidad organice encuentros con los jóvenes franciscanos
              (Regla O.F.S. 24).
            </p>
            <p>
              5. Para compartir su experiencia de fe, las Fraternidades O.F.S. y
              JUFRA realicen iniciativas comunes y colaboren, aportando el
              carisma franciscano, en la tarea de la evangelización y en el
              vasto campo de las realidades temporales.{" "}
            </p>
            <p>
              6. Cada Fraternidad local elija o designe en Capítulo un miembro
              idóneo, que sea propuesto por JUFRA donde exista (preferentemente,
              designados entre aquellos que hayan transitado en su vida el
              camino de la JUFRA) para la promoción y el acompañamiento de la
              Fraternidad de Jóvenes Franciscanos, como animador fraterno y
              representante de la O.F.S. (Cfr. Const. O.F.S. 97.2 - 97.4 y Doc.
              JUFRA 35).
            </p>
            <br />
            <br />
            <p>
              <strong>Tiempo de iniciación</strong>
            </p>
            <p>
              <strong>Art. 8</strong>
            </p>
            <p>
              1. Es la etapa destinada a formar y discernir la vocación
              cristiana y franciscana del candidato y encaminada a iniciar una
              convivencia fraternal con los hermanos; etapa que tendrá una
              duración prudencial a juicio de cada Fraternidad local, no
              inferior a un año y no más de dos; esta etapa culmina con la
              admisión (Cfr. Const. O.F.S. 38).
            </p>
            <p>
              2. Los hermanos pertenecientes a la etapa JUFRA, con dos años de
              signación serán eximidos de este período, previo informe por
              escrito del Consejo Local JUFRA al Consejo Local O.F.S. (Cfr.
              Const. O.F.S. 38.3).
            </p>
            <p>
              3. Las reuniones de formación inicial, durante el tiempo de
              iniciación deberán ser como mínimo quincenales, destinadas al
              discernimiento de la vocación y al mutuo conocimiento y así poder
              decidir apropiadamente sobre la admisión del candidato (Cfr.
              Const. O.F.S. 38.1).{" "}
            </p>
            <br />
            <br />
            <p>
              <strong>Admisión</strong>
            </p>
            <p>
              <strong>Art. 9</strong>
            </p>
            <p>
              La admisión deberá ser pedida por escrito al Ministro de la
              Fraternidad local. El Ministro responderá por escrito dentro de
              los treinta días de recibido el pedido (Cfr. Const. O.F.S. 39) La
              admisión se realizará de acuerdo al Rito de Iniciación en la Orden
              Franciscana Seglar.
            </p>
            <br />
            <br />
            <p>
              <strong>Tiempo de formación</strong>
            </p>
            <p>
              <strong>Art. 10</strong>
            </p>
            <p>
              Comprende un período de estudio y asimilación de la espiritualidad
              franciscana, de una duración no inferior a un año (Cfr. Const.
              O.F.S. 40.1). La formación inicial dura hasta la profesión y se
              realiza de acuerdo con lo establecido en los artículos 40 y 41 de
              las Constituciones Generales, el plazo puede prolongarse a pedido
              fundado del Consejo de la Fraternidad o a pedido del formando.
            </p>
            <br />
            <br />
            <p>
              <strong>Integración</strong>
            </p>
            <p>
              <strong>Art. 11</strong>
            </p>
            <p>
              Los Ministros y los responsables de formación de las Fraternidades
              locales deberán concretar encuentros entre los candidatos de
              Fraternidades cercanas, además del tiempo exigido para la
              formación en su propia Fraternidad. Se recomiendan encuentros
              similares entre los neo profesos. En dichos encuentros se tratarán
              temas de formación, como también se intercambiarán ideas sobre
              objetivos de la Orden, experiencias de vida evangélica en las
              Fraternidades, etc., procurando una maduración en la vocación y un
              crecimiento en la unidad entre las Fraternidades locales (Cfr.
              Const. O.F.S. 40.1 y 44.2).
            </p>
            <p>
              <strong>Profesión y Signo de pertenencia</strong>
            </p>
            <p>
              <strong>Art. 12</strong>
            </p>
            <p>
              <strong>Profesión</strong>
            </p>
            <p>
              <ul>
                <ol>1. La edad mínima para la Profesión es de 21 años</ol>
                <ol>
                  2. La Profesión incorpora al candidato a la Orden y es de por
                  sí un compromiso perpetuo.
                </ol>
                <ol>
                  3. En Argentina por razones pedagógicas precede una profesión
                  temporal a la profesión perpetua.
                </ol>
                <ol>
                  4. En lo referente a la profesión temporal debe renovarse
                  anualmente. El tiempo total de la profesión temporal no puede
                  superar los tres años.
                </ol>
                <ol>
                  5. La profesión deberá ser pedida por escrito al Ministro de
                  la Fraternidad local. El Ministro responderá por escrito
                  dentro de los treinta días de recibido el pedido.
                </ol>
                <ol>
                  6. El acto de la profesión es registrado y conservado en un
                  libro de profesiones, distinto del libro de actas de la
                  Fraternidad.
                </ol>
                <ol>
                  7. La profesión se realizará de acuerdo al Rito de la
                  Profesión o Compromiso de Vida Evangélica dentro de la
                  Celebración Eucarística.
                </ol>
              </ul>
            </p>
            <br />
            <p>
              <strong>Signo de pertenencia</strong>
            </p>
            <p>
              El signo distintivo de pertenencia a la Orden Franciscana Seglar
              en la República Argentina, que se entrega en el rito de admisión y
              profesión, es la TAU con la inscripción O.F.S. (Cfr. Const. O.F.S.
              43 y Decisión sobre el uso del "hábito" en la OFS, aprobada por el
              Capítulo General celebrado en São Paolo, Brasil, del 22 al 29 de
              octubre de 2011 y Circular de la Ministra General OFS: 34/08-11 -
              Prot. N. 2366/11, del 8 de diciembre de 2011, punto 10).{" "}
            </p>
            <br />
            <br />
            <p>
              <strong>Formación permanente</strong>
            </p>
            <p>
              <strong>Art. 13</strong>
            </p>
            <p>
              1. La formación permanente es un instrumento necesario para ayudar
              a los franciscanos seglares en el camino de conversión y en su
              misión en la Iglesia y en la sociedad.
            </p>
            <p>
              2. El Consejo nacional preparará los programas de formación
              permanente, de acuerdo con las exigencias de la vida actual,
              procurando encarnar el carisma franciscano a la luz de los signos
              de los tiempos, en consonancia con la realidad eclesial y
              temporal.
            </p>
            <p>
              3. Los Consejos nacional y regional programarán cursos de
              profundización y actualización para todos los responsables de la
              animación y guía de las Fraternidades locales.
            </p>
            <p>
              4. El Consejo de la Fraternidad local determinará la forma de
              realizar los programas de formación predispuestos por el Consejo
              nacional y/o regional.
            </p>
            <p>
              5. La Fraternidad local valore responsablemente la participación
              en las ocasiones y las iniciativas de formación ofrecidas por el
              Consejo nacional y/o regional y por la Iglesia local
            </p>
            <p>
              6. El Consejo nacional y/o el regional, serán corresponsables de
              la formación de los hermanos para promover y animar la vocación
              franciscana seglar.
            </p>
            <p>
              7. Todos los miembros de la Orden Franciscana Seglar deben
              sentirse comprometidos, partiendo del testimonio de la propia
              vida, a la promoción vocacional.
            </p>
            <br />
            <br />
            <p>
              <strong>Participación en la vida de la Fraternidad local</strong>
            </p>
            <p>
              <strong>Art. 14</strong>
            </p>
            <p>
              1. La vida en la Orden Franciscana Seglar se concretiza en el
              encuentro fraterno.
            </p>
            <p>
              2. Los miembros de la O.F.S., en razón de su vocación y
              pertenencia, son corresponsables de la vida de su Fraternidad y de
              la Orden.
            </p>
            <p>
              Los Consejos de los diversos niveles deben esforzarse para que las
              reuniones periódicas y los encuentros de la Fraternidad (Cfr.
              Const. O.F.S. 53) sean orientados a aumentar la comunión entre los
              hermanos y su crecimiento y maduración espiritual.
            </p>
            <p>
              3. En las diversas reuniones de la Fraternidad se reserve un
              espacio adecuado al diálogo, a la formación, al estudio de la
              Palabra de Dios, a la celebración eucarística, y a las devociones
              típicamente franciscanas, a la oración, uniéndose a la Iglesia en
              la Liturgia de las horas.{" "}
            </p>
            <p>
              4. Pueden participar en la vida de la Fraternidad aquellas
              personas, que sin pertenecer a la O.F.S., desean compartir su vida
              y actividades. (Cfr. Const. O.F.S. 53.5 y 103.1).
              <ul>
                <li>
                  Cada Fraternidad local manifestará la necesidad de acoger a
                  todos los hombres con ánimo humilde y cortés, como don del
                  Señor e imagen de Cristo.
                </li>{" "}
                <li>
                  Los hermanos que sin pertenecer a la O.F.S., muestren el deseo
                  de participar en la vida y en las actividades de una
                  Fraternidad local, harán efectiva su adhesión a la misma
                  solicitando su integración por escrito al Ministro Local.
                  Estos hermanos, no tendrán ningún vínculo jurídico con la
                  Orden Franciscana Seglar.
                </li>{" "}
                <li>
                  El Número de hermanos adherentes no debe superar el 50 % de
                  los miembros de la Fraternidad Local al momento de la
                  solicitud. (Cfr. Circ. 35/02-08 del 1° de enero de 2006).
                </li>
                <li>
                  Es responsabilidad del Consejo local procurar los medios
                  necesarios para la inserción y formación de estos hermanos.
                </li>
                <li>
                  La Fraternidad toda procurará ayudarles con la acogida, la
                  oración y el ejemplo, en el camino para seguir los valores
                  evangélicos y franciscanos.
                </li>
              </ul>
            </p>
            <p>
              6. La reincorporación de un hermano según lo establecido en el
              Art. 57 de las Const. O.F.S., necesita convenientemente un periodo
              discernimiento que se realizará con el asistente y el formador,
              que debe durar al menos seis meses.
            </p>
            <p>
              <strong>Art. 15</strong>
            </p>
            <p>
              1. La Fraternidad -en forma autónoma o en colaboración con la
              Familia Franciscana o con otras asociaciones o movimientos-
              promueva iniciativas apostólicas, caritativas y sociales en las
              que colaboren sus miembros, a través de la disponibilidad
              personal, con la contribución económica, y la oración.
            </p>
            <p>
              2. La Fraternidad, si no puede promover iniciativas apostólicas
              propias, se involucre en el apostolado de cada uno de sus
              miembros, manteniéndose informada y colaborando mediante la
              oración, el consejo y el afecto fraterno.
            </p>
            <p>
              <strong>Art. 16</strong>
            </p>
            <p>
              El Consejo de la Fraternidad adopte las iniciativas adecuadas para
              promover las vocaciones a la O.F.S., organizando oportunas
              “Jornadas vocacionales” u otro tipo de encuentros, en consonancia
              con la situación ambiental, y utilizando subsidios y material
              divulgativo.
            </p>
            <br />
            <br />
            <p>
              <strong>Fraternidades en formación</strong>
            </p>
            <p>
              <strong>Art. 17</strong>
            </p>
            <p>
              Para formar una nueva Fraternidad local se debe informar al
              Consejo de nivel regional o de no existir éste, al Consejo
              nacional.
            </p>
            <p>
              <strong>Art. 18</strong>
            </p>
            <p>
              Examinada y aprobada la petición por parte del Consejo de nivel
              superior, las personas interesadas y disponibles reciben la
              condición de “grupo en formación”.
            </p>
            <p>
              <strong>Art. 19</strong>
            </p>
            <p>
              El Consejo de nivel superior puede de común acuerdo con otra
              Fraternidad local existente, confiarle la misión de cuidar y
              suministrar formación al grupo en calidad de “Fraternidad
              garante”. En caso contrario, el Consejo de nivel superior cuidará
              y formará directamente al “grupo en formación”.
            </p>
            <p>
              <strong>Art. 20</strong>
            </p>
            <p>
              Un hermano que quiera solicitar la readmisión a la Orden en este
              grupo deberá solicitarlo al Consejo de nivel superior, el cual,
              pedido el informe establecido en el Art. 55 de las Constituciones
              O.F.S y realizado el procedimiento establecido el Art 14.6 del
              presente Estatuto, decidirá.
            </p>
          </div>
        </details>

        {/* Fraternidad Regional */}
        <details className="doc-panel">
          <summary className="doc-panel__title">Fraternidad Regional</summary>
          <div className="doc-content">
            <p>
              <strong>Indicaciones generales</strong>
            </p>
            <p>
              <strong>Art. 21</strong>
            </p>
            <p>
              Las Fraternidades erigidas canónicamente en la Argentina se
              agrupan en Fraternidades regionales según criterios geográficos
              definidos por el Consejo nacional (C.N.O.F.S.).
            </p>
            <p>
              <strong>Art. 22</strong>
            </p>
            <p>
              Las Fraternidades regionales de la O.F.S. de Argentina son:
              <ul>
                <li>NOA I</li>
                <li>NOA II</li>
                <li>NEA</li>
                <li>CENTRO</li>
                <li>CUYO</li>
                <li>PROVINCIA DE BUENOS AIRES</li>
                <li>CIUDAD AUTONOMA DE BUENOS AIRES- LA PLATA</li>
                <li>GRAN BUENOS AIRES I</li>
                <li>GRAN BUENOS AIRES II</li>
                <li>LITORAL</li>
              </ul>
            </p>
            <p>
              Las Fraternidades regionales, adoptan las advocaciones marianas de
              devoción popular en su lugar:{" "}
              <ul>
                <li>NOA I, Ntra. Sra. Del Milagro</li>
                <li>NOA II, Ntra. Sra. del Valle</li>
                <li>NEA, Ntra. Sra. de Itatí</li>
                <li>CENTRO, Ntra. Sra. del Rosario del Milagro</li>
                <li>CUYO, Ntra. Sra. del Carmen de Cuyo</li>
                <li>
                  PROVINCIA DE BUENOS AIRES, Ntra. Sra. del Rosario de San
                  Nicolás
                </li>
                <li>
                  CIUDAD AUTONOMA DE BUENOS AIRES- LA PLATA, Ntra. Sra. de los
                  Buenos Aires
                </li>
                <li>GRAN BUENOS AIRES I, Ntra. Sra. de Lujan</li>
                <li>GRAN BUENOS AIRES II, Ntra. Sra. del Buen Viaje</li>
                <li>LITORAL, Ntra. Sra. Inmaculada de Garay</li>
              </ul>
            </p>
            <p>
              <strong>Art. 23</strong>
            </p>
            <p>
              Las Fraternidades regionales, a través de los propios Consejos,
              tienen el cometido de animar, guiar y coordinar todas las
              Fraternidades locales de su ámbito y mantenerlas unidas a la
              Fraternidad nacional (Cfr. Const. O.F.S. 61.1)
            </p>
            <p>
              <strong>Art. 24</strong>
            </p>
            <p>
              1. El Consejo nacional constituye las Fraternidades regionales, a
              tenor del art. 61.2 de las Constituciones. O.F.S
            </p>
            <p>
              2. Cada Fraternidad regional ha de tener como máximo 18
              Fraternidades y como mínimo 5. Cada Fraternidad local tiene que
              contar al menos con 5 miembros profesos activos.
            </p>
            <p>
              3. Desde el momento en que queda constituida una Región, empieza a
              transcurrir el tiempo precapitular. Se deja a la responsabilidad
              del Consejo nacional el nombramiento del Consejo regional
              provisorio, el cual convocará dentro del año al primer Capítulo
              electivo.
            </p>
            <p>
              4. Las Fraternidades regionales que hayan decidido fusionarse o
              dividirse presentarán su solicitud escrita al Consejo Nacional,
              con la documentación que acredite tal decisión, quien decidirá,
              dentro de los tres meses de recibida la solicitud.
            </p>
            <p>
              5. Cuando una Fraternidad regional ya constituida no cumpla con
              las condiciones establecidas en el punto 2 del presente artículo,
              pasará a estar en reorganización a cargo del Consejo Nacional
              hasta que se revierta la situación. De no restablecerse el número
              mínimo establecido en el plazo fijado, el Consejo Nacional deberá
              decidir sobre la incorporación de las Fraternidades locales a
              otras regiones.
            </p>
            <p>
              6. La Fraternidad regional es animada y guiada por:
              <ul>
                <li>el Capítulo</li>
                <li>la Asamblea,</li>
                <li>el Consejo regional,</li>
                <li>el Ministro.</li>
              </ul>
            </p>
            <br />
            <br />
            <p>
              <strong>El Capítulo</strong>
            </p>
            <p>
              <strong>Ar. 25</strong>
            </p>
            <p>
              1. El Capítulo regional es el órgano representativo de todas las
              Fraternidades locales existentes en su ámbito.
            </p>
            <p>
              2. El Capítulo regional, tiene potestad deliberativa y electiva en
              su ámbito.
            </p>
            <p>
              <strong>Art. 26</strong>
            </p>
            <p>
              Al Capítulo regional corresponde en particular:
              <ul>
                <li>
                  deliberar en materia de organización, formación, animación
                  cristiana del orden temporal y acción caritativa, teniendo en
                  cuenta la doctrina Social de la Iglesia, en consonancia con
                  las orientaciones del Consejo nacional;
                </li>
                <li>
                  examinar y aprobar la relación de la actividad desarrollada
                  por el Consejo regional;
                </li>
                <li>
                  examinar y aprobar la relación sobre la gestión económica y
                  patrimonial de la Fraternidad regional;
                </li>
                <li>
                  elegir cada tres años al Ministro y a los miembros seglares
                  del Consejo regional, en número previamente aprobado por el
                  mismo Capítulo;
                </li>
                <li>
                  modificar y votar el propio Estatuto, para someterlo a la
                  aprobación del Consejo nacional (Cfr. Const. O.F.S. 6.3).
                </li>
              </ul>
            </p>
            <p>
              <strong>Art. 27</strong>
            </p>
            <p>
              Son miembros del Capítulo regional:
              <ul>
                <li>los miembros del Consejo regional;</li>
                <li>
                  los Ministros de las Fraternidades locales (Cfr. Const. O.F.S.
                  77.2);
                </li>
                <li>
                  El presidente de la Conferencia de los Asistentes espirituales
                  regionales (donde exista) o el Asistente espiritual regional y
                  el Asistente espiritual regional de JUFRA;
                </li>
                <li>
                  el representante de la JUFRA a nivel regional, tiene derecho a
                  voto si es profeso en la O.F.S.
                </li>
              </ul>
            </p>
            <p>
              <strong>Art. 28</strong>
            </p>
            <p>
              El Capítulo regional es presidido por el Ministro regional. Las
              sesiones electivas son presididas por el Ministro nacional o su
              delegado, un franciscano seglar profeso perpetuo.
            </p>
            <p>
              <strong>Art. 29</strong>
            </p>
            <p>
              1. El Capítulo regional es convocado, de forma ordinaria, cada
              tres años y, de forma extraordinaria, siempre que lo solicite al
              menos una tercera parte de sus miembros o cuando el Consejo
              regional lo considere necesario
            </p>
            <p>2. El Capítulo regional electivo es convocado cada tres años.</p>
            <p>
              3. Corresponde al Ministro regional, oído el Consejo (Cfr. Const.
              O.F.S. 63.2,a) y previa consulta al Ministro nacional, convocar el
              Capítulo regional electivo, al menos 60 días antes de la fecha de
              la reunión.
            </p>
            <br />
            <br />
            <p>
              <strong>Otra forma de reunión Capítulo Regional Fraterno </strong>
            </p>
            <p>
              <strong>Art. 30</strong>
            </p>
            <p>
              1. El encuentro que se celebra en nuestro país y al que están
              convocados todos los hermanos de la Región, sin potestad y con la
              finalidad de fomentar la Fraternidad, se llama tradicionalmente
              Capítulo Fraterno.
            </p>
            <p>
              2. El Ministro Regional, oído el Consejo Regional, convoca al
              Capítulo Regional Fraterno al menos una vez durante el trienio de
              su servicio.
            </p>
            <br />
            <br />
            <p>
              <strong>Asamblea Regional</strong>
            </p>
            <p>
              <strong>Art. 31</strong>
            </p>
            <p>
              1. La reunión de los miembros del Consejo regional y los Ministros
              locales se denomina Asamblea regional.
            </p>
            <p>
              2. Sólo tienen derecho a voto en ella: los miembros elegidos en
              Capítulo del Consejo regional, los Ministros locales y, si es
              profeso, el Ministro regional de la JUFRA. Los Asistentes
              regionales pueden votar siempre que no se trate de elecciones y
              asuntos económicos. Pueden ser invitados los Asistentes locales.
              Podrá acompañar a cada Ministro local un hermano profeso de su
              Fraternidad, con voz pero sin voto.{" "}
            </p>
            <p>
              3. El Consejo regional convocará al menos una vez al año la
              Asamblea y señalará el lugar y la fecha de su reunión con 60 días
              de antelación.
            </p>
            <p>
              4. Compete a la Asamblea:
              <ul>
                <ol>
                  a. Establecer acuerdos para animar las prioridades decididas
                  en el Capítulo Regional.
                </ol>
                <ol>
                  b. Conocer el informe anual del Consejo Regional y evaluarlo.
                </ol>
                <ol>c. Presentar el Informe local Anual a la Asamblea.</ol>
                <ol>d. Aprobar el presupuesto desarrollado por el Consejo</ol>
                <ol>e. Fijar el aporte anual regional.</ol>
              </ul>
            </p>
            <br />
            <br />
            <p>
              <strong>El Consejo Regional</strong>
            </p>
            <p>
              <strong>Art. 32</strong>
            </p>
            <p>
              1. El Consejo regional es el órgano de gobierno de la Fraternidad
              regional, con las competencias previstas en el art. 62.2 de las
              Constituciones O.F.S.
            </p>
            <p>
              2. Al Consejo regional le corresponde además:
              <ul>
                <ol>
                  a) favorecer y promover oportunas colaboraciones en la
                  formación inicial y permanente con las Fraternidades
                  regionales limítrofes;
                </ol>
                <ol>
                  b) adaptar a la situación local, si es necesario, los medios y
                  métodos de formación;
                </ol>
                <ol>
                  c) fomentar la formación de los Ministros y de los demás
                  responsables de las Fraternidades locales;
                </ol>
                <ol>
                  d) promover la relación de las Fraternidades locales con los
                  demás componentes de la Familia franciscana y con las
                  asociaciones apostólicas laicales y las Iglesias particulares;
                </ol>
                <ol>
                  e) favorecer la presencia en las realidades sociales,
                  políticas y culturales de la región, particularmente
                  orientadas al respeto de la vida, la justicia, y la
                  salvaguarda de la creación.
                </ol>
                <ol>
                  f) expresar su opinión y colaborar en la erección canónica de
                  una nueva Fraternidad local;
                </ol>
                <ol>
                  g) disponer, a petición de la Fraternidad local interesada, y
                  después de haber obtenido el consentimiento de los competentes
                  Superiores mayores de la Primera Orden y de la TOR, el paso de
                  la Fraternidad al cuidado pastoral de otra Orden religiosa
                  franciscana, según lo previsto en el art. 47.2 de las
                  Constituciones O.F.S.;
                </ol>
                <ol>
                  h) proponer al Consejo nacional, la erección de Fraternidades
                  personales, después de haber verificado la validez de las
                  motivaciones presentadas por los interesados. Para ello el
                  Ministro regional transmite al Ministro nacional, junto con la
                  valoración del Consejo regional, la solicitud escrita de los
                  miembros profesos interesados en la erección de la Fraternidad
                  personal y un breve informe, en el que se indiquen:
                  <ul>
                    <li>los motivos que justifican su erección;</li>
                    <li>
                      la descripción de las actividades apostólicas que se
                      proponen desarrollar;
                    </li>
                    <li>
                      la propuesta para la designación de un Asistente
                      espiritual idóneo;
                    </li>
                    <li>la sede de la Fraternidad.</li>
                  </ul>
                </ol>
              </ul>
            </p>
            <p>
              <strong>Art. 33</strong>
            </p>
            <p>
              1. El Consejo regional está formado por: El Ministro, el
              Viceministro, los Consejeros Regionales, el Ministro Regional de
              JUFRA y los Asistentes.
              <ul>
                <ol>
                  a) Son Consejeros Regionales: El Responsable de Formación, el
                  Responsable de Prensa y difusión, el Responsable de Justicia ,
                  Paz y Salvaguarda de la Creación, el Animador fraterno,
                  Secretario, Tesorero y otros que el Capitulo decida.
                </ol>
                <ol>
                  b) Son miembros de derecho del Consejo regional los miembros
                  de la Conferencia de Asistentes espirituales regionales o, en
                  su defecto, el Asistente espiritual regional, a tenor del art.
                  21 del Estatuto para la Asistencia espiritual y pastoral a la
                  O.F.S.
                </ol>
                <ol>
                  c) El representante responsable regional de la JUFRA tiene
                  derecho a voto si es miembro profeso de la O.F.S.
                </ol>
              </ul>
            </p>
            <p>
              2. El Viceministro, Secretario y Tesorero desempeñan, con las
              oportunas adaptaciones, las competencias previstas en el art.
              52,1.2.4 de las Constituciones O.F.S. Además es competencia del
              secretario: Certificar las copias de los documentos de la
              Fraternidad y llevar el inventario del patrimonio histórico de la
              Fraternidad.
            </p>
            <p>
              3. Es competencia del Responsable de la formación:
              <ul>
                <ol>
                  a) preparar los programas de formación para los formadores y
                  los responsables de las Fraternidades locales;
                </ol>
                <ol>
                  b) divulgar el material formativo preparado por el Consejo
                  nacional, adaptándolo, si fuese necesario, a la situación
                  local;
                </ol>
                <ol>
                  c) velar por la calidad de la formación que se imparte en las
                  Fraternidades locales;
                </ol>
                <ol>
                  d) aportar los medios necesarios para la formación común entre
                  las Fraternidades limítrofes.
                </ol>
              </ul>
            </p>
            <p>
              4. Es competencia del Responsable de Justicia, Paz y Salvaguarda
              de la Creación:
              <ul>
                <ol>
                  a) Trabajar sobre la toma de conciencia en la Dimensión
                  Ecológica del Carisma Franciscano.
                </ol>
                <ol>
                  b) Trabajar en estrecha colaboración con el Responsable de
                  formación.
                </ol>
                <ol>
                  c) Organizar, colaborar o difundir acciones propias u de otras
                  entidades a favor de la vida y de la creación toda.
                </ol>
              </ul>
            </p>
            <p>
              5. Es competencia del Responsable de Prensa y Difusión: Ser nexo
              de comunicación de las noticias, hechos, acontecimientos,
              celebraciones de las Fraternidades y de la Familia franciscana, a
              través de los medios de comunicación.
            </p>
            <p>
              <strong>Art. 34</strong>
            </p>
            <p>
              El Consejo regional:
              <ul>
                <ol>
                  1) es convocado por el Ministro regional al menos 15 días
                  antes de la fecha de la reunión, indicando los asuntos a
                  tratar (orden del día);
                </ol>
                <ol>
                  2) se reúne, de forma ordinaria, al menos dos veces al año y,
                  de forma extraordinaria, siempre que lo solicite al menos una
                  tercera parte de sus miembros o cuando el Ministro lo
                  considere necesario.
                </ol>
              </ul>
            </p>
            <br />
            <p>
              <strong>El Ministro Regional</strong>
            </p>
            <p>
              <strong>Art. 35</strong>
            </p>
            <p>
              El Ministro, es el primer responsable de la Fraternidad regional
              (Cfr. Const. O.F.S. 63.1) y ejerce su oficio colegialmente con el
              Consejo. Representa, a todos los efectos, a la Fraternidad
              regional y desempeña las competencias establecidas en el art. 63
              de las Constituciones O.F.S. Vela, además, por el cumplimiento de
              los diversos oficios, y dispone los ingresos y los pagos en base a
              las indicaciones previamente aprobadas por el Consejo regional
            </p>
          </div>
        </details>

        {/* Fraternidad Nacional */}
        <details className="doc-panel">
          <summary className="doc-panel__title">Fraternidad Nacional</summary>
          <div className="doc-content">
            <p>
              <strong>Art. 36</strong>
            </p>
            <p>
              La Fraternidad nacional de la Argentina adopta la advocación
              mariana: Ntra. Sra. de la Porciúncula.
            </p>
            <p>
              <strong>Art. 37</strong>
            </p>
            <p>
              La Fraternidad nacional es animada y guiada por:
              <ul>
                <li>Capítulo</li>
                <li>Asamblea nacional</li>
                <li>El Consejo nacional</li>
                <li>El Ministro</li>
              </ul>
            </p>
            <br />
            <p>
              <strong>El Capítulo</strong>
            </p>
            <p>
              <strong>Art. 38</strong>
            </p>
            <p>
              1. El Capítulo nacional es el órgano representativo de todas las
              Fraternidades de la República Argentina
            </p>
            <p>
              2. El Capítulo ordinario tiene potestad legislativa, deliberativa
              y electiva en el ámbito de la Fraternidad nacional
            </p>
            <p>
              3. El Capitulo nacional, en sede electiva, asume la denominación
              de «Capítulo nacional electivo».
            </p>
            <p>
              4. Al Capítulo compete en particular:
              <ul>
                <ol>
                  a) decidir en materia de organización, formación, animación
                  cristiana del orden temporal, teniendo en cuenta la doctrina
                  Social de la Iglesia y acción caritativa en su ámbito;
                </ol>
                <ol>
                  b) examinar y aprobar la relación de la actividad desarrollada
                  por el Consejo nacional;
                </ol>
                <ol>
                  c) examinar y aprobar la relación sobre la gestión económica y
                  patrimonial de la Fraternidad nacional;
                </ol>
                <ol>
                  d) elegir cada tres años al Ministro nacional, a los otros
                  miembros seglares del Consejo nacional, en número aprobado por
                  el Capítulo y al Consejero internacional;
                </ol>
                <ol>
                  e) modificar y votar el propio Estatuto, para presentarlo a la
                  aprobación de la Presidencia del CIOF;
                </ol>
                <ol>
                  f) decidir las prioridades y sugerir acciones para la vida de
                  la Fraternidad nacional.
                </ol>
              </ul>
            </p>
            <p>
              <strong>Art. 39</strong>
            </p>
            <p>
              El Capítulo nacional está compuesto por:
              <ul>
                <ol>1. los miembros del Consejo nacional;</ol>
                <ol>
                  2. los Ministros regionales y locales (Cfr. Const. O.F.S.
                  77.2);
                </ol>
                <ol>
                  3. los miembros de la Conferencia de los Asistentes
                  espirituales nacionales (donde exista) o el Asistente nacional
                  (Cfr. Estatuto para la Asistencia 19);
                </ol>
                <ol>
                  4. el Ministro nacional de JUFRA, con derecho de voto si es
                  profeso en la O.F.S.;
                </ol>
                <ol>
                  5. Los Asistentes espirituales podrán ser invitados a
                  participar en el Capítulo (Cfr. Estatuto para la Asistencia
                  16.4).
                </ol>
              </ul>
            </p>
            <p>
              <strong>Art. 40</strong>
            </p>
            <p>
              1. El Capítulo nacional es presidido por el Ministro nacional. La
              sesión electiva es presidida por el Ministro General o su
              delegado.
            </p>
            <p>
              2. El Capítulo nacional es convocado de forma ordinaria, cada tres
              años y de forma extraordinaria, siempre que lo solicite, al menos,
              una tercera parte de sus miembros o cuando el Consejo nacional lo
              considere necesario.
            </p>{" "}
            <p>3. El Capítulo nacional electivo es convocado cada tres años.</p>{" "}
            <p>
              4. Al ministro nacional corresponde convocar el Capítulo nacional
              ordinario electivo, oído el Consejo nacional sobre las
              formalidades de la convocatoria, al menos 90 días antes de la
              fecha de la reunión.
            </p>{" "}
            <p>
              5. El Ministro general debe ser informado con la suficiente
              antelación
            </p>
            <br />
            <p>
              <strong>Otra forma de reunión Capítulo Nacional Fraterno </strong>
            </p>
            <p>
              <strong>Art. 41</strong>
            </p>
            <p>
              1. El encuentro que se celebra en nuestro país y al que están
              convocados todos los hermanos de la República Argentina, con la
              finalidad de fomentar la Fraternidad, se llama tradicionalmente
              Capítulo Nacional Fraterno.
            </p>{" "}
            <p>
              2. El Ministro nacional, oído el Consejo nacional convoca al
              Capítulo Nacional Fraterno anualmente con 60 días de anticipación.
            </p>{" "}
            <p>
              3. El Consejo Nacional puede suspender el Capítulo Nacional
              Fraterno, previo acuerdo de la Asamblea Nacional y cuando de tal
              modo no transcurran más de veinticuatro meses sin que se celebre
              tal Capítulo.
            </p>
            <br />
            <p>
              <strong>Asamblea Nacional</strong>
            </p>
            <p>
              <strong>Art. 42</strong>
            </p>
            <p>
              1. La reunión de los miembros del Consejo nacional y los Ministros
              regionales a tenor del artículo 68.2 de las Constituciones
              Generales., conforme con la tradición en nuestro país se denomina
              Asamblea Nacional.
            </p>
            <p>
              2. Sólo tienen derecho de voto en ella los miembros elegidos en
              capítulo del Consejo Nacional, los ministros regionales y, si es
              profeso, el Ministro nacional de la JUFRA. Los Asistentes
              Nacionales pueden votar siempre que no se trate de elecciones y
              asuntos económicos. Pueden ser invitados los Asistentes Regionales
              y el Ministro regional de la JUFRA correspondiente al lugar donde
              la Asamblea se reúna. Podrá acompañar a cada Ministro regional un
              hermano de su región, como observador, sin voz, ni voto.
            </p>
            <p>
              3. El Consejo nacional convocará al menos una vez al año la
              Asamblea y señalará el lugar y la fecha de su reunión con 60 días
              de antelació
            </p>
            n.
            <p>
              4. Compete a la Asamblea:
              <ul>
                <ol>
                  a. Establecer acuerdos para animar las prioridades decididas
                  en el Capítulo Nacional.{" "}
                </ol>
                <ol>
                  b. Cumplir con las demás atribuciones que le confieren estos
                  Estatutos.
                </ol>
                <ol>
                  c. Conocer el informe anual del Consejo Nacional y evaluarlo.
                </ol>
                <ol>
                  d. Presentar el Informe Regional Anual y Censo regional anual
                  a la Asamblea.
                </ol>
                <ol>e. Aprobar el presupuesto desarrollado por el Consejo.</ol>
                <ol>f. Fijar el aporte anual nacional.</ol>
              </ul>
            </p>
            <br />
            <p>
              <strong>El Consejo Nacional</strong>
            </p>
            <p>
              <strong>Art. 43</strong>
            </p>
            <p>
              1. El Consejo nacional es el órgano de gobierno de la Fraternidad
              nacional. Cumple las funciones previstas en el art. 66.2 de las
              Constituciones O.F.S.
            </p>
            <p>
              2. Al Consejo nacional corresponde, además:{" "}
              <ul>
                <ol>
                  a) preparar y aprobar los programas y los subsidios de la
                  formación inicial y permanente;
                </ol>
                <ol>b) aprobar la constitución de Fraternidades regionales</ol>;
                <ol>
                  c) aprobar, directamente o a propuesta del Consejo regional,
                  la creación de Fraternidades personales, después de haber
                  comprobado la validez y el fundamento de las motivaciones, y
                  de haber informado previamente al competente Superior mayor de
                  la Primera Orden y de la TOR, a quien corresponde la erección
                  canónica y garantizar su asistencia espiritual y pastoral;
                </ol>
                <ol>
                  d) aprobar los Estatutos de las Fraternidades de nivel
                  inferior (regional y local) y de las Fraternidades personales.
                </ol>
                <ol>
                  e) proponer al Capítulo electivo el número de miembros que han
                  de componer el Consejo nacional que va a ser elegido.
                </ol>
              </ul>
            </p>
            <p>
              <strong>Art. 44</strong>
            </p>
            <p>
              1. El Consejo nacional está constituido por:{" "}
              <ul>
                <ol>
                  a) El Ministro, el Viceministro, los Consejeros Nacionales, el
                  Ministro Nacional de JUFRA y los Asistentes de la Primera
                  Orden Franciscana (OFM, OFMConv, OFMCap) y Tercera Orden
                  Regular (TOR).
                </ol>
                <ol>
                  b) Son Consejeros nacionales: El Responsable de Formación, el
                  Responsable de Prensa y difusión, el Responsable de Justicia,
                  Paz y Salvaguarda de la Creación, y el Animador fraterno y los
                  demás Consejeros que el Capítulo Nacional establezca.
                </ol>
                <ol>
                  c) El Secretario y el Tesorero, profesos en la O.F.S., serán
                  designados por el Consejo a propuesta del Ministro, y no
                  tienen voto. Su oficio dura, lo que dura el Consejo pero
                  podrán ser removidos por éste.
                </ol>
              </ul>
            </p>
            <p>
              2. El Ministro nacional de la JUFRA, tiene derecho a voto si es
              miembro profeso de la O.F.S.
            </p>
            <p>
              3. El Viceministro, el Secretario y el Tesorero desempeñan, con
              las debidas adaptaciones, las funciones previstas en los art.
              52.1, 2 y 4 de las Constituciones O.F.S., además es competencia
              del Secretario: Certificar las copias de los documentos de la
              Fraternidad y llevar el inventario del patrimonio histórico de la
              Fraternidad.
            </p>
            <p>
              4. Es competencia del Responsable de la formación:{" "}
              <ul>
                <ol>
                  a) preparar y actualizar los programas y subsidios de
                  formación inicial y permanente, teniendo en cuenta las
                  orientaciones de la Presidencia del CIOFS y adaptándolas a las
                  realidades locales, que deben ser aprobados por el Consejo
                  nacional (Cfr. Const. O.F.S. 66.2c);
                </ol>
                <ol>
                  b) cuidar, en colaboración con expertos, la redacción de los
                  textos de formación;
                </ol>
                <ol>
                  c) promover, a nivel nacional, la organización de cursos,
                  jornadas y seminarios de actualización;
                </ol>
                <ol>
                  d) estar en contacto con los responsables regionales de la
                  formación.
                </ol>
              </ul>
            </p>
            <p>
              5. Es competencia del Responsable de Justicia Paz y Salvaguarda de
              la Creación:{" "}
              <ul>
                <ol>
                  a) Trabajar sobre la toma de conciencia en la Dimensión
                  Ecológica del Carisma Franciscano.
                </ol>
                <ol>
                  b) Trabajar en estrecha colaboración con el Responsable de
                  Formación.
                </ol>
                <ol>
                  c) Organizar, colaborar o difundir acciones propias o de otras
                  entidades a favor de la vida y de la creación toda.
                </ol>
              </ul>
            </p>
            <p>
              6. Es competencia del Responsable de Prensa y Difusión: Ser nexo
              de comunicación de las noticias, hechos, acontecimientos,
              celebraciones de las Fraternidades y de la familia franciscana, a
              través de los medios de comunicación.
            </p>
            <p>
              <strong>Art. 45</strong>
            </p>
            <p>
              1. El Ministro nacional convoca las reuniones del Consejo nacional
              al menos 30 días antes de la fecha de la reunión, indicando los
              asuntos a tratar.
            </p>
            <p>
              2. El Consejo nacional se reúne, de forma ordinaria, al menos tres
              veces al año y de forma extraordinaria, siempre que lo solicite,
              al menos, una tercera parte de sus miembros o cuando el Ministro
              lo considere necesario.
            </p>
            <br />
            <p>
              <strong>El Ministro Nacional</strong>
            </p>
            <p>
              <strong>Art. 46</strong>
            </p>
            <p>
              El Ministro, es el primer responsable de la Fraternidad nacional y
              ejerce su oficio colegialmente con el Consejo. Representa, a todos
              los efectos, a la Fraternidad nacional y desempeña las funciones
              establecidas en el art. 67 de las Constituciones. Vela, además,
              por el cumplimiento de los diversos oficios, y dispone los
              ingresos y los pagos en base a las indicaciones previamente
              aprobadas por el Consejo nacional.
            </p>
            <br />
            <p>
              <strong>
                El Consejero Internacional y el Consejero Internacional
                Sustituto
              </strong>
            </p>
            <p>
              <strong>Art. 47</strong>
            </p>
            <p>
              El Ministro nacional es el Consejero Internacional y el Consejero
              Internacional Sustituto es el viceministro Nacional, sus
              competencias están definidas en el Estatuto Internacional.
            </p>
          </div>
        </details>

        {/* Personaria Juridica */}
        <details className="doc-panel">
          <summary className="doc-panel__title">
            Personería Jurídica Civil
          </summary>
          <div className="doc-content">
            <p>
              <strong>Personería Jurídica Civil </strong>
            </p>
            <p>
              <strong>Art. 48</strong>
            </p>
            <p>
              1. Gozando cada Fraternidad de la O.F.S., en sus diversos niveles,
              de personalidad jurídica en la Iglesia, corresponde al respectivo
              Consejo obtener la personalidad jurídica por parte del Estado, con
              vistas a la adquisición y disposición de bienes, y para poder
              actuar como sujeto de derecho en la celebración de actos legales
              en los que la O.F.S. sea parte.
            </p>
            <p>
              2. Desde el Consejo nacional, se unificarán criterios respecto a
              la forma jurídica a adoptar para que se haga extensible a todas
              las Fraternidades de la O.F.S.
            </p>
            <p>
              3. Las Fraternidades locales canónicamente erigidas y las
              Fraternidades regionales, formalmente constituidas, que no cuenten
              con personería jurídica civil, podrán servirse de la personería
              jurídica de la Fraternidad nacional, con la debida autorización
              del Consejo nacional.
            </p>
            <p>
              4. Todas las Fraternidades podrán tener su personería jurídica
              civil, concordante con el Estatuto nacional vigente.
            </p>
            <br />
            <p>
              <strong>Patrimonio</strong>
            </p>
            <p>
              <strong>Art.49</strong>
            </p>
            <p>
              El Patrimonio de las Fraternidades locales, regionales y nacional
              lo constituyen:{" "}
              <ul>
                <ol>
                  1. las aportaciones voluntarias de sus miembros, o las
                  aportaciones anuales establecidas periódicamente por la
                  Asamblea del nivel correspondiente;
                </ol>
                <ol>
                  2. el excedente del ejercicio anterior, en el nivel
                  correspondiente;
                </ol>
                <ol>
                  3. los bienes muebles e inmuebles que, por adquisición,
                  herencia, donación o devolución de la naturaleza que fuere,
                  vienen a ser en todo caso propiedad de la Fraternidad.
                </ol>
              </ul>
            </p>
            <br />
            <p>
              <strong>Aportaciones Anuales</strong>
            </p>
            <p>
              <strong>Aportes a la Fraternidad Local</strong>
            </p>
            <p>
              <strong>Art. 50</strong>
            </p>
            <p>
              Todos los hermanos y hermanas ofrezcan una contribución en
              proporción a las posibilidades de cada uno, para sufragar los
              gastos necesarios de la vida de la Fraternidad o para obras de
              culto, de apostolado y de caridad.
            </p>
            <br />
            <p>
              <strong>
                Aportes a la Fraternidad regional, nacional, internacional
              </strong>
            </p>
            <p>
              <strong>Art. 51</strong>
            </p>
            <p>
              1. Los responsables de aportar a las Fraternidades regionales,
              nacional e internacional para que los Consejos respectivos puedan
              cumplir el servicio que le hemos encomendado, son las
              Fraternidades locales.
            </p>
            <p>
              2. Los aportes estarán calculados a partir del número de los
              hermanos activos y admitidos según el censo presentado en cada
              Asamblea, sobre los cuales deberán realizarse los aportes del
              próximo año. Con las excepciones de fallecimiento o paso a
              pasividad desde la Asamblea hasta el comienzo del año siguiente.
            </p>
            <p>
              3. Los aportes se aprobarán en Asamblea de acuerdo a un
              presupuesto presentado por el Consejo respectivo. (Cfr. Const.
              O.F.S. 30.3 In fine).
            </p>
            <br />
            <p>
              <strong>Administración de Bienes</strong>
            </p>
            <p>
              <strong>Art. 52</strong>
            </p>
            <p>
              <strong>
                La administración de los bienes puede ser ordinaria y
                extraordinaria
              </strong>
            </p>
            <p>
              La administración ordinaria y extraordinaria la fijará el Estatuto
              de cada Fraternidad.
            </p>
            <p>
              1. Disposición de bienes registrables{" "}
              <ul>
                <ol>
                  a) Para la disposición de bienes registrables de Fraternidades
                  locales será consultado necesariamente el Consejo Nacional.
                </ol>
                <ol>
                  b) Para la disposición de bienes registrables cuya
                  administración corresponda al Consejo Regional de la Orden
                  Franciscana Seglar será necesaria la autorización del Consejo
                  Nacional.
                </ol>
                <ol>
                  c) Para la disposición de bienes registrables cuya
                  administración corresponde al Consejo Nacional de la Orden
                  Franciscana Seglar de Argentina será necesaria la autorización
                  del Capitulo Nacional.
                </ol>
              </ul>
            </p>
            <p>
              <strong>Art. 53</strong>
            </p>
            <p>
              Respecto a la disposición del patrimonio, debe tenerse en cuenta
              que cuando se trata de bienes donados a la Iglesia, a causa de un
              voto, o de objetos preciosos, por su valor artístico o histórico,
              se requiere, además la licencia de la Santa Sede (CIC 638,3).
            </p>
            <p>
              <strong>Art. 54</strong>
            </p>
            <p>
              El tesorero de cada Fraternidad elaborará anualmente un
              presupuesto de ingresos y gastos para la vigencia siguiente, el
              cual será aprobado por el Capítulo local o Asamblea en las demás
              instancias. Dicho presupuesto servirá de guía para los informes
              que prepare el tesorero, como así también como base para fijar los
              aportes establecidos en el Art. 49.1 del presente Estatuto.
            </p>
            <p>
              El tesorero presentara periódicamente a los hermanos un informe
              pormenorizado del estado de las cuentas de la Fraternidad.
            </p>
            <p>
              <strong>Art. 55</strong>
            </p>
            <p>
              En el nivel nacional el ejercicio económico se inicia el 1 de
              noviembre y termina el 31 de octubre del año siguiente. Antes del
              01 de enero posterior a la finalización del período, el Tesorero
              de la Fraternidad presenta el balance de ingresos y gastos del
              ejercicio anterior, que ha de ser aprobado por el Consejo de la
              respectiva Fraternidad.
            </p>
            <p>
              <strong>Art.56</strong>
            </p>
            <p>
              Al principio de la gestión trienal de los Consejos, hágase el
              inventario de los bienes de la Fraternidad, que ha de revisarse
              periódicamente.
            </p>
            <p>
              <strong>Art.57</strong>
            </p>
            <p>
              1. Extinguida una Fraternidad local, regional o nacional, sus
              bienes pasan a la Fraternidad de nivel superior (Cfr. Const.
              O.F.S. 48.1).
            </p>
            <p>
              2. Restaurada la Fraternidad, según las Constituciones Generales y
              las leyes canónicas, ésta recobrará sus bienes, eventualmente
              existentes, la propia biblioteca y su archivo (Cfr. Const. O.F.S.
              48.2).
            </p>
            <p>
              <strong>Art. 58</strong>
            </p>
            <p>
              1. El Consejo que finaliza su mandato, antes de la celebración del
              Capítulo electivo, debe encargar a un experto, que no sea miembro
              del mismo Consejo, la verificación de la situación económica y
              patrimonial de la misma. La certificación debe ser presentada al
              Capitulo (Cfr. Const. O.F.S. 54.3; 62.2,j; 66.2,l).
            </p>
            <p>
              2. El Ministro, finalizado el trienio para el que fue elegido,
              entregue a su sucesor las actas y los documentos de la
              Fraternidad, así como los libros de la administración debidamente
              firmados por el Ministro y el Tesorero. El Tesorero, al término de
              su mandato, entregue a su sucesor el inventario debidamente
              actualizado y el saldo que resta en caja.
            </p>
            <br />
            <p>
              <strong>
                Procedimiento para la elección de los oficios y sustituciones
              </strong>
            </p>
            <p>
              <strong>Normas comunes</strong>
            </p>
            <p>
              <strong>Art.59</strong>
            </p>
            <p>
              1. El Capítulo electivo es convocado por el Ministro de la
              Fraternidad interesada, conforme a lo indicado en el art. 51.2 de
              las Const. O.F.S. (nivel local) y en los arts. 63.2 ( nivel
              regional) y 67.2 ( nivel nacional) de las Const. O.F.S.
            </p>
            <p>
              2. El Ministro de la Fraternidad de nivel superior puede anticipar
              o posponer la fecha del Capítulo electivo, pero no por más de dos
              meses a contar desde que se cumplan los tres años de la
              celebración del Capítulo anterior.
            </p>
            <p>
              3. Cumplido el tiempo de su mandato, el Consejo de la Fraternidad
              realice todos aquellos actos indispensables para la vida de la
              Fraternidad, que no pueden ser traslados para el futuro Consejo.{" "}
            </p>
            <p>
              4. No se acumulen más de un oficio en una misma persona salvo
              verdadera necesidad. Teniendo en cuenta los casos de
              incompatibilidad en los oficios. (Cfr. Const. OFS 82).
            </p>
            <p>
              <strong>Art. 60</strong>
            </p>
            <p>
              Para los Capítulos Electivos en los distintos niveles se dispondrá
              al menos de una jornada completa, previamente al acto electivo.
              Esta jornada comprenderá espacios para la oración, la reflexión,
              la elaboración de las prioridades para el trienio y la
              presentación de los candidatos.
            </p>
            <br />
            <p>
              <strong>
                Requisitos para la participación del acto electivo
              </strong>
            </p>
            <p>
              <strong>Art. 61</strong>
            </p>
            <p>
              1. El Hermano que decide dejar por un tiempo la fraternidad o el
              Hermano suspendido no podrá ejercer el “ derecho de voz activa y
              pasiva” Es responsabilidad del Consejo Local, comunicar al Consejo
              de Nivel Superior, quienes son los hermanos que poseen voz activa
              y pasiva antes de cada Capítulo Electivo, en los distintos niveles
              (Cfr. Const. OFS 56.3).
            </p>
            <p>
              2. Para poder participar de la elección, como candidato, sin estar
              presente, el hermano deberá hacer llegar por escrito a través del
              Ministro de su Fraternidad o delegado, la aceptación de su
              candidatura y la aceptación al oficio, de ser elegido.
            </p>
            <p>
              3. Se permite el voto por delegación escrita y firmada en caso de
              no poder estar presente en el capítulo.
            </p>
            <p>
              4. No se elijan para oficios hermanos con menos de los siguientes
              años de profesión perpetua:{" "}
              <ul>
                <ol>a) Nivel Regional: 2 años</ol>
                <ol>b) Nivel Nacional: 3 años</ol>
              </ul>
            </p>
            <p>
              <strong>Art. 61</strong>
            </p>
            <p>
              1. La votación para la elección a cada uno de los oficios ha de ir
              precedida de:{" "}
              <ul>
                <ol>
                  a) el nombramiento, por el Presidente del Capítulo, del
                  Secretario y dos Escrutadores, escogidos de entre los
                  capitulares;
                </ol>
                <ol>
                  b) la presentación, por los Capitulares, de al menos dos
                  candidaturas para cada uno de los oficios, que tenga en cuenta
                  la disponibilidad y las cualidades de los candidatos, dejando
                  a salvo la libertad de elección de cada hermano que no sea
                  legalmente impedido.
                </ol>
              </ul>
            </p>
            <p>
              2. La elección de cada oficio deberá hacerse por separado y en
              escrutinios distintos, según el siguiente orden:{" "}
              <ul>
                <ol>
                  a) en primera instancia, el Ministro (Cfr. Const. O.F.S.
                  78.1);
                </ol>
                <ol>
                  b) en segunda instancia, el Viceministro (Cfr. Const. O.F.S.
                  78.2);
                </ol>
                <ol>c) en instancias sucesivas, los restantes Consejeros : </ol>
                <ol>d) Responsable de formación </ol>
                <ol>e) Secretario </ol>
                <ol>f) Tesorero </ol>
                <ol>g) Animador Fraterno </ol>
                <ol>
                  h) Responsable de Justicia, Paz y Salvaguarda de la Creación{" "}
                </ol>
                <ol>i) Responsable de Prensa y difusión. </ol>
                <ol>
                  j) Por decisión de Capítulo Electivo, en el Nivel Regional el
                  Secretario y el Tesorero, profesos en la O.F.S. podrán ser
                  designados por el Consejo a propuesta del Ministro, no tienen
                  voto. Su oficio dura, lo que dura el consejo pero podrán ser
                  removidos por éste.{" "}
                </ol>
                <ol>
                  k) En el Niveles Nacional el secretario y el tesorero,
                  profesos en la O.F.S. serán designados por el Consejo a
                  propuesta del Ministro, no tienen voto. Su oficio dura, lo que
                  dura el consejo pero podrán ser removidos por éste.
                </ol>
              </ul>
            </p>
            <br />
            <p>
              <strong>Reelecciones y oficios vacantes</strong>
            </p>
            <p>
              <strong>Art. 63</strong>
            </p>
            <p>
              1. Para la reelección de los mismos oficios se procede en
              conformidad con el art. 79.1-3 de las Constituciones. O.F.S.{" "}
            </p>
            <p>
              2. Para la tercera elección sucesiva de los Consejeros, con
              independencia de la función desempeñada precedentemente
              (Secretario, Tesorero u otras), se suman los trienios
              transcurridos, a fin de determinar la mayoría requerida para la
              reelección (Cfr. Const. O.F.S. 79.3).
            </p>
            <p>
              3. Teniendo en cuenta que el Ministro no puede ser elegido como
              Viceministro, los trienios de los mandatos conferidos para los
              oficios de Ministro, Viceministro y Consejeros son distintos en
              los respectivos recorridos, por tanto en el paso de un oficio
              inferior a otro superior, lo mismo que de uno superior a otro
              inferior, no se suman los mandatos.{" "}
            </p>
            <p>
              4. El mandato conferido a los elegidos para cada oficio dura un
              trienio. Cuando el oficio de Ministro o de Viceministro quede
              vacante durante el trienio, se aplica el art. 81.1 y 2 de las
              Constituciones O.F.S. Si queda vacante un oficio de Consejero, el
              Consejo procederá a su sustitución a norma del art. 81.3 teniendo
              en consideración a los hermanos propuestos en el Capítulo pasado.
            </p>
            <br />
            <p>
              <strong>Participantes en el Capítulo electivo</strong>
            </p>
            <p>
              <strong>Art. 64</strong>
            </p>
            <p>
              1. Participan en el Capítulo electivo:{" "}
              <ul>
                <ol>
                  a) <strong>con derecho de voto</strong>{" "}
                  <p>
                    A nivel local: a tenor del art. 77 de las Constituciones,
                    tienen voz activa y pasiva todos los profesos perpetuos de
                    la Fraternidad local, que no estén legítimamente impedidos.
                    Los profesos temporales tienen solo voz activa;
                  </p>
                  <p>
                    A nivel regional:{" "}
                    <ul>
                      <li>
                        los miembros seglares del Consejo saliente, incluido el
                        representante de la JUFRA si es franciscano seglar
                        profeso;
                      </li>
                      <li>los Ministros de las Fraternidades locales</li>
                      <li>
                        aquellos casos en que el número de Fraternidades locales
                        sea inferior al número de miembros del Consejo regional
                        también tienen derecho a voto los Viceministros locales.
                      </li>
                    </ul>
                  </p>
                  A nivel nacional:{" "}
                  <ul>
                    <li>
                      los miembros seglares del Consejo saliente, incluido el
                      Ministro de la JUFRA si es franciscano seglar profeso;
                    </li>
                    <li>los Ministros regionales</li>
                    <li>los Ministros de las Fraternidades locales.</li>
                  </ul>
                </ol>
                <ol>
                  b) <strong>sin derecho de voto:</strong>{" "}
                  <p>
                    en las Fraternidades de cualquier nivel:{" "}
                    <ul>
                      <li>
                        el Ministro del nivel inmediatamente superior o su
                        delegado, que no sea miembro de la misma Fraternidad;
                      </li>
                      <li>
                        Un miembro de la Conferencia de los Asistentes
                        espirituales del nivel inmediatamente superior (donde
                        exista) o el Asistente espiritual del nivel
                        inmediatamente superior o el respectivo delegado;
                      </li>
                      <li>
                        el Asistente espiritual de la Fraternidad local o los
                        miembros de la Conferencia de los Asistentes
                        espirituales regionales o nacionales (donde exista) o el
                        Asistente espiritual regional o nacional, y el Asistente
                        espiritual regional o nacional de la JUFRA.
                      </li>
                    </ul>
                  </p>
                </ol>
              </ul>
            </p>
            <p>
              2. No participan en el Capítulo electivo de la Fraternidad local:{" "}
              <ul>
                <ol>
                  a) No participan en el Capítulo electivo de la Fraternidad
                  local los hermanos que han sido suspendidos a tenor del art.
                  56.2 y 56.3 de las Const. O.F.S. El Consejo de la Fraternidad
                  local preparará el informe de los miembros de la Fraternidad
                  excluidos del derecho de voz activa y pasiva, que debe ser
                  publicado con la convocatoria.
                </ol>
                <ol>
                  b) El “quórum” en la Fraternidad local, se calcula excluyendo
                  previamente a aquellos que, por válidos motivos de salud,
                  familiares, de trabajo o de distancia estén impedidos de
                  participar en el Capítulo electivo y tengan justificación por
                  parte del Consejo (Cfr. Const. O.F.S.53.3 y 77.4).
                </ol>
              </ul>
            </p>
            <br />
            <p>
              <strong>La Asistencia Espiritual y Pastoral</strong>
            </p>
            <p>
              <strong>Art. 65</strong>
            </p>
            <p>
              1. Los Superiores mayores de la Primera Orden y de la TOR ejercen
              el cuidado espiritual y pastoral de la O.F.S. por sí mismos o sus
              delegados (Cfr. Const. O.F.S. 86.1 y Estatuto para la Asistencia
              5.1-2)
            </p>
            .
            <p>
              2. Los citados Superiores mayores son responsables de la calidad
              del servicio pastoral y de la asistencia espiritual a las
              Fraternidades O.F.S. en sus diversos niveles (Cfr. Estatuto para
              la Asistencia 5.3).
            </p>
            <p>
              3. Los Superiores mayores acuerdan el modo más conveniente para
              asegurar la asistencia espiritual a las Fraternidades locales que,
              por causas de fuerza mayor, carecen de la misma (Cfr. Const.
              O.F.S. 88.4 y Estatuto para la Asistencia 7.1).{" "}
            </p>
            <p>
              4. Los Superiores mayores con jurisdicción en un mismo territorio,
              acuerdan el modo más conveniente de ejercer colegialmente sus
              deberes para con las Fraternidades regionales y nacionales de la
              O.F.S. (Cfr. Const. O.F.S. 88.5).{" "}
            </p>
            <p>
              5. El Asistente espiritual es nombrado por el competente Superior
              mayor, por escrito, oído el Consejo de la Fraternidad interesada
              (Cfr. Estatuto para la Asistencia 15.1 y 3).{" "}
            </p>
            <p>
              6. Cuando no es posible dar a la Fraternidad un Asistente
              espiritual de la Primera Orden o la TOR, el Superior mayor
              competente puede confiar la asistencia a:{" "}
              <ul>
                <ol>
                  a) Religiosos o religiosas pertenecientes a otros Institutos
                  franciscanos;
                </ol>
                <ol>
                  b) Franciscanos seglares, clérigos o laicos, específicamente
                  preparados para este servicio;
                </ol>
                <ol>
                  c) Otros clérigos diocesanos, o religiosos no franciscanos
                  (Cfr. Const. O.F.S. 89.4 y Estatuto para la Asistencia 15.4).
                </ol>
              </ul>
            </p>
            <p>
              7. El número de los Asistentes, que forman parte de los Consejos
              en los distintos niveles, sea correspondiente al número de las
              Órdenes que efectivamente dan asistencia a las Fraternidades
              locales en el ámbito de la Fraternidad internacional, nacional y
              regional (Cfr. Estatuto para la Asistencia 16.1).
            </p>
            <p>
              8. El cometido principal del Asistente es favorecer la
              profundización de la espiritualidad franciscana y cooperar en la
              formación inicial y permanente de la Fraternidad O.F.S. asistida
              (Cfr. Const. O.F.S. 90.1 y Estatuto para la Asistencia 13.1).
            </p>
            <p>
              9. Es deber de la Conferencia de los Asistentes nacionales y
              regionales coordinar la formación de los Asistentes y la unión
              fraterna entre ellos, y promover el interés de los religiosos de
              la Primera Orden y de la TOR por la O.F.S. y la JUFRA (Cfr.
              Estatuto para la Asistencia 19.3 y 21.3).
            </p>
            <p>
              10. Los Asistentes nacionales y regionales deben informar a los
              Superiores mayores de su Orden sobre la vida y actividad de la
              O.F.S. y de la JUFRA de su responsabilidad (Cfr. Estatuto para la
              Asistencia 20.1 y 22.1).
            </p>
            <p>
              11. El Asistente local promueve la comunión en la Fraternidad y
              entre ésta y la Fraternidad religiosa de la que es miembro (Cfr.
              Estatuto para la Asistencia 23.2).
            </p>
            <p>
              12. Para la petición del Asistente espiritual:{" "}
              <ul>
                <ol>
                  a) en la Fraternidad local: coincidiendo con la constitución
                  de las comunidades de la Primera Orden y de la TOR, el Consejo
                  pedirá un Asistente al competente Superior mayor, previo
                  diálogo e intercambio de opiniones con el Superior local, como
                  signo concreto de comunión y reciprocidad (Cfr. Const. O.F.S.
                  91.2,d y Estatuto para la Asistencia 23.1).
                </ol>
                <ol>
                  b) en la Fraternidad regional y nacional véanse Constituciones
                  Generales 91.2,b-c, y Estatuto para la Asistencia 19.1 y 21.1.
                </ol>
              </ul>
            </p>
            <br />
            <p>
              <strong>La visita Fraterna y Pastoral</strong>
            </p>
            <p>
              <strong>Art. 66</strong>
            </p>
            <p>
              1. Las Visitas fraterna y pastoral se realizarán, a ser posible,
              de forma conjunta (Cfr. Const. O.F.S. 93.4), según el espíritu de
              la Regla, las disposiciones de las Constituciones Generales (arts.
              9495), el presente Estatuto y el Estatuto para la Asistencia
              Espiritual y Pastoral a la O.F.S.
            </p>
            <p>
              2. Para un mejor desarrollo de las Visitas, tanto fraterna como
              pastoral, los Visitadores las prepararán con antelación,
              comprometiéndose a:{" "}
              <ul>
                <ol>
                  a) obtener copia de los informes de las Visitas precedentes y
                  cualquier otro elemento significativo;
                </ol>
                <ol>
                  b) coordinar con los Consejos interesados el programa y objeto
                  de la Visita;
                </ol>
                <ol>
                  c) solicitar un informe previo de la Fraternidad que se
                  visita, sobre la situación actualizada de la misma;
                </ol>
                <ol>
                  d) estar abiertos a las sugerencias de la Fraternidad que se
                  visita.
                </ol>
              </ul>
            </p>
            <p>
              3. El Visitador redactará un informe de la Visita, normalmente
              dentro de los dos meses siguientes, destinados tanto al Consejo
              interesado, como al propio. Dichos informes, si no se han
              realizado conjuntamente, deben ser intercambiados entre los
              Visitadores fraterno y pastoral y debidamente conservados en los
              archivos de los destinatarios.
            </p>
            <p>
              4. El Visitador no podrá tomar decisiones en materias que
              requieran una deliberación colegial del Consejo correspondiente.
              En tal caso, informará oportunamente a su Consejo, y la Visita, si
              es necesario, permanecerá abierta.
            </p>
            <p>
              5. Transcurrido un período de tiempo adecuado, el Visitador pedirá
              informes de las deliberaciones y decisiones tomadas como
              consecuencia de la Visita.
            </p>
            <p>
              6. En el nivel Regional se realizará un encuentro con los
              Ministros locales de la Región durante la Visita fraterna con el
              objetivo de fortalecer la comunicación y los lazos fraternos.
            </p>
            <p>
              7. En el nivel Local se realizará un encuentro con los Hermanos de
              la Fraternidad durante la visita fraterna con el objetivo de
              fortalecer la comunicación y los lazos fraternos.{" "}
            </p>
            <br />
            <p>
              <strong>La Familia Franciscana</strong>
            </p>
            <p>
              <strong>Art. 67</strong>
            </p>
            <p>
              1. El Consejo nacional está integrado en la organización de la
              Familia Franciscana de Argentina, con la que colabora activamente
              para hacer efectiva la presencia del carisma común en la vida y
              misión de la Iglesia.
            </p>
            <p>
              2. El Consejo nacional debe colaborar activamente en la unidad y
              reciprocidad vital de todos los miembros de la Familia y las
              organizaciones de inspiración franciscana.
            </p>
            <p>
              <strong>Art. 68</strong>
            </p>
            <p>
              La Asamblea de Ministros y Ministras de la Familia Franciscana de
              Argentina es el espacio para compartir el encuentro, para el
              diálogo y el discernimiento, para la escucha del Señor y la
              oración, para recrear y profundizar los lazos entre todas las
              expresiones de nuestra familia espiritual. Se reúne dos veces al
              año y es convocada por el Presidente de la Familia Franciscana de
              Argentina.
            </p>
            <br />
            <p>
              <strong>Disposiciones Generales</strong>
            </p>
            <p>
              <strong>Art. 69</strong>
            </p>
            <p>
              1. Las decisiones de los órganos colegiales son válidas cuando
              está presente al menos la mayoría absoluta de sus miembros (más de
              la mitad).
            </p>
            <p>
              2. Excepto en los casos para los que este Estatuto disponga otra
              cosa, las decisiones se toman por mayoría absoluta de los
              presentes. En caso de empate, el Presidente puede resolverlo con
              su voto
            </p>
            .
            <p>
              3. Las votaciones que atañen a una persona han de ser secretas.
              Cuando se trata de otros argumentos, se puede proceder a la
              votación tanto por mano alzada como por escrutinio secreto. La
              petición de votación secreta puede hacerla cualquier miembro de la
              Asamblea votante, antes de que el órgano colegial sea invitado a
              votar a mano alzada.
            </p>
            <p>
              <strong>Art. 70</strong>
            </p>
            <p>
              1. La O.F.S. de la Argentina se rige por el derecho universal de
              la Iglesia y por el propio: Regla, Constituciones Generales,
              Ritual, estos Estatutos nacionales y Estatutos propios.
            </p>
            <p>
              2. La interpretación práctica del presente Estatuto, para
              armonizar su aplicación en las diversas áreas y en los distintos
              niveles de la Fraternidad nacional, corresponde al Capítulo
              nacional
            </p>
            .
            <p>
              3. La clarificación de los puntos específicos que exigen inmediata
              decisión, corresponde al Consejo nacional, con validez hasta el
              Capítulo nacional siguiente.
            </p>
            <p>
              4. Las modificaciones del presente Estatuto pueden ser propuestas
              por el Consejo nacional o cualquier Consejo regional.
            </p>
            <p>
              5. La modificación del Estatuto nacional es competencia del
              Capítulo nacional, por mayoría absoluta.
            </p>
            <p>
              6. El Estatuto y sus modificaciones deben ser aprobados por la
              Presidencia del CIOFS.
            </p>
            <p>
              7. Cuando no se haya establecido otra cosa, los decretos y normas
              generales correspondientes al nivel nacional, quedan promulgados
              mediante su edición en el Boletín Nacional de la O.F.S., que
              actualmente se denomina Eco Seráfico y entran en vigencia
              cumplidos treinta días continuos.
            </p>
            <br />
            <p className="doc-content__fecha">Argentina, 20 de enero 2012.</p>
            <p className="doc-content__fecha">
              <p>
                <em>Orden Franciscana Seglar</em>
              </p>
              <p>
                <em>Consejo Nacional</em>
              </p>
              <p>Cóndor 2150 – Ciudad Autónoma de Buenos Aires</p>
              <p>CP: C1437FJP - Argentina</p>
            </p>
          </div>
        </details>
      </section>
    </div>
  );
}

export default NuestroEstatutoNacional;
