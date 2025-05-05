import React from "react";
import "./Documentos.css";
import heroImage from "../../assets/images/hero-regla.jpg";

function NuestraRegla() {
  return (
    <div className="doc-container">
      {/* Hero */}
      <section className="doc-hero">
        <div className="doc-hero__logo">
          <img src={heroImage} alt="Nuestra Regla" />
        </div>
        <div className="doc-hero__text">
          <h1>Nuestra Regla</h1>
          <p className="doc-hero__text">
            <em>
              "La Regla enfatiza la importancia de vivir el Evangelio, siguiendo
              el ejemplo de San Francisco de Asís."
            </em>
          </p>
        </div>
      </section>

      {/* Acordeón */}
      <section className="doc-accordion">
        <details className="doc-panel">
          <summary className="doc-panel__title">
            Carta de los Cuatro Ministros Generales de la Familia Franciscana
          </summary>
          <div className="doc-content">
            <p>
              A los hermanos y hermanas de la Orden Franciscana Seglar, con
              ocasión de la entrega de su Regla, aprobada por la Santa Sede.
            </p>
            <p>
              Nos alegramos de comunicaros que la Santa Sede, con el Breve
              Apostólico “Seraphicus Patriarcha”, del 24 de junio de 1978, ha
              aprobado, “bajo el anillo del Pescador”, la Regla renovada de la
              Orden Franciscana Seglar, que abroga y sustituye la Regla
              precedente, del Papa León XIII. Es un espléndido regalo que
              debemos a S.S. el Papa Pablo VI, otorgado poco antes de abandonar
              esta tierra.
            </p>
            <p>
              Él os amaba. Efectivamente, en reiteradas ocasiones había
              manifestado su amor a la Orden Franciscana Seglar y os había
              dedicado palabras inolvidables, como en el mes de junio de 1968 y
              en 1971, con ocasión del 750 aniversario del “Memoriale
              Propositi”.
            </p>
            <p>
              El camino recorrido desde el 7 de marzo de 1966, es decir, desde
              cuando la Sagrada Congregación para los Religiosos concedió la
              facultad para iniciar la puesta al día de la legislación de la
              Orden Franciscana Seglar, ha sido largo y difícil. Queremos
              subrayar la labor realizada por los hermanos y por las
              Fraternidades, ya sea mediante las diferentes “formas de vida”,
              “Way of life”, “Itinerarios”, ya sea institución en el año 1973.
            </p>
            <p>
              Esta labor ha sido de capital importancia en la búsqueda de los
              caminos del Espíritu, y muy eficaz para percibir la presencia y la
              vitalidad del carisma franciscano en el Pueblo de Dios, en
              nuestros días.
            </p>
            <p>
              La Regla que hoy os presentamos no es solamente el fruto de estos
              trabajos. La Iglesia os la entrega como norma de vida.
            </p>
            <p>
              La prioridad de vuestra atención debe orientarse hacia el
              contenido evangélico, acogiendo el mensaje franciscano del que es
              portadora y la pauta que os brinda para vivir según el Santo
              Evangelio. Uno de los pilares de la deseada renovación es la
              vuelta a los orígenes, a la experiencia espiritual de Francisco de
              Asís y de los hermanos y hermanas de la penitencia, que de él
              recibieron inspiración y guía. Tal propósito se sugiere con la
              inserción, a modo de prólogo, de la “Carta a todos los Fieles”
              (primera redacción), amén de las constantes referencias a la
              doctrina y al ejemplo de San Francisco.
            </p>
            <p>
              Otra de los pilares es la atención al Espíritu de los signos de
              los tiempos.
            </p>
            <p>
              Apoyados en estos dobles pilares, debéis poner en práctica la
              invitación de la Regla a la creatividad y al ejercicio de la
              corresponsabilidad. Esta creatividad, en algunos casos, deberá
              expresarse en forma de Estatutos. En efecto, el número 3 de la
              Regla afirma como norma general: “la aplicación será hecha por las
              Constituciones Generales y por los Estatutos particulares”.
            </p>
            <p>
              Nosotros, Ministros Franciscanos, con todos nuestros hermanos
              tenemos el ánimo abierto y disponible a prestaros la asistencia
              necesaria para caminar juntos por los caminos del Señor.
            </p>
            <p>
              Con estos sentimientos, nos es sumamente grato entregar la Regla
              renovada de la Orden Franciscana Seglar a la Presidencia del
              Consejo Internacional OFS, y, mediante ella, a todos los
              Franciscanos seglares, que deberán recibirla como norma y vida.
            </p>
            <br />
            <br />
            <p className="doc-content__fecha">Roma, 4 de octubre de 1978</p>
            <p>
              <strong>Fr. Constantino Koser,</strong> Min. Gen. O.F.M.
              <br />
              <br />
              <strong>Fr. Vitale Bommarco,</strong> Min. Gen. O.F.M. Conv.
              <br />
              <br />
              <strong>Fr. Pascual Rywalski,</strong>Min. Gen. O.F.M. Cap.
              <br />
              <br />
              <strong>Fr. Rolando Faley,</strong> Min. Gen. T.O.R.
            </p>
          </div>
        </details>

        <details>
          <summary>Carta Apostólica de Aprobación</summary>
          <div className="doc-content">
            <h3>
              <strong>Regla de la Orden Franciscana Seglar</strong>
            </h3>
            <p>
              <strong>Papa Pablo VI</strong>
            </p>
            <p>
              <strong>Para perpetuo recuerdo</strong>
            </p>
            <p>
              El Seráfico Patriarca San Francisco de Asís, mientras vivía y aún
              después de su preciosa muerte, no sólo atraía a muchos al servicio
              de Dios en la familia religiosa por él fundada, sino que arrastró
              a innumerables laicos a entrar en sus instituciones permaneciendo
              el mundo en cuanto les sea posible. En efecto, usando palabras de
              Nuestro Predecesor Pio XI, “parece... que no ha habido otro hombre
              en el cual brillara, de manera más tangible, la imagen de
              Jesucristo y la forma evangélica de vida, que en Francisco. Por
              tanto, él que se había llamado Heraldo del Gran Rey, justamente
              fue saludado otro Jesucristo, por haberse presentado a sus
              contemporáneos y a los siglos futuros casi como Cristo revivido,
              por lo que se deduce que, como tal, él vive todavía a los ojos de
              los hombres y continuará viviendo para las generaciones futuras.
              (Enc. Rite expiatis, 30 de abril, 1926, AAS/18/1926, p. 154).
            </p>
            <p>
              Nos alegramos de que “el carisma franciscano”, conserve todavía su
              vigor para el bien de la Iglesia y de la comunidad humana, no
              obstante la difusión de doctrinas acomodaticias y el crecimiento
              de tendencias que alejan a los hombres de Dios y de lo
              sobrenatural.
            </p>
            <p>
              Laudable ha sido, pues, la solicitud y el trabajo mancomunado, con
              que las cuatro Familias Franciscanas se han esforzado, durante
              diez años, en elaborar la nueva Regla de la Tercera Orden
              Franciscana, o, como se llama ahora, Orden Franciscana Seglar.
              Esto ha parecido necesario tanto por el cambio de las condiciones
              de los tiempos, como por las disposiciones y recomendaciones dados
              al respecto por el Concilio Vaticano II.
            </p>
            <p>
              Por lo tanto, los amados hijos, Ministros Generales de las cuatro
              Órdenes Franciscanas, Nos han instado para que aprobemos la Regla
              preparada. Y Nos, siguiendo el ejemplo de algunos de nuestros
              Predecesores, el último de los cuales, León XIII, hemos decidido
              de buen grado acceder a tales peticiones. Estando así las cosas,
              Nos, teniendo la confianza de que la forma de vida predicada por
              aquel admirable Varón de Asís, recibirá un nuevo impulso y
              florecerá con vigor, después de haber consultado a la Sagrada
              Congregación para los Religiosos e Institutos Seculares, que
              examinó diligentemente el ejemplar que le fue presentado,
              consideradas con atención todas las circunstancias, con ciencia
              cierta y madura deliberación, aprobamos y confirmamos, con Nuestra
              autoridad Apostólica, por medio de estas letras, la Regla de la
              Orden Franciscana Seglar, y os añadimos la fuerza de la sanción
              Apostólica, a condición de que concuerde con el ejemplar que se
              conserva en el Archivo de la Sagrada Congregación para los
              Religiosos e Institutos Seculares, y cuyas primeras palabras son
              “Inter spirituales familias” y las últimas, “ad normam
              Constitutionum, petenda”.
            </p>
            <p>
              Con la presente carta y con Nuestra autoridad, abrogamos la Regla
              anterior de la que se llamaba Tercera Orden Franciscana Seglar. Y
              establecemos, que estas Letras sean firmes y produzcan plenamente
              sus efectos ahora y en el futuro; sin que obste nada en contrario.
            </p>
            <p>
              Dadas en Roma, junto a San Pedro, bajo el anillo del Pescador, el
              día 24 de junio de 1978, decimosexto año de Nuestro pontificado.
            </p>
            <p>
              <strong>† Juan Card. Villot</strong>
              <br />
              Secretario de Estado
            </p>
            <p className="doc-content__fecha">
              A.A.S. 70 [1978], pp. 454-5)
              <br />
              Lugar + del sello
              <br />
              En la Secretaría de Estado, Arch. n. 352241
            </p>
          </div>
        </details>

        <details>
          <summary>Prólogo: Exhortación de San Francisco</summary>
          <div className="doc-content">
            <p>
              <h3>
                <strong>
                  Exhortacion de San Francisco a los hermanos y hermanas de la
                  penitencia
                </strong>
              </h3>
            </p>
            <p>
              <strong>¡En el nombre del Señor!</strong>
              <br />
              <strong>Los que hacen penitencia</strong>
            </p>
            <p>
              Todos aquellos que aman al Señor con todo el corazón, con toda el
              alma y la mente y con todas sus fuerzas (cf. Mc 12,30), y aman a
              sus prójimos como a sí mismos (cf. Mt 22,39), y aborrecen sus
              cuerpos con sus vicios y pecados, y reciben el cuerpo y la sangre
              de nuestro Señor Jesucristo, y dan los frutos propios de la
              penitencia (Lc 3,8): ¡oh, cuán dichosos y benditos son aquellos y
              aquellas que hacen estas cosas y en ellas perseveran!, porque
              sobre ellos descansará el Espíritu del Señor (cf. Is 11,2) y hará
              en ellos habitación y morada (cf. Jn 14,23), y son hijos del Padre
              celestial (cf. Mt 5,45), cuyas obras hacen, y son esposos,
              hermanos y madres de nuestro Señor Jesucristo (cf. Mt 12,50).
            </p>
            <p>
              Somos sus esposos cuando el alma fiel se une a nuestro Señor
              Jesucristo por el Espíritu Santo; somos sus hermanos cuando
              hacemos la voluntad del Padre, que está en los cielos (Mt 12,50);
              somos sus madres, cuando lo llevamos en el corazón y en nuestro
              cuerpo (cf. 1 Cor 6,20) por el amor divino y por una conciencia
              pura y sincera, y lo damos a luz por las obras santas, que deben
              ser luz para los demás por el ejemplo (cf. Mt 5,16).
            </p>
            <p>
              ¡Oh, cuán glorioso es tener en el cielo un padre santo y grande!
              ¡Oh, cuán santo, es tener un tal esposo, defensor, hermoso y
              admirable! ¡Oh, cuán santo y cuán amado, es tener un tal hermano y
              un tal hijo, agradable, humilde, pacífico, dulce, amable y más que
              todas las cosas deseable, nuestro Señor Jesucristo!, que dio su
              vida por sus ovejas (cf. Jn 10,15) y oró al Padre diciendo: Padre
              santo, guarda en tu nombre (Jn 17,11) a los que me diste en el
              mundo; tuyos eran y tú me los diste (Jn 17,6). Y las palabras que
              me diste, se las he dado yo a ellos; y ellos las han aceptado y
              han creído verdaderamente que salí de ti, y han conocido que tú me
              enviaste (cf. Jn 17,8). Ruego por ellos y no por el mundo (cf. Jn
              17,9). Bendícelos y conságralos (cf. Jn 17,17); también yo me
              consagro a mí mismo por ellos (Jn 17,19). No ruego sólo por ellos,
              sino también por los que han de creer en mí por su palabra (Jn
              17,20), para que sean consagrados en la unidad, como nosotros (cf.
              Jn 17,23.11). Y quiero, Padre, que donde estoy yo también ellos
              estén conmigo, para que vean mi gloria (cf. Jn 17,24) en tu reino
              (Mt 20,21). Amén.
            </p>
            <p className="doc-content__fecha">
              <h4>
                “Francisco y Clara de Asís. Escritos”; efarantzazu; Vitoria -
                Gasteiz, 2014.
              </h4>
            </p>
            <br />
            <p>
              <strong>Los que no hacen penitencia</strong>
            </p>
            <p>
              Por el contrario, todos aquellos y aquellas que no viven en
              penitencia, ni reciben el cuerpo y la sangre de nuestro Señor
              Jesucristo, y viven en el vicio y el pecado, y van tras la mala
              concupiscencia (cf. Col 3,5) y los malos deseos de su carne (cf.
              Gál 5,16), y no cumplen lo que prometieron al Señor, y sirven
              corporalmente al mundo con los deseos carnales (1Pe 2,11) y con
              los afanes de este mundo (cf. Mt 13,22; Lc 21,34) y las
              preocupaciones de esta vida, engañados por el diablo, cuyos hijos
              son y cuyas obras hacen (cf. Jn 8,41), son unos ciegos (cf. Mt
              15,14), pues no ven al que es la luz verdadera (cf. Jn 1,9),
              nuestro Señor Jesucristo. No tienen sabiduría espiritual, porque
              no tienen al Hijo de Dios, que es la verdadera sabiduría del
              Padre. De ellos se dice: Su sabiduría ha sido devorada (Sal
              106,27); y: Malditos los que se apartan de tus mandatos (Sal
              118,21). Ven y conocen, saben y hacen el mal, y a sabiendas
              pierden sus almas.
            </p>
            <p>
              Mirad, ciegos, engañados por vuestros enemigos, la carne, el mundo
              y el diablo, que al cuerpo le es dulce pecar y amargo servir a
              Dios; pues todos los vicios y pecados salen y proceden del corazón
              del hombre, como dice el Señor en el Evangelio (cf. Mc 7,21.23; Mt
              15,18-19). Y nada tenéis en este mundo ni en el futuro. Pensáis
              poseer por mucho tiempo las vanidades de este mundo, pero estáis
              engañados, porque vendrán el día y la hora que no pensáis, que
              desconocéis e ignoráis (cf. Mt 24,44; 25,13): enferma el cuerpo,
              se acerca la muerte, y se muere así con muerte amarga (1Sam
              15,32). Y dondequiera, cuandoquiera y comoquiera que muere el
              hombre en pecado mortal, sin penitencia y sin haberlo reparado, si
              pudiendo hacerlo no lo hace, el diablo arrebata el alma de su
              cuerpo con tanta angustia y tribulación como nadie las puede
              imaginar, sino el que las padece. Y todos los talentos y el poder,
              y la ciencia y la sabiduría (cf. 2Crón 1,12) que creían tener, les
              serán arrebatados (cf. Lc 8,18: Mc 4,25). Y los dejan a los
              parientes y amigos; y éstos toman y reparten su hacienda, y dicen
              luego: «¡Maldita sea su alma, pues pudo dejarnos más y haber
              ganado más de lo que ganó!» El cuerpo se lo comen los gusanos; y
              así pierden el cuerpo y el alma en este mundo caduco, e irán al
              infierno, donde serán atormentados sin fin (cf. Lc 16,24).
            </p>
            <p>
              A todos aquellos a quienes llegue estas letras, les rogamos, por
              la caridad que es Dios (cf. 1Jn 4,8.16), que acojan benignamente
              con amor divino las sobredichas fragantes palabras de nuestro
              Señor Jesucristo. Y los que no saben leer, háganselas leer con
              frecuencia; y téngalas consigo con obras santas hasta el fin,
              porque son espíritu y vida (Jn 6,63). Y los que no hagan esto
              tendrán que dar cuenta en el día del juicio (cf. Mt 12,36), ante
              el tribunal de nuestro Señor Jesucristo (cf. Rom 14,10).
            </p>
          </div>
        </details>

        <details>
          <summary>Capítulo I: La Orden Franciscana Seglar</summary>
          <div className="doc-content">
            <p>
              <strong>1.</strong>
              <br />
            </p>
            <p>
              Entre las familias espirituales, suscitadas por el Espíritu Santo
              en la Iglesia[2], la familia Franciscana comprende a todos
              aquellos miembros del Pueblo de Dios, laicos, religiosos y
              sacerdotes, que se sienten llamados al seguimiento de Cristo, tras
              las huellas de San Francisco de Asís[3]. En maneras y formas
              diversas, pero en recíproca comunión vital, todos ellos se
              proponen hacer presente el carisma del común Seráfico Padre en la
              vida y en la misión de la Iglesia[4].
            </p>
            <p>
              <strong>2.</strong>
              <br />
            </p>
            <p>
              En el seno de dicha familia, tiene un puesto peculiar la Orden
              Franciscana Seglar, la cual se configura como una unión orgánica
              de todas las fraternidades católicas esparcidas por el mundo
              entero y abiertas a todo grupo de fieles, en las cuales los
              hermanos y las hermanas, impulsados por el Espíritu a alcanzar la
              perfección de la caridad en su estado seglar, se comprometen con
              la Profesión a vivir el Evangelio a la manera de San Francisco con
              la ayuda de la presente Regla confirmada por la Iglesia[5][6].
            </p>
            <p>
              <strong>3.</strong>
              <br />
            </p>
            <p>
              Esta Regla, después del “Memoriale propositi” (1221) y de las
              Reglas aprobadas por los Sumos Pontífices Nicolás IV y León XIII,
              adapta la Orden Franciscana Seglar a las exigencias y a las
              esperanzas de la santa Iglesia, en las nuevas condiciones de los
              tiempos. Su interpretación corresponde a la Santa Sede y su
              aplicación será hecha por las Constituciones Generales y los
              Estatutos particulares.
            </p>
          </div>
        </details>

        <details>
          <summary>Capítulo II: La forma de vida</summary>
          <div className="doc-content">
            <p>
              <strong>4.</strong>
              <br />
            </p>
            <p>
              La Regla y la vida de los Franciscanos seglares es ésta: guardar
              el santo Evangelio de nuestro Señor Jesucristo siguiendo el
              ejemplo de San Francisco de Asís, que hizo de Cristo el inspirador
              y centro de su vida con Dios y con los hombres6. Cristo, don del
              amor del Padre, es el camino hacia Él, es la verdad en la cual nos
              introduce el Espíritu Santo, es la vida que Él ha venido a dar
              abundantemente[7]. Los Franciscanos seglares dedíquense
              asiduamente a la lectura del Evangelio, pasando del Evangelio a la
              vida y de la vida al Evangelio[8].
            </p>
            <p>
              <strong>5.</strong>
              <br />
            </p>
            <p>
              Los Franciscanos seglares, pues, busquen la persona viviente y
              operante de Cristo en los hermanos, en la Sagrada Escritura, en la
              Iglesia y en las acciones litúrgicas. La fe de San Francisco que
              dictó estas palabras: “En este mundo nada veo corporalmente del
              mismo Altísimo Hijo de Dios sino su santísimo cuerpo y sangre”[9],
              sea para ellos inspiración y guía de su vida eucarística.
            </p>
            <p>
              <strong>6.</strong>
              <br />
            </p>
            <p>
              Sepultados y resucitados con Cristo en el Bautismo, que los hace
              miembros vivos de la Iglesia, y a ella más estrechamente
              vinculados por la Profesión, háganse testigos e instrumentos de su
              misión entre los hombres, anunciando a Cristo con la vida y con la
              palabra. Inspirados en San Francisco y con él llamados a
              reconstruir la Iglesia, empéñense en vivir en plena comunión con
              el Papa, los Obispos y los Sacerdotes, en abierto y confiado
              diálogo de creatividad apostólica[10].
            </p>
            <p>
              <strong>7.</strong>
              <br />
            </p>
            <p>
              Como “hermanos y hermanas de penitencia”[11], en virtud de su
              vocación, impulsados por la dinámica del Evangelio, conformen su
              modo de pensar y de obrar al de Cristo, mediante un radical cambio
              interior, que el mismo Evangelio denomina con el nombre de
              “conversión”; la cual, debido a la fragilidad humana, debe
              actualizarse cada día[12]. En este camino de renovación, el
              Sacramento de la Reconciliación es signo privilegiado de la
              misericordia del Padre y fuente de gracia[13].
            </p>
            <p>
              <strong>8.</strong>
              <br />
            </p>
            <p>
              Como Jesucristo fue el verdadero adorador del Padre, del mismo
              modo los Franciscanos seglares hagan de la oración y de la
              contemplación el alma del propio ser y del propio obrar[14][15].
              Participen de la vida sacramental de la Iglesia, especialmente de
              la Eucaristía, y asóciense a la oración litúrgica en alguna de las
              formas propuestas por la misma Iglesia, reviviendo así los
              misterios de la vida de Cristo.
            </p>
            <p>
              <strong>9.</strong>
              <br />
            </p>
            <p>
              La Virgen María, humilde sierva del Señor, siempre atenta a su
              palabra y a todas sus mociones, fue para San Francisco centro de
              indecible amor, y declarada Protectora y Abogada de su familia15.
              Los Franciscanos seglares den testimonio de su ardiente amor hacia
              Ella con la imitación de su disponibilidad incondicional, y en la
              efusión de una confiada y consciente oración[16].
            </p>
            <p>
              <strong>10.</strong>
              <br />
            </p>
            <p>
              Asociándose a la obediencia redentora de Jesús, que sometió su
              voluntad a la del Padre, cumplan fielmente las obligaciones
              propias de la condición de cada uno en las diversas circunstancias
              de la vida[17], y sigan a Cristo, pobre y crucificado,
              testimoniándolo aún en las dificultades y persecuciones[18].
            </p>
            <p>
              <strong>11.</strong>
              <br />
            </p>
            <p>
              [19] Cristo, confiado en el Padre, aún apreciando atenta y
              amorosamente las realidades creadas, eligió para Sí y para su
              Madre una vida pobre y humilde19; del mismo modo, los Franciscanos
              seglares han de buscar en el desapego y en el uso una justa
              relación con los bienes terrenos, simplificando las propias
              exigencias materiales; sean conscientes, en conformidad con el
              Evangelio, de ser administradores de los bienes recibidos, en
              favor de los hijos de Dios. Así, en el espíritu de las
              “Bienaventuranzas”, esfuércense en purificar el corazón de toda
              tendencia y avidez de posesión y de dominio, como “peregrinos y
              forasteros” en el camino hacia la casa del Padre[20].
            </p>
            <p>
              <strong>12.</strong>
              <br />
            </p>
            <p>
              Testigos de los bienes futuros y comprometidos con la vocación
              abrazada a la adquisición de la pureza de corazón, se harán libres
              para el amor de Dios y de los hermanos[21].
            </p>
            <p>
              <strong>13.</strong>
              <br />
            </p>
            <p>
              De la misma manera que el Padre ve en cada uno de los hombres los
              rasgos de su Hijo, Primogénito de muchos hermanos[22][23], los
              Franciscanos seglares acojan a todos los hombres con ánimo humilde
              y cortés, como don del Señor23 e imagen de Cristo. El sentido de
              fraternidad les hará felices de colocarse a la par de todos los
              hombres, especialmente con los más humildes, para los cuales se
              esforzarán en crear condiciones de vida dignas de criaturas
              redimidas por Cristo[24].
            </p>
            <p>
              <strong>14.</strong>
              <br />
            </p>
            <p>
              Llamados, juntamente con todos los hombres de buena voluntad, a
              construir un mundo más fraterno y evangélico para la edificación
              del reino de Dios, conscientes de que “quien sigue a Cristo,
              Hombre perfecto, se hace a sí mismo más hombre”, cumplan con
              competencia las propias responsabilidades con espíritu cristiano
              de servicio[25].
            </p>
            <p>
              <strong>15.</strong>
              <br />
            </p>
            <p>
              Estén presentes con el testimonio de su vida y también con
              iniciativas eficaces, tanto individuales como comunitarias, en la
              promoción de la justicia, particularmente en el ámbito de la vida
              pública, empeñándose en opciones concretas y coherentes con su
              fe[26].
            </p>
            <p>
              <strong>16.</strong>
              <br />
            </p>
            <p>
              Consideren el trabajo como don de Dios y como participación en la
              creación, redención y servicio de la comunidad humana[27].
            </p>
            <p>
              <strong>17.</strong>
              <br />
            </p>
            <p>
              Vivan en la propia familia el espíritu franciscano de paz,
              fidelidad y respeto a la vida, esforzándose en convertirlo en el
              signo de un mundo ya renovado en Cristo[28]. Los casados,
              particularmente, viviendo la gracia del matrimonio, den testimonio
              en el mundo del amor de Cristo a su Iglesia. Con una educación
              cristiana, sencilla y abierta, atentos a la vocación de cada uno,
              recorran gozosamente con sus hijos su itinerario espiritual y
              humano[29].
            </p>
            <p>
              <strong>18.</strong>
              <br />
            </p>
            <p>
              Sientan, además, respeto por las otras criaturas, animadas e
              inanimadas, que “de ti, Altísimo, llevan significación “[30] y
              procuren con ahínco pasar de la tentación de la explotación al
              concepto franciscano de la fraternidad universal.
            </p>
            <p>
              <strong>19.</strong>
              <br />
            </p>
            <p>
              Como portadores de paz y conscientes de que ésta ha de construirse
              incesantemente, indaguen los caminos de la unidad y del
              entendimiento fraterno, mediante el diálogo, confiando en la
              presencia del germen divino que hay en el hombre y en la fuerza
              transformadora del amor y del perdón[31]. Mensajeros de la
              perfecta alegría, esfuércense permanentemente en llevar a los
              demás el gozo y la esperanza[32]. Insertos en la resurrección de
              Jesucristo, que da su verdadero sentido a la Hermana Muerte, se
              encaminen con serenidad al encuentro definitivo con el Padre[33].
            </p>
          </div>
        </details>

        <details>
          <summary>Capítulo III: La vida en fraternidad</summary>
          <div className="doc-content">
            <p>
              <strong>20.</strong>
              <br />
            </p>
            <p>
              La Orden Franciscana Seglar se articula en Fraternidades, de
              diversos niveles: local, regional, nacional e internacional. Cada
              una de estas Fraternidades tiene su propia personalidad moral en
              la Iglesia[34]. Las Fraternidades de los diversos niveles se
              coordinan y unen entre sí, de acuerdo con lo que se establece en
              esta Regla y en las Constituciones.
            </p>
            <p>
              <strong>21.</strong>
              <br />
            </p>
            <p>
              En los diferentes niveles, cada Fraternidad es animada y guiada
              por un Consejo y un Ministro (o Presidente), elegidos por los
              profesos en conformidad con las Constituciones35. Su servicio, que
              dura un tiempo limitado, es un compromiso de disponibilidad y de
              responsabilidad para con cada uno y para con el grupo. Las
              Fraternidades, según lo establecido en las Constituciones, se
              estructuran internamente de manera diversa, conforme a las
              necesidades de sus miembros y de las regiones, bajo la dirección
              del Consejo respectivo.
            </p>
            <p>
              <strong>22.</strong>
              <br />
            </p>
            <p>
              La Fraternidad local necesita ser canónicamente erigida, y se
              convierte así en la primera célula de toda la Orden y en signo
              visible de la Iglesia, comunidad de amor. Ésta deberá ser el lugar
              privilegiado para desarrollar el sentido eclesial y la vocación
              franciscana, y, además, para animar la vida apostólica de sus
              miembros[35].
            </p>
            <p>
              <strong>23.</strong>
              <br />
            </p>
            <p>
              Las peticiones de admisión en la Orden Franciscana Seglar se
              presentan a una Fraternidad local, cuyo Consejo decide la
              aceptación de los nuevos hermanos[36]. La inserción se realiza
              mediante un tiempo de iniciación, un tiempo de formación de al
              menos, un año y la Profesión de la Regla[37][38]. En este
              itinerario gradual está comprometida toda la Fraternidad en su
              estilo de vida. Por lo que se refiere a la edad para la Profesión,
              y al signo distintivo franciscanos39, procédase según los
              Estatutos. La Profesión es, de por sí, un compromiso perpetuo[39].
              Los hermanos que se encuentren en dificultades particulares,
              tratarán sus problemas en fraterno diálogo con el Consejo. La
              separación o definitiva dimisión de la Orden, si fuere necesaria,
              es un acto que compete al Consejo de la Fraternidad, en
              conformidad con las Constituciones[40].
            </p>
            <p>
              <strong>24.</strong>
              <br />
            </p>
            <p>
              Para incrementar la comunión entre los miembros, el Consejo
              organice reuniones periódicas y encuentros frecuentes, incluso con
              otros grupos franciscanos, especialmente de jóvenes, adoptando los
              medios más adecuados para el crecimiento en la vida franciscana y
              eclesial, estimulando a todos a la vida de Fraternidad42. Esta
              comunión se prolonga con los hermanos difuntos, ofreciendo
              sufragios por sus almas[41].
            </p>
            <p>
              <strong>25.</strong>
              <br />
            </p>
            <p>
              Todos los hermanos y hermanas ofrezcan una contribución
              proporcionada a las propias posibilidades, para sufragar los
              gastos necesarios de la vida de la Fraternidad o para obras de
              culto, de apostolado y de caridad. Las Fraternidades locales
              contribuyan al pago de los gastos de los Consejos de las
              Fraternidades de nivel superior[42].
            </p>
            <p>
              <strong>26.</strong>
              <br />
            </p>
            <p>
              Como signo concreto de comunión y de corresponsabilidad, los
              Consejos de los diferentes niveles, de acuerdo con las
              Constituciones, pedirán religiosos idóneos y preparados para la
              asistencia espiritual a los Superiores de las cuatro Familias
              religiosas franciscanas, a las cuales, desde siglos, está unida la
              Fraternidad Seglar. Para fomentar la fidelidad al carisma y la
              observancia de la Regla, y para recibir mayor ayuda en la vida de
              fraternidad, el Ministro o Presidente, de acuerdo con el Consejo,
              sea solícito en pedir periódicamente a los Superiores religiosos
              competentes[43] la visita pastoral y a los responsables del nivel
              superior la visita fraterna, según las Constituciones.
            </p>
            <p className="doc-content__fecha">
              “Y todo el que guarde estas cosas, sea colmado en el cielo de la
              bendición del altísimo Padre, y sea colmado en la tierra de la
              bendición del amado Hijo con el Espíritu Paráclito...”
            </p>
            <p>(Bendición de San Francisco, del Testamento)</p>
            <p>
              [1] Llamada también Fraternidad seglar franciscana, T.O.F. o
              Tercera Orden Franciscana.
              <br />
              [2] Lumen Gentium 43.
              <br />
              [3] Pío XII, 1.7.1956, Discurso a los Terciarios I.
              <br />
              [4] Apostolicam Actuositatem 4,8.
              <br />
              [5] Can. 702.1. ahora: Can. 314.
              <br />
              [6] Celano 18, 115.
              <br />
              [7] Jn 3,16; 10,10, 14,6.
              <br />
              [8] Apostolicam Actuositatem 30,8.
              <br />
              [9] Testamento 10.
              <br />
              [10] Pablo VI, 19.5.1971, Discurso a los Terciarios III.
              <br />
              [11] Memoriale propositi.
              <br />
              [12] Lumen Gentium 8; Unitatis Redintegratio 4; Paenitemini,
              Pream.
              <br />
              [13] Presbiterorum Ordinis 18,2.
              <br />
              [14] Apostolicam Actuositatem 4,1-3. <br />
              [15] Celano 198.
              <br />
              [16] Lumen Gentium 67; Apostolicam Actuositatem 4.
              <br />
              [17] Lumen Gentium 41.
              <br />
              [18] Lumen Gentium 42,2.
              <br />
              [19] 19 2 Carta a todos los fieles 5.
              <br />
              [20] Rm 8,17; Lumen Gentium 7,4.
              <br />
              [21] Admoniciones 16; 2 Carta a todos los fieles 69.
              <br />
              [22] Rm 8,29.
              <br />
              [23] Celano 85; 2 Carta a todos los fieles 26; Regla no bulada
              7,15.
              <br />
              [24] Regla no bulada 9,3; Mt 25,40.
              <br />
              [25] Lumen Gentium 31; Gaudium et Spes 93.
              <br />
              [26] Apostolicam Actuositatem 14.
              <br />
              [27] Gaudium et Spes 67,2; Regla no bulada 7,4; Regla bulada 5,1.
              <br />
              [28] 28 Regla de León XIII II,8.
              <br />
              [29] Lumen Gentium 41,5; Apostolicam Actuositatem 30,2.3.
              <br />
              [30] Cántico de las Criaturas 4.
              <br />
              [31] Regla de León XIII II,9; Tres Compañeros 14,58.
              <br />
              [32] Admoniciones 21; Regla no bulada 7,15.
              <br />
              [33] Gaudium et Spes 78,1-2.
              <br />
              [34] Can. 687. ahora: Can. 309. 35 Can. 697. ahora: Can. 309.
              <br />
              [35] Pío XII, 1.7.1956, Discurso a los Terciarios 3.
              <br />
              [36] Can. 694. ahora: Can. 307.
              <br />
              [37] Memoriale propositi 29-30.
              <br />
              [38] Celano 22.
              <br />
              [39] Memoriale propositi 31.
              <br />
              [40] Can. 696. ahora: Can. 308. 42 Can. 697. ahora: Can. 309.
              <br />
              [41] Memoriale propositi 23.
              <br />
              [42] Memoriale propositi 20.
              <br />
              [43] 45 Regla de Nicolás IV, cap. 16.
            </p>
          </div>
        </details>
      </section>
    </div>
  );
}

export default NuestraRegla;
