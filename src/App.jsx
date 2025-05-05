import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import OrdenFranciscana from "./pages/OrdenFranciscana/RedFranciscana";
import QuienesSomos from "./pages/OrdenFranciscana/QuienesSomos";
import Historia from "./pages/OrdenFranciscana/Historia";
import SanFrancisco from "./pages/OrdenFranciscana/NuestrosSantos/SanFrancisco";
import SantaClara from "./pages/OrdenFranciscana/NuestrosSantos/SantaClara";
import SantaIsabel from "./pages/OrdenFranciscana/NuestrosSantos/SantaIsabel";
import SantaRosa from "./pages/OrdenFranciscana/NuestrosSantos/SantaRosa";

import Documentos from "./pages/Documentos/Documentos";
import NuestraRegla from "./pages/Documentos/NuestraRegla";
import NuestrasConstituciones from "./pages/Documentos/NuestrasConstituciones";
import NuestroEstatutoNacional from "./pages/Documentos/NuestroEstatutoNacional";

import Formacion from "./pages/Formacion";
import Jpic from "./pages/Jpic";
import Publicaciones from "./pages/Publicaciones";
import Biblioteca from "./pages/Biblioteca";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/orden-franciscana" element={<OrdenFranciscana />} />
          <Route
            path="/orden-franciscana/red-franciscana"
            element={<OrdenFranciscana />}
          />
          <Route
            path="/orden-franciscana/quienes-somos"
            element={<QuienesSomos />}
          />
          <Route path="/orden-franciscana/historia" element={<Historia />} />

          <Route
            path="/orden-franciscana/nuestros-santos/san-francisco"
            element={<SanFrancisco />}
          />
          <Route
            path="/orden-franciscana/nuestros-santos/santa-clara"
            element={<SantaClara />}
          />
          <Route
            path="/orden-franciscana/nuestros-santos/santa-isabel"
            element={<SantaIsabel />}
          />
          <Route
            path="/orden-franciscana/nuestros-santos/santa-rosa"
            element={<SantaRosa />}
          />

          <Route path="/documentos" element={<Documentos />} />
          <Route path="/documentos/nuestra-regla" element={<NuestraRegla />} />
          <Route
            path="/documentos/nuestras-constituciones"
            element={<NuestrasConstituciones />}
          />
          <Route
            path="/documentos/nuestro-estatuto-nacional"
            element={<NuestroEstatutoNacional />}
          />

          <Route path="/formacion" element={<Formacion />} />
          <Route path="/Jpic" element={<Jpic />} />
          <Route path="/publicaciones" element={<Publicaciones />} />
          <Route path="/biblioteca" element={<Biblioteca />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
// src/App.jsx
// Import the necessary libraries and components.
