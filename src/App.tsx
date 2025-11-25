import './App.css'

function App() {
  return (
    <>
      <div className="promo-banner">
        ✈️ ¡Acumula 25% más de millas en tus vuelos!{' '}
        <a href="#">Suscríbete a la promo</a> y compra solo hasta el 6 de noviembre.
        <button
          className="close-banner"
          onClick={(e) => (e.currentTarget.parentElement!.style.display = 'none')}
        ></button>
      </div>

      <div className="top-bar">
        <span>💬 Vianca Chat</span>
        <span>🌐 Español</span>
        <span>📍 Colombia (COP)</span>
      </div>

      <header>
        <nav>
          <div className="logo">avianca</div>
          <ul className="nav-links">
            <li>
              <a href="#">
                <img src="Img/logoavianca-newbrand-rojo-1.svg" alt="" />
              </a>
            </li>
            <li><a href="#">Reservar</a></li>
            <li><a href="#">Ofertas y destinos</a></li>
            <li><a href="#">Tu reserva</a></li>
            <li><a href="#" className="check-in-btn">Check-in</a></li>
            <li><a href="#">Información y ayuda</a></li>
            <li><a href="#">Lifemiles</a></li>
            <li><a href="#" className="cuenta-btn">👤 Cuenta Lifemiles</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="search-container">
          <div className="trip-options">
            <div className="radio-option">
              <input type="radio" name="trip" id="roundtrip" defaultChecked />
              <label htmlFor="roundtrip">Ida y vuelta</label>
            </div>
            <div className="radio-option">
              <input type="radio" name="trip" id="oneway" />
              <label htmlFor="oneway">Solo ida</label>
            </div>
            <button
              style={{
                background: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '25px',
                cursor: 'pointer',
              }}
            >
              Comparar con millas 🔗
            </button>
          </div>

          <div className="search-box">
            <form className="search-fields">
              <div className="field-group">
                <label>Origen</label>
                <input type="text" defaultValue="Bogotá (BOG)" placeholder="Origen" />
              </div>
              <div className="field-group">
                <label>Destino</label>
                <input type="text" placeholder="Destino" />
              </div>
              <div className="field-group">
                <label>Ida</label>
                <input type="date" defaultValue="2025-11-04" />
              </div>
              <div className="field-group">
                <label>Vuelta</label>
                <input type="date" defaultValue="2025-11-07" />
              </div>
              <div className="field-group">
                <label>Pasajeros</label>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <button type="submit" className="search-btn">Buscar</button>
            </form>
          </div>
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-content">
          <div className="promo-image">
            <img src="/Img/Header.jpg" alt="Mujer en la playa con maleta" />
            <div className="promo-text-overlay">
              <span className="acumula">Acumula</span>
              <span className="percentage">25%</span>
              <span className="de-millas">más de millas</span>
            </div>
          </div>
          <div className="promo-info">
            <h2>¡Entre más viajes,<br />más ganas!</h2>
            <p>Acumula 25% más de millas comprando tu vuelo en cualquier tarifa.</p>
            <button className="reserve-btn">Reserva ya</button>
          </div>
        </div>
      </section>

      <section className="offers-section">
        <div className="offers-container">
          <div className="offers-header">
            <h2>Ofertas desde <span>Bogotá ▼</span></h2>
          </div>
          <div className="offers-grid">
            <div className="offer-card">
              <div className="offer-image" style={{ backgroundImage: "url('/Img/card-destino-cali.webp')" }}></div>
              <div className="offer-details">
                <h3>Cali</h3>
                <p>Por trayecto desde</p>
                <div className="offer-price">
                  <span className="badge">Acumula millas</span>
                  <span className="price">COP 79.100</span>
                </div>
              </div>
            </div>

            <div className="offer-card">
              <div className="offer-image" style={{ backgroundImage: "url('/Img/medellin-700x263-1.webp')" }}></div>
              <div className="offer-details">
                <h3>Medellín</h3>
                <p>Por trayecto desde</p>
                <div className="offer-price">
                  <span className="badge">Acumula millas</span>
                  <span className="price">COP 80.500</span>
                </div>
              </div>
            </div>

            <div className="offer-card">
              <div className="offer-image" style={{ backgroundImage: "url('/Img/vuelos-a-pereira-termales-santa-rosa-de-cabal.webp')" }}></div>
              <div className="offer-details">
                <h3>Pereira</h3>
                <p>Por trayecto desde</p>
                <div className="offer-price">
                  <span className="badge">Acumula millas</span>
                  <span className="price">COP 102.400</span>
                </div>
              </div>
            </div>
          </div>

          <div className="discover-link">
            <a href="#">Descubrir más ofertas →</a>
          </div>
        </div>
      </section>

      {/* El resto del HTML puedes copiar igual siguiendo este mismo formato */}
    </>
  )
}

export default App
