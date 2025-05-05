import React from "react";
import "./Documentos.css";
import heroImage from "../../assets/images/hero-constituciones.jpg";

function NuestrasConstituciones() {
  return (
    <div className="doc-container">
      {/* Hero */}
      <section className="doc-hero">
        <div className="doc-hero__logo">
          <img src={heroImage} alt="Nuestras Constituciones" />
        </div>
        <div className="doc-hero__text">
          <h1>
            Constituciones Generales
            <br />
            de La OFS
          </h1>
          <h5>NUEVA TRADUCCIÓN EN ESPAÑOL – 2020</h5>
          <p className="doc-hero__descripcion">
            <em>
              CONGREGATIO
              <br />
              PRO INSTITUTIS VITAE CONSECRATAE
              <br />
              ET SOCIETATIBUS VITAE APOSTOLICAE
              <br />
              Prot. n. T. 144-1/2000
            </em>
          </p>
        </div>
      </section>

      {/* Acordeón */}
      <section className="doc-accordion">
        {/* Decreto */}
        <details className="doc-panel">
          <summary className="doc-panel__title">Decreto</summary>
          <div className="doc-content">
            <p>
              La Conferencia de los Ministros Generales de la Primera Orden
              Franciscana y de la Tercera Orden Regular, previa aprobación del
              Capítulo General de la Orden Franciscana Seglar, celebrado en el
              mes de octubre de 1999, ha presentado a la Sede Apostólica el
              texto de las Constituciones de la misma Orden Franciscana Seglar,
              pidiendo su aprobación.
            </p>
            <p>
              La Congregación para los Institutos de vida consagrada y las
              Sociedades de vida apostólica, después de haber examinado
              atentamente el antedicho texto de las Constituciones, con el
              presente Decreto lo aprueba y lo confirma, según el ejemplar
              redactado en lengua italiana, que se conserva en su Archivo,
              observado cuanto por derecho se debe observar.
            </p>
            <p>No obstante cualquier disposición en contrario.</p>
            <p className="doc-content__fecha">
              <em>
                Vaticano, 8 de diciembre de 2000,
                <br />
                Solemnidad de la Inmaculada Concepción de la Bienaventurada
                Virgen María.
              </em>
            </p>
            <p>
              <strong>Eduardo Card. Martínez Somalo</strong>
              <br />
              Prefecto
            </p>
            <p>
              <strong>† Piergiorgio Silvano Nesti, C.P.</strong>
              <br />
              Secretario
            </p>
          </div>
        </details>

        {/* Carta de la Conferencia */}
        <details className="doc-panel">
          <summary className="doc-panel__title">
            Carta de la Conferencia de los Ministros Generales de la Primera
            Orden y de la TOR
          </summary>
          <div className="doc-content">
            <p className="doc-content__fecha">
              Roma, 1 de enero de 2001
              <br />
              Santa María Madre de Dios
            </p>
            <p>
              Querida Hermana Emanuela:
              <br />
              ¡El Señor te dé la paz!
            </p>
            <p>
              La Congregación para los Institutos de vida consagrada y las
              Sociedades de vida apostólica, en fecha 8 de diciembre de 2000, ha
              emitido el Decreto (Prot. n. T. 144-1/2000) de aprobación de las
              Constituciones generales de la Orden Franciscana Seglar, tal como
              fueron enmendadas en el Capítulo general OFS de Madrid, en octubre
              de 1999, y sucesivamente presentadas por el Presidente de turno de
              la Conferencia de los Ministros generales de la Primera Orden y de
              la TOR.
            </p>
            <p>
              Ahora, en nombre también de los otros Ministros generales, te
              confío el texto aprobado de las Constituciones a ti, y a través
              tuyo, a todos los hermanos y hermanas de la OFS. La vocación común
              de la Familia Franciscana toda a partir de la formidable
              experiencia espiritual de Francisco y de Clara, es la de “vivir
              según la forma del santo Evangelio”; para encarnar esta única
              vocación en la rica variedad de sus diversas expresiones, en el
              mundo y en el tiempo en que el Señor nos envía, las Constituciones
              son siempre una ayuda muy importante. No se trata de un “documento
              más”, ni de la etapa final de un camino, sino de un instrumento
              esencial y dinámico que nos ayuda a delinear nuestra identidad y a
              estructurar progresivamente nuestra vida y nuestra vocación de
              franciscanos. El trabajo de reflexión y de revisión desarrollado
              por tantos hermanos y hermanas del mundo entero, y la aprobación
              por parte de la Madre Iglesia, nos comprometen a obrar de manera
              que estas Constituciones lleguen a ser criterio en torno al cual
              proyectar nuestra existencia según el estilo de vida evangélica.
            </p>
            <p>
              Este es el deseo que formulo, en nombre de la Iglesia y de los
              Ministros generales, a todos los franciscanos seglares: que puedan
              ser testigos creíbles del fuego evangélico que inflamó la
              existencia de Francisco y de Clara de Asís, y les ha hecho modelos
              de una vida plenamente realizada en cuanto que totalmente donada.
            </p>
            <br />
            <p>Fraternarlmente,</p>
            <p>
              <strong>Fray Giacomo Bini, OFM</strong>
              <br />
              Presidente de turno de la Conferencia de los Ministros generales
              de la Primera Orden y de la TOR
            </p>
          </div>
        </details>

        {/* Promulgación */}
        <details className="doc-panel">
          <summary className="doc-panel__title">
            Promulgación de las Constituciones Generales
          </summary>
          <div className="doc-content">
            <p className="doc-content__fecha">
              Cir. 21/96-2
              <br />
              Roma, 6 de febrero de 2001
            </p>
            <p>
              A los Consejos nacionales de la OFS
              <br />A los Consejeros internacionales de la OFS
            </p>
            <p>
              <em>Objeto:</em> Promulgación de las Constituciones Generales
              enmendadas y aprobadas con el Decreto de la Congregación IVCSVA
              del 8 de diciembre de 2000.
            </p>
            <br />
            <p>Queridos hermanos:</p>
            <br />
            <p>
              Las Constituciones Generales de la Orden Franciscana Seglar,
              destinadas a aplicar la Regla renovada de 1978, fueron aprobadas
              por la Congregación para los Institutos de vida consagrada y las
              Sociedades de vida apostólica con Decreto del 8 de septiembre de
              1990, con validez para un sexenio, para que pudiesen ser
              experimentadas. Oportunamente, la Presidencia del CIOFS, a través
              de la Conferencia de los Ministros generales de la Primera Orden y
              de la TOR, pidió una prórroga del período de experimentación,
              considerado el intervalo necesario para traducirlas a otras
              lenguas oficiales de la Fraternidad internacional y,
              sucesivamente, a las lenguas de cada país. La Congregación accedió
              a tal solicitud y concedió una prórroga de tres años.
            </p>
            <p>
              Durante este espacio de tiempo, las Constituciones han sido
              estudiadas y puestas en práctica por las Fraternidades de la OFS
              en todos los niveles y, poco a poco, nos han infundido las
              características de la secularidad, unidad y autonomía de nuestra
              Orden. No todo ha sido fácil y algunos aspectos todavía deben ser
              plenamente asimilados a fin de que, en la aurora del Tercer
              Milenio, la OFS llegue a ser realmente “una milicia que pueda
              estar en la vanguardia en la Iglesia y en el mundo para la
              construcción de una sociedad más humana y más cristiana”, como
              auguraba en 1990 el Cardenal Hamer, Prefecto de la Congregación
              IVCSVA.
            </p>
            <p>
              De esta experiencia se manifestó la validez sustancial de las
              Constituciones Generales de 1990 y sólo algunos de sus aspectos
              precisaban revisión. El trabajo, necesario para lograr este fin,
              ha sido oportunamente puesto en marcha por la Presidencia del
              CIOFS y se ha llevado a cabo a través de una amplia consulta, que
              ha implicado a todas las Fraternidades nacionales y a los
              Consejeros internacionales, además de a la misma Presidencia y a
              algunos expertos pertenecientes a la OFS o designados por los
              Ministros generales franciscanos.
            </p>
            <p>
              Al Capítulo general de Madrid (23-31 de octubre de 1999), se
              sometió un texto que recogía, coordinándolas, las sugerencias y
              las solicitudes recibidas, presentando también propuestas
              alternativas allí donde no había sido posible encontrar una
              formulación unívoca entre las que las Fraternidades nacionales
              habían propuesto. El texto presentado al Capítulo se inspiraba en
              los siguientes criterios:
            </p>
            <li>Adhesión al derecho común y al derecho propio de la OFS,</li>
            <li>Respeto por el texto aprobado en 1990 por la Santa Sede,</li>
            <li>Flexibilidad organizativa,</li>
            <li>Adaptabilidad cultural y lingüística.</li>
            <br />
            <p>
              El Capítulo general ha dedicado un atento y profundo examen al
              texto que le fue sometido y también a las intervenciones, orales o
              escritas, efectuadas durante los trabajos capitulares.
            </p>
            <p>
              El resultado de las discusiones y de las votaciones, hechas
              artículo por artículo y sobre cada una de las enmiendas, se
              presentó, el 21 de diciembre de 1999, a la Conferencia de los
              Ministros generales franciscanos, la cual, después de una ulterior
              revisión a cargo de canonistas de las cuatro Curias, lo reenvió,
              el 1 de agosto de 2000, a la Congregación IVCSVA para la
              aprobación. Ésta última lo aprobó con Decreto propio, que lleva la
              fecha del 8 de diciembre de 2000, Solemnidad de la Inmaculada
              Concepción de la Bienaventurada Virgen María.
            </p>
            <p>
              Ahora, hermanos y hermanas de la OFS, el 6 de febrero de 2001, se
              promulgan las Constituciones Generales aprobadas, que por
              consiguiente deberán observarse a partir del 6 de marzo de 2001.
              Incumbe a cada uno de nosotros hacer que sean “espíritu y vida”,
              instrumento de consolidación y de crecimiento de nuestra Orden
              para que a toda vela (“Duc in altum”), caminemos con esperanza,
              según la exhortación dirigida por el Santo Padre a todos los
              cristianos con la Carta Apostólica “Novo Millenio ineunte” al
              final del Gran Jubileo del año 2000. También nosotros, los
              franciscanos seglares, estamos llamados a ser testigos, es decir,
              mártires de Cristo, en el sentido original de la palabra, en el
              nuevo Milenio.
            </p>
            <p>
              No en vano hemos escogido la fecha del 6 de febrero para la
              promulgación de las Constituciones Generales enmendadas. Es ésta
              la fecha en que se conmemora a los Protomártires del Japón,
              testigos por excelencia, con 17 terciarios crucificados en
              Nagasaki, junto con Pedro Bautista, Pablo Miki y sus otros
              compañeros. Bien poco sabemos de estos lejanos hermanos nuestros,
              si no es la irrenunciable voluntad de permanecer firmes en la fe,
              de no sustraer su propia vida al testimonio del Evangelio, cueste
              lo que cueste.
            </p>
            <p>
              También ha habido seglares franciscanos en el último siglo que han
              manifestado, hasta el sacrificio de su vida, la fidelidad al
              Bautismo y la resistencia al mal, anclados en la fe. Recordamos a
              nuestro hermano Ceferino Giménez Malla, víctima de la persecución
              contra la religión durante la guerra civil española (1936/1939),
              que fue beatificado el 4 de mayo de 1997. Recordamos al Siervo de
              Dios Frantisek Nosek, de Bohemia, hombre político y franciscano
              seglar, otra víctima de la violencia comunista. Recordamos
              asimismo a Juvenal Kabera, Ministro de la Fraternidad OFS de
              Kigali, asesinado durante las matanzas de la guerra tribal en
              Rwanda. Son sólo algunos ejemplos, para los que también vale
              cuanto el Santo Padre ha afirmado recientemente: “Ha sido sobre
              todo gracias al valiente testimonio de fieles laicos, no raramente
              hasta el martirio, que la fe no ha desaparecido de la vida de
              pueblos enteros”.
            </p>
            <p>
              Quizás a nosotros no se nos pida el martirio de sangre, pero
              ciertamente se nos pide el testimonio de coherencia y firmeza en
              el cumplimiento de las promesas bautismales, renovadas y
              reafirmadas con la Profesión en la OFS. En virtud de la Profesión,
              la Regla y la aplicación que de ella hacen las Constituciones
              Generales deben representar, para cada uno de nosotros, el punto
              de referencia de la experiencia cotidiana, a partir de una
              vocación específica y de una identidad precisa. Sobre esta base es
              necesario reelaborar nuestra existencia y hallar un proyecto de
              vida (la radicalidad evangélica franciscana) y un lugar de
              comunión eclesial (la Fraternidad), en los cuales sea posible
              comprender “el porqué y el cómo vivir, amar y sufrir” (CC.GG. art.
              10).
            </p>
            <p>
              Con este deseo, la Presidencia del CIOFS, recibidas las
              Constituciones Generales aprobadas, las difunde a toda la Orden
              para que, como la Regla, sean estudiadas, amadas y vividas.
            </p>
            <p>
              <strong>Emanuela De Nunzio</strong>
              <br />
              Ministra General de la OFS
            </p>
          </div>
        </details>
        <details className="doc-panel">
          <summary className="doc-panel__title">
            Capítulo I: La Orden Franciscana Seglar
          </summary>
          <div className="doc-content">
            <p>
              <strong>Art. 1</strong>
            </p>
            <ul>
              <li>
                Todos los fieles están llamados a la santidad y tienen derecho a
                seguir, en comunión con la Iglesia, un camino espiritual propio.
              </li>
              <li>
                <strong>Regla 1.</strong> En la Iglesia existen muchas familias
                espirituales, con carismas diferentes. Entre éstas se encuentra
                la Familia Franciscana que, en sus diversas ramas, reconoce como
                padre, inspirador y modelo a San Francisco de Asís.
              </li>
              <li>
                <strong>Regla 2.</strong> Dentro de la Familia Franciscana,
                desde sus inicios, ocupa un lugar peculiar la Orden Franciscana
                Seglar[2]. Esta está integrada por la unión orgánica de todas
                las Fraternidades católicas, cuyos miembros, movidos por el
                Espíritu Santo, se comprometen con la Profesión a vivir el
                Evangelio a la manera de San Francisco, en su estado seglar,
                observando la Regla aprobada por la Iglesia[3].
              </li>
              <li>
                En virtud de la pertenencia a la misma familia espiritual, la
                Santa Sede ha confiado el cuidado pastoral y la asistencia
                espiritual de la OFS a la Primera Orden Franciscana y a la
                Tercera Orden Regular (TOR). Estos son los “Institutos” a los
                que corresponde el “altius moderamen” del que trata el canon 303
                del CDC[4].
              </li>
              <li>
                La Orden Franciscana Seglar (OFS) es una asociación pública en
                la Iglesia[5]. Se articula en fraternidades a varios niveles:
                local, regional, nacional e internacional. Cada una,
                individualmente, tiene personalidad jurídica en la Iglesia.
              </li>
            </ul>

            <p>
              <strong>Art. 2</strong>
            </p>
            <ul>
              <li>
                La vocación a la OFS es una vocación específica, que informa la
                vida y la acción apostólica de sus miembros. Por consiguiente,
                no pueden formar parte de la OFS quienes ya están vinculados,
                mediante compromiso perpetuo, a otra familia religiosa o
                instituto de vida consagrada.
              </li>
              <li>
                La OFS está abierta a los fieles de cualquier condición. A ella
                pueden pertenecer:
              </li>
              <ul>
                <li>los laicos (hombres y mujeres)</li>
                <li>los clérigos seculares (diáconos, sacerdotes, obispos).</li>
              </ul>
            </ul>

            <p>
              <strong>Art. 3</strong>
            </p>
            <ul>
              <li>
                La índole secular caracteriza la espiritualidad y la vida
                apostólica de quienes pertenecen a la OFS.
              </li>
              <li>Su secularidad se expresa según la condición:</li>
              <ul>
                <li>
                  Para los laicos, contribuyendo a la edificación del Reino de
                  Dios con su presencia en las realidades y en las actividades
                  temporales[6].
                </li>
                <li>
                  Para los clérigos seculares, prestando al pueblo de Dios el
                  servicio que les es propio, en comunión con el Obispo y el
                  Presbiterio7.
                </li>
              </ul>
              <li>
                Unos y otros se inspiran en las opciones evangélicas de San
                Francisco de Asís, comprometiéndose a continuar su misión con
                los otros componentes de la Familia Franciscana.
              </li>
              <li>
                La vocación a la OFS es una llamada a vivir el Evangelio en
                comunión fraterna. Con este fin, los miembros de la OFS se
                reúnen en comunidades eclesiales, que se llaman Fraternidades.
              </li>
            </ul>

            <p>
              <strong>Art. 4</strong>
            </p>
            <ul>
              <li>
                La OFS se rige por el derecho universal de la Iglesia y por el
                propio: Regla, Constituciones, Ritual y Estatutos particulares.
              </li>
              <li>
                La Regla determina la naturaleza, el fin y el espíritu de la
                OFS.
              </li>
              <li>
                <strong>Regla 3.</strong> Las Constituciones tienen como
                finalidad:
                <ul>
                  <li>Aplicar la Regla;</li>
                  <li>
                    Indicar, en concreto, las condiciones de pertenencia a la
                    OFS, el régimen de la misma, la organización de la vida de
                    la Fraternidad, la sede[7]{" "}
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              <strong>Art. 5</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 3.</strong> La interpretación auténtica de la
                Regla y de las Constituciones corresponde a la Santa Sede.
              </li>
              <li>
                La interpretación práctica de las Constituciones, con el fin de
                armonizar su aplicación en las diversas áreas y en los varios
                niveles de la Orden, corresponde al Capitulo general de la OFS.
              </li>
              <li>
                La aclaración de puntos específicos, que requieren una decisión
                inmediata, es competencia de la Presidencia del Consejo
                Internacional OFS (CIOFS). La clarificación tiene validez hasta
                el siguiente Capítulo general.
              </li>
            </ul>

            <p>
              <strong>Art. 6</strong>
            </p>
            <ul>
              <li>
                La Fraternidad internacional de la OFS tiene Estatuto propio
                aprobado por el Capítulo general.
              </li>
              <li>
                Las Fraternidades nacionales tienen Estatutos propios aprobados
                por la Presidencia del CIOFS.
              </li>
              <li>
                Las Fraternidades regionales y locales pueden tener Estatutos
                propios, aprobados por el Consejo de nivel superior.
              </li>
            </ul>

            <p>
              <strong>Art. 7</strong>
            </p>
            <p>
              Todas las disposiciones que no concuerdan con las presentes
              Constituciones quedan abrogadas.
            </p>
          </div>
        </details>
        <details className="doc-panel">
          <summary className="doc-panel__title">
            Capítulo II: Forma de Vida y Actividad Apostólica
          </summary>
          <div className="doc-content">
            <p>
              <strong>Título I: La Forma de Vida</strong>
            </p>

            <p>
              <strong>Art. 8</strong>
            </p>
            <ul>
              <li>
                Los franciscanos seglares se comprometen con la Profesión a
                vivir el Evangelio según la espiritualidad franciscana, en su
                condición seglar.
              </li>
              <li>
                Intentan profundizar, a la luz de la fe, los valores y las
                opciones de la vida evangélica según la Regla de la OFS:
                <ul>
                  <li>
                    <strong>Regla 7.</strong> en un camino continuamente
                    renovado de conversión y de formación;
                  </li>
                  <li>
                    <strong>Regla 4.</strong> atentos a las interpelaciones de
                    la sociedad y la realidad eclesial, “pasando del Evangelio a
                    la vida y de la vida al Evangelio”, en la dimensión personal
                    y comunitaria de este itinerario.
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              <strong>Art. 9</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 5.</strong> La espiritualidad del franciscano
                seglar es un proyecto de vida centrado en la persona de Cristo y
                en su seguimiento[8], más que un programa pormenorizado para
                llevarlo a la práctica.
              </li>
              <li>
                <strong>Regla 4.</strong> El franciscano seglar, comprometido a
                seguir el ejemplo y las enseñanzas de Cristo, dedíquese a un
                estudio personal y frecuente del Evangelio y de las Sagradas
                Escrituras. La Fraternidad y sus Responsables promuevan el amor
                a la Palabra evangélica y ayuden a los hermanos a conocerla y a
                comprenderla, tal como la proclama la Iglesia, con la ayuda del
                Espíritu Santo[9].
              </li>
            </ul>

            <p>
              <strong>Art. 10</strong>
            </p>
            <p>
              <strong>Regla 10.</strong>“Cristo pobre y crucificado”, vencedor
              de la muerte y resucitado, máxima manifestación del amor de Dios
              al hombre, es el “libro” en el que los hermanos, a imitación de
              Francisco, aprenden el porqué y el cómo vivir, amar y sufrir. En
              Él descubren el valor de las contradicciones por causa de la
              justicia y el sentido de las dificultades y de las cruces de la
              vida de cada día. Con Él pueden aceptar la voluntad del Padre en
              las circunstancias más difíciles y vivir el espíritu franciscano
              de paz, rechazando toda doctrina contraria a la dignidad del
              hombre.
            </p>

            <p>
              <strong>Art. 11</strong>
            </p>
            <p>
              Conscientes de que el Espíritu Santo es la fuente de su vocación,
              el animador de la vida fraterna y de la misión, los franciscanos
              seglares busquen imitar la fidelidad de Francisco a sus
              inspiraciones y escuchen la exhortación del Santo a desear sobre
              todas las cosas “el Espíritu del Señor y su santa operación”[10].
            </p>

            <p>
              <strong>Art. 12</strong>
            </p>
            <ul>
              <li>
                Inspirándose en el ejemplo y en los escritos de San Francisco, y
                sobre todo con la gracia del Espíritu, los hermanos vivan día a
                día con fe el gran don que nos ha otorgado Cristo: la revelación
                del Padre. Den testimonio de esta fe delante de los hombres:
                <ul>
                  <li>en la vida de familia;</li>
                  <li>en el trabajo;</li>
                  <li>en la alegría y el sufrimiento;</li>
                  <li>
                    en el encuentro con los hombres, hermanos todos en el mismo
                    Padre;
                  </li>
                  <li>
                    en la presencia y en la participación en la vida social;
                  </li>
                  <li>en la relación fraterna con todas las criaturas.</li>
                </ul>
              </li>
              <li>
                <strong>Regla 10.</strong> Con Jesús, obediente hasta la muerte,
                procuren conocer y cumplir la voluntad del Padre. Den gracias a
                Dios por el don de la libertad y la revelación de la ley del
                amor. Acepten la ayuda que, en la Iglesia, se les ofrece para
                cumplir la voluntad del Padre por quienes están constituidos en
                autoridad y también por los hermanos. Asuman, con serena
                firmeza, el riesgo de opciones valientes en la vida social.
              </li>
              <li>
                <strong>Regla 8.</strong> Los hermanos cultiven el trato filial
                con Dios y “hagan de la oración y de la contemplación el alma
                del propio ser y el propio obrar”. Traten de descubrir la
                presencia del Padre en su corazón, en la naturaleza y en la
                historia de los hombres, en la que se cumple su plan salvífico.
                La contemplación de tal misterio les hará disponibles a
                colaborar en este designio de amor.
              </li>
            </ul>

            <p>
              <strong>Art. 13</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 7.</strong> Los franciscanos seglares,
                antiguamente llamados “hermanos y hermanas de la penitencia”, se
                proponen vivir en espíritu de conversión permanente. Los medios
                para cultivar esta característica de la vocación franciscana,
                individualmente y en Fraternidad, son: la escucha y las
                celebraciones de la Palabra de Dios, la revisión de vida, los
                retiros espirituales, la ayuda de un consejero espiritual y las
                celebraciones penitenciales. Frecuenten el sacramento de la
                Reconciliación y cuiden su celebración comunitaria, tanto en la
                Fraternidad como con todo el Pueblo de Dios[11].
              </li>
              <li>
                En este espíritu de conversión se debe vivir el amor para la
                renovación de la Iglesia, acompañado de la renovación personal y
                comunitaria. Fruto de la conversión, que es respuesta al amor de
                Dios, son las obras de caridad en favor de los hermanos[12].
              </li>
              <li>
                Los hermanos deben conocer, valorar y vivir las prácticas
                penitenciales tradicionales entre los penitentes franciscanos,
                como el ayuno y la abstinencia, ateniéndose a las normas
                generales de la Iglesia.
              </li>
            </ul>

            <p>
              <strong>Art. 14</strong>
            </p>
            <ul>
              <li>
                Conscientes de que Dios ha hecho de todos nosotros un pueblo y
                ha constituido a su Iglesia sacramento universal de salvación,
                los hermanos comprométanse en una reflexión de fe sobre la
                Iglesia, sobre su misión en el mundo de hoy y sobre el rol de
                los franciscanos seglares en la Iglesia, afrontando los desafíos
                y asumiendo las responsabilidades que esta reflexión les ayudará
                a descubrir.
              </li>
              <li>
                <strong>Regla 8.</strong> La Eucaristía es el centro de la vida
                de la Iglesia. En ella Cristo nos une a Él y entre nosotros como
                un único cuerpo. Por lo tanto, la Eucaristía sea el centro de la
                vida de la Fraternidad; los hermanos participen en la Eucaristía
                con la mayor frecuencia posible, conscientes del respeto y amor
                de San Francisco, que en la Eucaristía vivió todos los misterios
                de la vida de Cristo.
              </li>
              <li>
                Participen en los sacramentos de la Iglesia, con el deseo de
                alcanzar no sólo la perfección personal sino, al mismo tiempo,
                de contribuir al crecimiento de la Iglesia y a la expansión del
                Reino. Colaboren en la celebración viva y consciente de los
                sacramentos en las propias parroquias, particularmente en la
                celebración del bautismo, de la confirmación, del matrimonio y
                de la unción de los enfermos.
              </li>
              <li>
                Los hermanos y las Fraternidades aténganse a las indicaciones
                del Ritual en lo referente a las distintas formas de asociarse a
                la oración litúrgica de la Iglesia, privilegiando la celebración
                de la Liturgia de las Horas[13].
              </li>
              <li>
                En todos los lugares y tiempos es posible a los verdaderos
                adoradores dar culto y orar al Padre; sin embargo, los hermanos
                busquen tiempos de silencio y de recogimiento para dedicarlos
                exclusivamente a la oración.
              </li>
            </ul>

            <p>
              <strong>Art. 15</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 11.</strong> Los franciscanos seglares
                comprométanse vivir el espíritu de las Bienaventuranzas, y
                especialmente el espíritu de pobreza. La pobreza evangélica
                manifiesta la confianza en el Padre, activa la libertad interior
                y dispone para promover una más justa distribución de las
                riquezas.
              </li>
              <li>
                Los franciscanos seglares, que mediante el trabajo y los bienes
                materiales deben proveer a la propia familia y servir a la
                sociedad, tienen un modo propio de vivir la pobreza evangélica.
                Para comprenderlo y vivirlo se requiere un fuerte compromiso
                personal y el estímulo de la Fraternidad mediante la oración y
                el diálogo, la revisión comunitaria de vida, la escucha de las
                indicaciones de la Iglesia y de las interpelaciones de la
                sociedad.
              </li>
              <li>
                Los franciscanos seglares comprométanse en reducir las
                exigencias personales para poder compartir mejor los bienes
                espirituales y materiales con los hermanos, particularmente con
                los últimos. Den gracias a Dios por los bienes recibidos,
                usándolos como buenos administradores y no como dueños. Adopten
                una posición firme contra el consumismo y contra las ideologías
                y las posturas que anteponen la riqueza a los valores humanos y
                religiosos y que permiten la explotación del hombre.
              </li>
              <li>
                Amen y practiquen la pureza de corazón, fuente de la verdadera
                fraternidad.
              </li>
            </ul>

            <p>
              <strong>Art. 16</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 9.</strong> María, Madre de Jesús, es el modelo
                para escuchar la Palabra y ser fieles a la vocación: en ella,
                como Francisco, vemos realizadas todas las virtudes
                evangélicas[14]. Los hermanos cultiven el amor intenso a la
                Santísima Virgen, mediante la imitación, la oración y la entrega
                filial. Manifiesten su devoción personal con expresiones de una
                auténtica fe, en las formas aceptadas por la Iglesia.
              </li>
              <li>
                María es modelo de amor fecundo y fiel para toda la comunidad
                eclesial.
                <br />
                Los franciscanos seglares y las Fraternidades busquen vivir la
                experiencia de Francisco, que hizo de la Virgen la guía de su
                vida y de su obra; con ella, como los discípulos en Pentecostés,
                acojan el Espíritu para realizarse en comunidad de amor[15].
              </li>
            </ul>

            <p>
              <strong>
                Título II: Presencia Activa en la Iglesia y en el Mundo
              </strong>
            </p>

            <p>
              <strong>Art. 17</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 6.</strong> SLlamados a colaborar en la
                construcción de la Iglesia como sacramento de salvación para
                todos los hombres y constituidos por el bautismo y la profesión
                “testigos e instrumentos de su misión”, los franciscanos
                seglares anuncian a Cristo con la vida y la palabra.
                <br />
                Su apostolado preferente es el testimonio personal[16] en el
                ambiente en que viven y el servicio para la edificación del
                Reino de Dios en las realidades terrenas.
              </li>
              <li>
                En las Fraternidades promuévase la preparación de los hermanos
                para la difusión del mensaje evangélico “en las condiciones
                comunes del mundo”18 y para que colaboren en las catequesis de
                las comunidades eclesiales.
              </li>
              <li>
                Los que son llamados a ejercer la misión de catequistas, de
                presidentes de comunidades eclesiales o de otros ministerios,
                así como los ministros sagrados, vivan el amor de San Francisco
                a la Palabra de Dios, su fe en los que la anuncian y el gran
                fervor con que recibió del Papa la misión de predicar la
                penitencia.
              </li>
              <li>
                La participación en la función de santificar, que la Iglesia
                ejerce mediante la liturgia, la oración y las obras de
                penitencia y de caridad, llévenla los hermanos a la práctica
                primero en la propia familia, después en la Fraternidad y,
                finalmente, con su presencia activa en la Iglesia local y en la
                sociedad.
              </li>
            </ul>
            <p>
              <strong>Por una sociedad justa fraterna.</strong>
            </p>
            <p>
              <strong>Art. 18</strong>
            </p>
            <ul>
              <li>
                Los franciscanos seglares son llamados a ofrecer su contribución
                personal, inspirada en la persona y en el mensaje de San
                Francisco de Asís, en vistas a establecer una civilización en la
                que la dignidad de la persona humana, la corresponsabilidad y el
                amor sean realidades vivas[17].
              </li>
              <li>
                <strong>Regla 13.</strong> Profundicen en los verdaderos
                fundamentos de la fraternidad universal y creen en todas partes
                espíritu de acogida y una atmósfera de hermandad. Rechacen con
                firmeza toda forma de explotación, de discriminación, de
                marginación y toda actitud de indiferencia hacia los demás.
              </li>
              <li>
                <strong>Regla 13.</strong>Colaboren con los movimientos que
                promueven la hermandad entre los pueblos: comprométanse a “crear
                condiciones dignas de vida” para todos y a trabajar por la
                libertad de todos los pueblos.
              </li>
              <li>
                Siguiendo el ejemplo de San Francisco, Patrón de los
                ecologistas, promuevan activamente iniciativas para la
                salvaguarda de la creación, colaborando con los esfuerzos que se
                realizan para evitar la contaminación y la degradación de la
                naturaleza, y crear condiciones de vida y ambiente, que no sean
                una amenaza para el hombre.
              </li>
            </ul>

            <p>
              <strong>Art. 19</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 14.</strong> Los franciscanos seglares actúen como
                levadura en el ambiente en el que viven, mediante el testimonio
                del amor fraterno y de bien definidas motivaciones cristianas.
              </li>
              <li>
                Con espíritu de minoridad, elijan en primer lugar el trato con
                los pobres y los marginados, ya sean individuos, grupos de
                personas o todo un pueblo; colaboren en la erradicación de la
                marginación y de toda forma de pobreza, que son consecuencia de
                la ineficacia y de la injustic
              </li>
            </ul>

            <p>
              <strong>Art. 20</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 14.</strong> Empeñados en la construcción del
                Reino de Dios dentro de las realidades y actividades temporales,
                los franciscanos seglares, por vocación, viven como una realidad
                indivisible su pertenencia a la Iglesia y a la sociedad.
              </li>
              <li>
                Como primera y fundamental contribución para la edificación de
                un mundo más justo y fraterno, comprométanse en el cumplimiento
                de los deberes propios de su trabajo y en una adecuada
                preparación profesional. Con el mismo espíritu de servicio
                asuman sus responsabilidades sociales y civiles.
              </li>
            </ul>

            <p>
              <strong>Art. 21</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 16.</strong> Para San Francisco, el trabajo es un
                don y el trabajar es una gracia. El trabajo de cada día es no
                sólo medio de sustento, sino también una ocasión de servicio a
                Dios y al prójimo, y un camino para desarrollar la propia
                personalidad. En la convicción de que el trabajo es un derecho y
                un deber y que toda forma de ocupación merece respeto, los
                hermanos comprométanse a colaborar para que todos tengan la
                posibilidad de trabajar y para que los medios de trabajo sean
                cada vez más humanos.
              </li>
              <li>
                El tiempo libre y el esparcimiento tienen su propio valor y son
                necesarios para el desarrollo de la persona. Los franciscanos
                seglares mantengan una equilibrada relación entre trabajo y
                reposo e interésense en la práctica de formas cualificadas de
                ocupación del tiempo libre[18].
              </li>
            </ul>

            <p>
              <strong>Art. 22</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 15.</strong> Los franciscanos seglares “estén
                presentes... en el campo de la vida pública”; colaboren, según
                sus posibilidades, en la promulgación de leyes y normas justas.
              </li>
              <li>
                En el campo de la promoción humana y de la justicia, las
                Fraternidades comprométanse con “iniciativas valientes”, en
                sintonía con la vocación franciscana y con las directrices de la
                Iglesia. Asuman posiciones claras cuando el hombre es agredido
                en su dignidad por causa de cualquier forma de opresión o
                indiferencia. Ofrezcan su servicio fraterno a las víctimas de la
                injusticia.
              </li>
              <li>
                La renuncia al uso de la violencia, característica de los
                discípulos de Francisco, no significa renuncia a la acción; los
                hermanos procuren que sus intervenciones estén siempre
                inspiradas por el amor cristiano.
              </li>
            </ul>

            <p>
              <strong>Art. 23</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 19.</strong> La paz es obra de la justicia y fruto
                de la reconciliación y del amor fraterno[19]. Los franciscanos
                seglares están llamados a ser portadores de paz en sus familias
                y en la sociedad:
                <ul>
                  <li>
                    interesándose por la propuesta y la difusión de ideas y
                    actitudes pacíficas;
                  </li>
                  <li>
                    desarrollando iniciativas propias y colaborando,
                    individualmente y como Fraternidad, en las iniciativas del
                    Papa, de las Iglesias particulares y de la Familia
                    Franciscana;
                  </li>
                  <li>
                    colaborando con los movimientos y con las instituciones que
                    promueven la paz en el respeto de sus auténticos
                    fundamentos.
                  </li>
                </ul>
              </li>
              <li>
                Aun reconociendo el derecho, tanto de las personas como de las
                naciones, a la legítima defensa, valoren la opción de quienes,
                por objeción de conciencia, rechazan “llevar armas”.
              </li>
              <li>
                Para salvaguardar la paz en la familia, los hermanos hagan, a su
                debido tiempo, el testamento de sus bienes.
              </li>
            </ul>

            <p>
              <strong>En la familia.</strong>
            </p>
            <p>
              <strong>Art. 24</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 17.</strong> Los franciscanos seglares consideren
                a su familia como el ámbito prioritario en el que viven su
                compromiso cristiano y la vocación franciscana; en ella
                concédanle tiempo a la oración, a la Palabra de Dios y a la
                catequesis cristiana, y defiendan el respeto a la vida desde su
                concepción y en toda circunstancia, hasta la muerte. Los casados
                encuentren en la Regla de la OFS una valiosa ayuda para recorrer
                el camino de la vida cristiana, conscientes de que, en el
                sacramento del Matrimonio, su amor participa del amor que Cristo
                tiene a su Iglesia. El amor de los esposos y la afirmación del
                valor de la fidelidad son un profundo testimonio para la propia
                familia, la Iglesia y el mundo.
              </li>
              <li>
                En la Fraternidad:
                <ul>
                  <li>
                    sea tema de diálogo y de comunicación de experiencias la
                    espiritualidad familiar y conyugal y el planteamiento
                    cristiano de los problemas familiares
                  </li>
                  <li>
                    compártanse los momentos importantes de la vida familiar de
                    los hermanos y téngase una atención fraterna hacia los que –
                    célibes o solteros, viudos, padres solos, separados,
                    divorciados – viven en situaciones y condiciones difíciles;
                  </li>
                  <li>
                    créense condiciones para el diálogo intergeneracional;
                  </li>
                  <li>
                    favorézcase la formación de grupos de matrimonios y de
                    grupos de familias.
                  </li>
                </ul>
              </li>
              <li>
                Los hermanos colaboren en los esfuerzos que se hacen en la
                Iglesia y en la sociedad para afirmar el valor de la fidelidad y
                el respeto a la vida y para dar respuesta a los problemas
                sociales de la familia.
              </li>
            </ul>

            <p>
              <strong>Art. 25</strong>
            </p>
            <p>
              Convencidos de la necesidad de educar “a los niños para que se
              abran a la comunidad... y adquieran conciencia de ser miembros
              vivos y activos del Pueblo de Dios”[20] y de la fascinación que
              Francisco puede ejercer sobre ellos, favorézcase la formación de
              grupos de niños a los que, con la ayuda de una pedagogía y una
              organización apropiada para su edad, se inicie en el conocimiento
              y en el amor de la vida franciscana. Los Estatutos nacionales
              darán oportunas orientaciones para la organización de estos grupos
              y para su relación con la Fraternidad y con los grupos juveniles
              franciscanos.
            </p>

            <p>
              <strong>Mensajeros de alegría y de esperanza</strong>
            </p>
            <p>
              <strong>Art. 26</strong>
            </p>
            <ul>
              <li>
                Aun en el dolor, Francisco experimentó la confianza y la alegría
                nutriéndose:
                <ul>
                  <li>con una experiencia de la paternidad de Dios;</li>
                  <li>
                    con una fe inquebrantable de resucitar con Cristo a la vida
                    eterna;
                  </li>
                  <li>
                    con una experiencia de encuentro y de alabanza al Creador en
                    la fraternidad universal con todas las criaturas[21].
                  </li>
                </ul>
              </li>

              <li>
                <strong>Regla 19.</strong>Así, en conformidad con el Evangelio,
                los franciscanos seglares dan su sí a la esperanza y a la
                alegría de vivir y ofrecen su colaboración para contrarrestar
                las múltiples angustias y el pesimismo, preparando un futuro
                mejor.
              </li>
              <li>
                En la Fraternidad, los hermanos promuevan el entendimiento mutuo
                y procuren que el ambiente de las reuniones sea acogedor y
                refleje la alegría. Anímense mutuamente para obrar el bien.
              </li>
            </ul>

            <p>
              <strong>Art. 27</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 19.</strong>
                Los hermanos, al avanzar en edad, aprendan a aceptar la
                enfermedad y las dificultades crecientes y den a su vida un
                sentido más profundo, en un progresivo desapego y encaminándose
                hacia la tierra prometida. Estén firmemente convencidos de que
                la comunidad de los creyentes en Cristo y de los que se aman en
                Él, se continuará en la vida eterna como “comunión de los
                santos”.
              </li>
              <li>
                Los franciscanos seglares comprométanse a crear en sus
                ambientes, y sobre todo en las Fraternidades, un clima de fe y
                de esperanza, para que “la hermana muerte” sea esperada como
                paso hacia el Padre y para que todos puedan prepararse con
                serenidad.
              </li>
            </ul>
          </div>
        </details>

        <details className="doc-panel">
          <summary className="doc-panel__title">
            Capítulo III: Vida en Fraternidad
          </summary>
          <div className="doc-content">
            {/* Título I */}
            <p>
              <strong>Título I: Orientaciones Generales</strong>
            </p>

            <p>
              <strong>Art. 28</strong>
            </p>
            <ul>
              <li>
                La Fraternidad de la OFS tiene su origen en la inspiración de
                San Francisco de Asís, a quien el Altísimo le reveló la esencia
                evangélica de la vida en comunión fraterna[22].
              </li>
              <li>
                <strong>Regla 20.</strong> “La OFS se divide en Fraternidades,
                de diversos niveles”, con el fin de promover de forma ordenada
                la unión y la colaboración mutua entre los hermanos y su
                presencia activa y comunitaria, tanto en la Iglesia particular
                como en la Iglesia universal. La OFS favorecerá, además, el
                compromiso de las Fraternidades al servicio del mundo y de modo
                particular en la vida de la sociedad.
              </li>
              <li>
                Los hermanos se unen, ya sea en Fraternidades locales, erigidas
                en una Iglesia o una casa religiosa, ya sea en Fraternidades
                personales, constituidas por motivaciones precisas, válidas y
                reconocidas en el decreto de erección[23]
              </li>
            </ul>

            <p>
              <strong>Art. 29</strong>
            </p>
            <ul>
              <li>
                Las Fraternidades locales se agrupan en Fraternidades, de
                diversos niveles: regional, nacional, internacional, según
                criterios eclesiales, territoriales, o de otra naturaleza. Se
                coordinan y unen entre sí conforme a la Regla y las
                Constituciones. Ésta es una exigencia de la comunión entre las
                Fraternidades, la ordenada colaboración entre ellas y la unidad
                de la OFS.
              </li>
              <li>
                <strong>Regla 20.</strong> Estas Fraternidades, que cada una
                tiene personalidad jurídica en la Iglesia, adquieran, si es
                posible, la personalidad jurídica civil para el mejor
                cumplimiento de su misión. Corresponde a los Consejos nacionales
                dar orientaciones sobre las motivaciones y procedimientos que
                hay que seguir.
              </li>
              <li>
                Los Estatutos nacionales deben indicar los criterios de
                organización de la OFS en la nación. La aplicación de estos
                criterios se deja al prudente juicio de los Responsables de las
                Fraternidades interesadas y del Consejo nacional.
              </li>
            </ul>

            <p>
              <strong>Art. 30</strong>
            </p>
            <ul>
              <li>
                Los hermanos son corresponsables de la vida de la Fraternidad a
                la que pertenecen y de la OFS como unión orgánica de todas las
                Fraternidades extendidas por el mundo.
              </li>
              <li>
                El sentido de corresponsabilidad de los miembros exige la
                presencia personal, el testimonio, la oración, la colaboración
                activa, según las posibilidades de cada uno y los eventuales
                compromisos para la animación de la Fraternidad.
              </li>
              <li>
                <strong>Regla 25.</strong> Con espíritu de familia, cada hermano
                deposite en la caja de la Fraternidad una aportación, según sus
                posibilidades, con el fin de facilitar los recursos financieros
                necesarios para la vida de la Fraternidad y para sus obras de
                culto, apostolado y caridad. Los hermanos, además, proveerán al
                financiamiento de las actividades y de las obras de las
                Fraternidades de nivel superior con otras aportaciones
                económicas.
              </li>
            </ul>

            <p>
              <strong>Art. 31</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 21.</strong> “En los diferentes niveles, cada
                Fraternidad es animada y guiada por un Consejo y un Ministro (o
                Presidente)”. Tales oficios se confieren mediante elecciones, de
                acuerdo con la Regla, las Constituciones y los Estatutos
                propios. Sólo en casos excepcionales o en la primera fase de su
                institución, pueden existir Fraternidades sin un Consejo
                regular. Ante esta carencia suple el Consejo de nivel superior
                durante el tiempo estrictamente necesario para asegurar la
                recuperación y o la normalización de la Fraternidad, la
                formación de sus animadores y el trámite de las elecciones.
              </li>
              <li>
                El oficio de Ministro o de Consejero es un servicio fraterno, un
                compromiso de disponibilidad y responsabilidad respecto a los
                hermanos y a la Fraternidad, para que cada uno se realice en su
                vocación y cada Fraternidad sea una verdadera comunidad eclesial
                franciscana, activamente presente en la Iglesia y en la
                sociedad.
              </li>
              <li>
                Los Responsables de la OFS de cada nivel sean hermanos profesos
                perpetuos, convencidos de la validez de la vida evangélica
                franciscana, atentos, con visión amplia y generosa, a la vida de
                la Iglesia y de la sociedad, abiertos al diálogo, dispuestos a
                dar y recibir ayuda y colaboración.
              </li>
              <li>
                Los Responsables cuiden la preparación y la animación espiritual
                y metodológica de las reuniones, tanto de las Fraternidades,
                como de los Consejos. Infundan ánimo y vida a la Fraternidad con
                su testimonio sugiriendo los medios idóneos para el desarrollo
                de la vida de fraternidad y de las actividades apostólicas, a la
                luz de las opciones fundamentales franciscanas. Hagan que las
                decisiones tomadas se cumplan y promuevan la colaboración de los
                hermanos.
              </li>
            </ul>

            <p>
              <strong>Art. 32</strong>
            </p>
            <ul>
              <li>
                Los Ministros y Consejeros vivan y promuevan el espíritu y la
                comunión entre los hermanos, entre las diversas Fraternidades y
                entre éstas y la Familia Franciscana. Procuren, por encima de
                todo, la paz y la reconciliación en el ámbito de la Fraternidad.
              </li>
              <li>
                <strong>Regla 21.</strong> El oficio de guía de los Ministros y
                Consejeros es temporal. Los hermanos, huyendo de toda ambición,
                deben mostrar su amor a la Fraternidad con espíritu de servicio
                y con disponibilidad tanto para aceptar, como para dejar el
                cargo.
              </li>
            </ul>

            <p>
              <strong>Art. 33</strong>
            </p>
            <ul>
              <li>
                En la guía y coordinación de las Fraternidades y de la Orden se
                ha de promover la personalidad y capacidad de cada hermano y de
                cada Fraternidad, y respetar también la pluralidad de
                expresiones del ideal franciscano y la diversidad de culturas.
              </li>
              <li>
                Los Consejos de nivel superior no hagan lo que pueden hacer
                adecuadamente las Fraternidades locales o los Consejos de nivel
                inferior; respeten y promuevan su vitalidad para que cumplan
                adecuadamente sus deberes. Las Fraternidades locales y los
                Consejos interesados, esfuércense en poner en práctica las
                decisiones del Consejo internacional y de los otros Consejos de
                nivel superior y lleven a cabo los programas, adaptándolos,
                según los casos, a la propia realidad.
              </li>
            </ul>

            <p>
              <strong>Art. 34</strong>
            </p>
            <p>
              Allí donde la situación ambiental y las necesidades de sus
              miembros lo requieran, dentro del ámbito de la Fraternidad pueden
              constituirse, bajo la guía de un único Consejo, secciones o grupos
              que reúnan a los miembros unidos por particulares exigencias, por
              afinidad de intereses o por identidad de opciones de trabajo.
              <br />
              Tales grupos podrán darse normas específicas relativas a
              encuentros y actividades, permaneciendo firme la fidelidad a las
              exigencias que nacen de la pertenencia a una Fraternidad. Los
              Estatutos nacionales establecerán los criterios idóneos para la
              formación y el funcionamiento de las secciones o grupos.
            </p>

            <p>
              <strong>Art. 35</strong>
            </p>
            <ul>
              <li>
                Los sacerdotes seculares, que se sienten llamados por el
                Espíritu a participar del carisma de San Francisco de Asís en la
                Fraternidad seglar, encuentren en ésta una atención específica,
                conforme a su misión en el Pueblo de Dios.
              </li>
              <li>
                Los sacerdotes seculares franciscanos pueden reunirse en
                Fraternidad personal, con el fin de profundizar los aspectos
                ascéticos y pastorales que la vida y la doctrina de Francisco y
                la Regla de la OFS les ofrece para vivir mejor su vocación en la
                Iglesia. Es oportuno que estas Fraternidades tengan Estatutos
                propios que prevean las modalidades concretas relativas a su
                composición, a sus encuentros fraternos y a su formación
                espiritual, así como para hacer viva y operante la comunión con
                toda la Orden.
              </li>
            </ul>

            <p>
              <strong>Art. 36</strong>
            </p>
            <ul>
              <li>
                Pueden ser de gran ayuda para el desarrollo espiritual y
                apostólico de la OFS los hermanos que se comprometen con votos
                privados a vivir el espíritu de las Bienaventuranzas y a estar
                más disponibles para la contemplación y para el servicio de la
                Fraternidad.
              </li>
              <li>
                Estos hermanos y hermanas pueden reunirse por grupos, según los
                Estatutos aprobados por el Consejo nacional o, cuando la
                difusión de tales grupos supere las fronteras de una nación, por
                la Presidencia del CIOFS.
              </li>
              <li>
                Tales Estatutos deben estar en armonía con las presentes
                Constituciones.
              </li>
            </ul>

            {/* Título II */}
            <p>
              <strong>Título II: Ingreso en la Orden y Formación</strong>
            </p>

            <p>
              <strong>Art. 37</strong>
            </p>
            <ul>
              <li>
                <strong>Regla 23.</strong> El ingreso consta de iniciación,
                formación y Profesión de la Regla.
              </li>
              <li>
                La formación es responsabilidad del candidato, la Fraternidad,
                el Consejo, el Maestro de formación y el Asistente.
              </li>
              <li>
                La Fraternidad acoge y acompaña el camino formativo de cada
                hermano.
              </li>
              <li>
                Los Consejos nacionales y regionales elaboran medios de
                formación adecuados.
              </li>
            </ul>

            <p>
              <strong>Art. 38</strong> (Tiempo de iniciación)
            </p>
            <ul>
              <li>
                Es fase preparatoria de discernimiento y mutuo conocimiento.
              </li>
              <li>Duración y modalidades las fija el Estatuto nacional.</li>
              <li>El Consejo local decide eventuales exenciones.</li>
            </ul>

            <p>
              <strong>Art. 39</strong> (Admisión a la Orden)
            </p>
            <ul>
              <li>
                <strong>Regla 23.</strong> Petición formal al Ministro local.
              </li>
              <li>
                Requisitos: fe católica, comunión eclesial, buena conducta y
                signos de vocación.
              </li>
              <li>
                El Consejo decide colegialmente; el rito se celebra según el
                Ritual.
              </li>
            </ul>

            <p>
              <strong>Art. 40</strong> (Tiempo de formación inicial)
            </p>
            <ul>
              <li>
                Duración mínima: un año; los Estatutos nacionales pueden
                ampliarla.
              </li>
              <li>Reuniones de estudio, oración y experiencias de servicio.</li>
              <li>
                Lectura de Escrituras, escritos franciscanos y estudio de Regla
                y Constituciones.
              </li>
            </ul>

            <p>
              <strong>Art. 41</strong> (Profesión de vida evangélica)
            </p>
            <ul>
              <li>
                El candidato solicita la Profesión al concluir la formación
                inicial.
              </li>
              <li>
                Requisitos: edad mínima, un año de formación y consentimiento
                del Consejo.
              </li>
              <li>
                Profesión perpetua (o temporal renovable hasta 3 años) ante
                Ministro local, registrada en archivo.
              </li>
            </ul>

            <p>
              <strong>Art. 42–43</strong>
            </p>
            <ul>
              <li>
                Condiciones, rito y simbolismo de la Profesión; Estatutos
                nacionales fijan edad mínima y símbolo distintivo.
              </li>
            </ul>

            <p>
              <strong>Art. 44</strong> (Formación permanente)
            </p>
            <ul>
              <li>
                Continúa toda la vida como ayuda a la conversión y misión.
              </li>
              <li>Atención especial a neoprofesos y profesos temporales.</li>
              <li>
                Cursos, encuentros y estudio de Escrituras, magisterio y
                escritos franciscanos.
              </li>
            </ul>

            <p>
              <strong>Art. 45</strong> (Promoción vocacional)
            </p>
            <ul>
              <li>
                Promover la vocación franciscana seglar es deber de todos.
              </li>
              <li>Los Consejos adoptan medios oportunos para su difusión.</li>
            </ul>

            {/* Título III */}
            <p>
              <strong>
                Título III: La Fraternidad en sus diversos niveles
              </strong>
            </p>

            <p>
              <strong>Art. 46</strong> (Fraternidad local)
            </p>
            <ul>
              <li>
                <strong>Regla 22.</strong> Erección canónica por Superior mayor
                religioso, con mínimo 5 profesos perpetuos y consentimiento del
                Ordinario local.
              </li>
            </ul>

            <p>
              <strong>Art. 47–48</strong>
            </p>
            <ul>
              <li>
                Traslado de bienes en interrupción/restauración de Fraternidad.
              </li>
            </ul>

            <p>
              <strong>Art. 49–52</strong> (El Consejo local y sus oficios)
            </p>
            <ul>
              <li>
                Funciones y composición del Consejo local y competencias de
                Ministro, Viceministro, Secretario, Maestro de formación y
                Tesorero.
              </li>
            </ul>

            {/* Título IV */}
            <p>
              <strong>Título IV: Elección a los oficios y cese</strong>
            </p>

            <p>
              <strong>Art. 76–83</strong>
            </p>
            <ul>
              <li>
                Normas generales de elecciones: convocatoria, derechos de voz y
                voto, mayorías, incompatibilidades, renuncias y remociones.
              </li>
            </ul>

            {/* Título V */}
            <p>
              <strong>
                Título V: Asistencia espiritual y pastoral de la OFS
              </strong>
            </p>

            <p>
              <strong>Art. 85–91</strong>
            </p>
            <ul>
              <li>
                Relación con Primera Orden y TOR, “Altius moderamen”, funciones
                de Asistentes generales, nacionales, regionales y locales.
              </li>
            </ul>

            {/* Título VI */}
            <p>
              <strong>
                Título VI: La Visita fraterna y la Visita pastoral
              </strong>
            </p>

            <p>
              <strong>Art. 92–95</strong>
            </p>
            <ul>
              <li>
                Finalidad, modalidades y desarrollo de las Visitas fraterna y
                pastoral.
              </li>
            </ul>

            {/* Título VII */}
            <p>
              <strong>Título VII: La Juventud Franciscana</strong>
            </p>

            <p>
              <strong>Art. 96–97</strong>
            </p>
            <ul>
              <li>
                La JUFRA como experiencia franciscana juvenil, organización,
                formación y representación mutua con la OFS.
              </li>
            </ul>

            {/* Título VIII */}
            <p>
              <strong>
                Título VIII: En comunión con la Familia Franciscana y con la
                Iglesia
              </strong>
            </p>

            <p>
              <strong>Art. 98–103</strong>
            </p>
            <ul>
              <li>
                Comunión con Tercera Orden, contemplativas, magisterio de la
                Iglesia, colaboración pastoral y apostólica en parroquias y
                diócesis.
              </li>
            </ul>
          </div>
        </details>
      </section>
    </div>
  );
}

export default NuestrasConstituciones;
