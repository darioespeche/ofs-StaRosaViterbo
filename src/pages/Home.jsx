import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Importa tus assets
import logoSvg from "../assets/images/logo-ofs.jpg";
import quienesSomos from "../assets/images/ofs-grupo4.jpg";
import historia from "../assets/images/ofs-grupo.jpg";
import redFranciscana from "../assets/images/ofs-grupo2.jpg";

function Home() {
  // Opcional: configuración slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
  };

  return (
    <div className="home-page">
      {/* Hero: logo + texto */}
      <section className="home-hero-content">
        <div className="home-hero-content__logo">
          <img src={logoSvg} alt="Orden Franciscana Seglar" />
        </div>
        <div className="home-hero-content__text">
          <h1>Bienvenidos a la OFS Santa Rosa de Viterbo</h1>
          <p>
            Somos hombres y mujeres que, tras las huellas de San Francisco de
            Asís, formamos la gran Familia Franciscana en Santiago del Estero.
            <br />
            Vení a conocernos, compartir nuestra fe y servicio en la Iglesia y
            en la sociedad.
          </p>
        </div>
      </section>

      {/* Feature cards */}
      <section className="home-features">
        <div className="home-feature">
          <img src={quienesSomos} alt="Quiénes Somos" />
          <h3>Quiénes Somos</h3>
          <p>
            Conoce nuestra misión, carisma y estilo de vida según la Regla de la
            OFS.
          </p>
          <Link to="/orden-franciscana/quienes-somos" className="btn">
            Descubrir
          </Link>
        </div>
        <div className="home-feature">
          <img src={historia} alt="Historia" />
          <h3>Historia</h3>
          <p>
            Un recorrido por nuestros orígenes, los hitos de San Francisco y
            Santa Clara.
          </p>
          <Link to="/orden-franciscana/historia" className="btn">
            Conocer más
          </Link>
        </div>
        <div className="home-feature">
          <img src={redFranciscana} alt="Red Franciscana" />
          <h3>Red Franciscana</h3>
          <p>
            Encuentra tu fraternidad local, participa en la vida comunitaria y
            apostólica.
          </p>
          <Link to="/orden-franciscana/red-franciscana" className="btn">
            Visitar
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
