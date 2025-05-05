// src/components/NavBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logoSmall from "../assets/images/logo-ofs.jpg"; // tu logo pequeñito

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo a la izquierda */}
      <div className="navbar__logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={logoSmall} alt="OFS Santa Rosa de Viterbo" />
        </Link>
      </div>

      {/* botón hamburger (visible en móvil) */}
      <div
        className="navbar__toggle"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        ☰
      </div>

      {/* menú principal */}
      <ul className={`navbar__menu${menuOpen ? " navbar__menu--open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Inicio
          </Link>
        </li>

        <li className="has-submenu">
          <span>Orden Franciscana ▾</span>
          <ul>
            <li>
              <Link
                to="/orden-franciscana/quienes-somos"
                onClick={() => setMenuOpen(false)}
              >
                Quiénes Somos
              </Link>
            </li>
            <li>
              <Link
                to="/orden-franciscana/historia"
                onClick={() => setMenuOpen(false)}
              >
                Historia
              </Link>
            </li>
            <li>
              <Link
                to="/orden-franciscana/red-franciscana"
                onClick={() => setMenuOpen(false)}
              >
                Red Franciscana
              </Link>
            </li>
            <li className="has-submenu">
              <span>Nuestros Santos ▾</span>
              <ul>
                <li>
                  <Link
                    to="/orden-franciscana/nuestros-santos/san-francisco"
                    onClick={() => setMenuOpen(false)}
                  >
                    San Francisco
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orden-franciscana/nuestros-santos/santa-clara"
                    onClick={() => setMenuOpen(false)}
                  >
                    Santa Clara
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orden-franciscana/nuestros-santos/santa-isabel"
                    onClick={() => setMenuOpen(false)}
                  >
                    Santa Isabel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orden-franciscana/nuestros-santos/santa-rosa"
                    onClick={() => setMenuOpen(false)}
                  >
                    Santa Rosa
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="has-submenu">
          <span>Documentos ▾</span>
          <ul>
            <li>
              <Link
                to="/documentos/nuestra-regla"
                onClick={() => setMenuOpen(false)}
              >
                Nuestra Regla
              </Link>
            </li>
            <li>
              <Link
                to="/documentos/nuestras-constituciones"
                onClick={() => setMenuOpen(false)}
              >
                Nuestras Constituciones
              </Link>
            </li>
            <li>
              <Link
                to="/documentos/nuestro-estatuto-nacional"
                onClick={() => setMenuOpen(false)}
              >
                Nuestro Estatuto Nacional
              </Link>
            </li>
          </ul>
        </li>

        <li className="has-submenu">
          <span>Formación ▾</span>
          <ul>
            <li>
              <Link to="/formacion" onClick={() => setMenuOpen(false)}>
                Formación OFS
              </Link>
            </li>
            <li>
              <Link to="/JPIC" onClick={() => setMenuOpen(false)}>
                JPIC
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/publicaciones" onClick={() => setMenuOpen(false)}>
            Publicaciones
          </Link>
        </li>
        <li>
          <Link to="/biblioteca" onClick={() => setMenuOpen(false)}>
            Biblioteca
          </Link>
        </li>
      </ul>
    </nav>
  );
}
