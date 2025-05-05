import React from "react";
import "../OrdenFranciscana/NuestrosSantos/PageOF.css";
import heroImage from "../../assets/images/ofs-grupo.jpg";

function Historia() {
  return (
    <>
      <div className="saint-hero">
        <img className="saint-hero__img" src={heroImage} alt="Historia OFS" />
        <div className="saint-hero__text">
          <h1>Historia de la OFS</h1>
          <br />
          <br />
          <p>
            La orden franciscana seglar Santa Rosa de Viterbo desde sus
            comienzos su misión fue y es la religiosa espiritual de buscar la
            santificación de las almas, la asistencia a los enfermos y la ayuda
            los hermanos más necesitados.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <section className="saint-text">
        <p>
          La orden franciscana seglar Santa Rosa de Viterbo desde sus comienzos
          su misión fue y es la religiosa espiritual de buscar la santificación
          de las almas, la asistencia a los enfermos y la ayuda los hermanos más
          necesitados. Seguimos las huellas, enseñanzas y vivencias de nuestro
          Seráfico Padre Francisco. En el convento y templo de San Francisco de
          Santiago del Estero, tuvo su asiento y desde el año (probablemente
          años cercano a la llegada de los frailes a Santiago del Estero) tiene
          su solar en la calle 9 de julio 574 de esta ciudad.
        </p>
        <p>
          La orden de frailes menores llegó, a esta madre de ciudades, en el
          1566 y sobre sus orígenes históricos (documentos) nada se ha
          conservado, ya que el lugar donde se emplazaba el convento siempre se
          vio afectado por las continuas inundaciones del Río Dulce, por lo que
          la documentación existente fue inevitable.
        </p>
        <p>
          El Ing. Baltasar Olaechea y Alcorta, estudioso de la historia
          santiagueña, halló un documento del año 1762 que indicaba su
          existencia anterior es decir siglo XVIII lo que le llevó a firmar que
          sin ninguna duda ya funcionaba y estaba afirmada la Tercera Orden
          franciscana en el siglo anterior (años 1600). Largos años de
          existencia de la Orden se han perpetuado en el tiempo hasta nuestros
          días.
        </p>
        <p>
          Con el paso de los años, la educación católica se haría presente de la
          mano de los seglares santiagueños, es así que se logró fundar y
          construir, a principio de 1900 una Escuela Taller en la ciudad de la
          Banda además de fundar una escuela católica en la ciudad de Clodomira
          llamada Santa Rosa de Viterbo. En Fernández se fundó y construyó la
          escuela San Francisco de Asís y en Estación Taboada se inauguró además
          la escuela católica San Roque, todas estas instituciones escolares
          fueron transferidas al Consejo de Educación de la Provincia, dejando
          en cada una de ellas la impronta franciscana.
        </p>
        <p>
          La salud también fue uno de los pilares fundamentales, de esta querida
          Orden. Un temprano antecedente a nuestro Servicio Médico Asistencial
          actual, indica que, en el año 1905, se abrió un consultorio médico
          gratuito destinado a las personas carecientes. En 1934 la hermana
          terciaria franciscana Francisca Beltrán Alcorta de Argañaraz dejará en
          su testamento todo lo necesario para la construcción de un Hospital
          para combatir la tuberculosis lo que sirvió para que años después
          (1964) se levantase el hospital frente al Parque Aguirre, retornando
          la OFS al objetivo espiritual y sanitario de la asistencia a los más
          necesitados. Años de esfuerzo, voluntad y algunos contratiempos
          permitieron llevar adelante esta obra social – humanitaria. Luego de
          intensa labor de los seglares y ante la imposibilidad de su atención
          se firmó un contrato de locación y convenio con un grupo de médicos
          que lo transformaron en un sanatorio privado con el compromiso de
          atender a a los enfermos de escasos recursos y sin cobertura social
          que se mantiene hasta la fecha. Lleva adelante el Servicio Medico
          Asistencial "TAU", que en el país es el único en su tipo.
        </p>
        <p>
          Levantar capillas también fue uno de los objetivos la Tercera Orden,
          es así que en el año 1969 ayuda económicamente para facilitar la
          construcción de la Capilla Virgen del valle del barrio Puerto Nuevo
          hoy denominada Capilla San Antonio. En el barrio Rio Dulce se
          construyó un salón capilla que luego fue entregado al Obispado de
          Santiago del Estero. En 1983 se ayudó a la construcción de la Capilla
          María reina Inmaculada del barrio Parque Aguirre. En 1992 se construyó
          la Capilla San Francisco de Asís de La Bajada (Dpto. Banda). La ayuda
          se extendió a lo misional, espiritual y pastoral que fueron
          fortaleciendo a la Iglesia Santiagueña y Parroquial.
        </p>
        <p>
          En la actualidad el Servicio Médico Asistencial auxilia a cerca de 600
          hermanos carenciados, brindándoles la atención médica adecuada. La
          ayuda a Cáritas y a la Pía Unión Pan de los Pobres nos permite también
          continuar, con uno de los objetivos, la ayuda a los más necesitados.
        </p>
        <p>
          La permanente tarea de llevar el mensaje de Dios sigue adelante con la
          planificación y desarrollo de misiones dentro y fuera del ámbito
          parroquial como así también siguiendo un camino sinodal en las
          Misiones Nacionales OFS que se llevan a cabo a lo largo y ancho de
          Argentina.
        </p>
        <p>
          Siempre teniendo presente lo que nos dijo Nuestro Padre Francisco:
          <strong>
            “Hermanos comencemos , porque poco o nada hemos hecho”.
          </strong>
        </p>
        <br />
        <br />
      </section>
    </>
  );
}

export default Historia;
