// src/App.tsx - ACTUALIZADO CON API

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home/Home';

import Flights from './pages/Flights/Flights';

import FlightDetail from './pages/FlightDetail/FlightDetail';

import Destinations from './pages/Destinations/Destinations';

import DestinationDetail from './pages/DestinationDetail/DestinationDetail';

import Services from './pages/Services/Services';

import './App.css';
 
function App() {

  return (
<Router>
<div className="App">

        {/* Banner Promocional */}
<div className="promo-banner">

          ✈️ ¡Acumula 25% más de millas en tus vuelos!{' '}
<a href="#">Suscríbete a la promo</a> y compra solo hasta el 6 de noviembre.
<button

            className="close-banner"

            onClick={(e) => (e.currentTarget.parentElement!.style.display = 'none')}
>×</button>
</div>
 
        {/* Barra Superior */}
<div className="top-bar">
<span>💬 Vianca Chat</span>
<span>🌐 Español</span>
<span>📍 Colombia (COP)</span>
</div>
 
        {/* Header/Navegación */}
<header>
<nav>
<div className="logo">
<Link to="/">
<img src="/Img/logoavianca-newbrand-rojo-1.svg" alt="Avianca" style={{ height: '40px' }} />
</Link>
</div>
<ul className="nav-links">
<li><Link to="/">Inicio</Link></li>
<li><Link to="/flights">Buscar Vuelos</Link></li>
<li><Link to="/destinations">Ver Destinos</Link></li>
<li><Link to="/services">Servicios</Link></li>
<li><a href="#" className="check-in-btn">Check-in</a></li>
<li><a href="#">Información y ayuda</a></li>
<li><a href="#">Lifemiles</a></li>
<li><a href="#" className="cuenta-btn">👤 Cuenta Lifemiles</a></li>
</ul>
</nav>
</header>
 
        {/* Rutas */}
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/flights" element={<Flights />} />
<Route path="/flight/:id" element={<FlightDetail />} />
<Route path="/destinations" element={<Destinations />} />
<Route path="/destination/:id" element={<DestinationDetail />} />
<Route path="/services" element={<Services />} />
</Routes>
</main>
 
        {/* Footer */}
<footer className="avianca-footer">
<div className="footer-content">
<div className="footer-section">
<h4>Avianca</h4>
<ul>
<li><a href="#">Sobre nosotros</a></li>
<li><a href="#">Trabaja con nosotros</a></li>
<li><a href="#">Sala de prensa</a></li>
</ul>
</div>
<div className="footer-section">
<h4>Ayuda</h4>
<ul>
<li><a href="#">Centro de ayuda</a></li>
<li><a href="#">Contáctanos</a></li>
<li><a href="#">PQRs</a></li>
</ul>
</div>
<div className="footer-section">
<h4>Legal</h4>
<ul>
<li><a href="#">Términos y condiciones</a></li>
<li><a href="#">Política de privacidad</a></li>
<li><a href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="footer-bottom">
<p>© 2025 Avianca. Todos los derechos reservados.</p>
</div>
</footer>
</div>
</Router>

  );

}
 
export default App;
 