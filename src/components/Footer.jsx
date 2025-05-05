// Footer.jsx
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__col">
          <h4>Contáctanos</h4>
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:osfviterbosgo@gmail.com">osfviterbosgo@gmail.com</a>
          </p>
        </div>
        <div className="footer__col">
          <h4>Síguenos</h4>
          <p>
            <a href="https://www.facebook.com/share/16btZG4MVN/">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/ofs-santiago">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/OFS_Santiago">
              <FaTwitter />
            </a>
            {/* añade más iconos si quieres */}
          </p>
        </div>
        <div className="footer__col">
          <h4>Enlaces útiles</h4>
          <ul>
            <li>
              <Link to="/orden-franciscana/quienes-somos">Quiénes somos</Link>
            </li>
            <li>
              <Link to="/orden-franciscana/historia">Historia</Link>
            </li>
            <li>
              <Link to="/orden-franciscana/red-franciscana">
                Red Franciscana
              </Link>
            </li>
            <li>
              <Link to="/formacion">Formacion</Link>
            </li>
            <li>
              <Link to="/publicaciones">Publicaciones</Link>
            </li>
            <li>
              <Link to="/biblioteca">Biblioteca</Link>
            </li>
            {/* …otros enlaces */}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        © {new Date().getFullYear()} Orden Franciscana Seglar – Santiago del
        Estero
      </div>
    </footer>
  );
}

export default Footer;
