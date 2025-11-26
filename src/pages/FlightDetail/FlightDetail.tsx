// src/pages/FlightDetail/FlightDetail.tsx

import { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';

import { fetchFlightById, type Flight } from '../../services/api';

import Loading from '../../components/Loading/Loading';

import './FlightDetail.css';
 
function FlightDetail() {

  const { id } = useParams<{ id: string }>();

  const [flight, setFlight] = useState<Flight | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
 
  useEffect(() => {

    const loadFlight = async () => {

      if (!id) return;

      try {

        setLoading(true);

        setError(null);

        const data = await fetchFlightById(id);

        setFlight(data);

      } catch (err) {

        setError(err instanceof Error ? err.message : 'Error cargando el vuelo');

      } finally {

        setLoading(false);

      }

    };
 
    loadFlight();

  }, [id]);
 
  if (loading) return <Loading />;
 
  if (error || !flight) {

    return (
<div className="flight-detail-container">
<div className="error-message">
<h2>❌ {error || 'Vuelo no encontrado'}</h2>
<Link to="/flights" className="back-link">

            ← Volver a vuelos
</Link>
</div>
</div>

    );

  }
 
  const formatPrice = (price: number, currency: string) => {

    return new Intl.NumberFormat('es-CO', {

      style: 'currency',

      currency: currency,

      minimumFractionDigits: 0

    }).format(price);

  };
 
  return (
<div className="flight-detail-container">
<Link to="/flights" className="back-link">

        ← Volver a vuelos
</Link>
 
      <div className="flight-detail-content">
<div className="flight-image-large">
<img src={flight.image} alt={flight.destination} />

          {flight.acumulatesMiles && (
<div className="miles-overlay">
<span>⭐ Acumula millas con este vuelo</span>
</div>

          )}
</div>
 
        <div className="flight-main-info">
<div className="flight-title-section">
<h1>{flight.origin} → {flight.destination}</h1>
<p className="flight-number-large">{flight.flightNumber} - {flight.airline}</p>
</div>
 
          <div className="flight-info-card">
<h3>📋 Información del Vuelo</h3>
<div className="info-grid">
<div className="info-item">
<span className="info-label">🛫 Hora de salida</span>
<span className="info-value">{flight.departureTime}</span>
</div>
 
              <div className="info-item">
<span className="info-label">🛬 Hora de llegada</span>
<span className="info-value">{flight.arrivalTime}</span>
</div>
 
              <div className="info-item">
<span className="info-label">⏱️ Duración del vuelo</span>
<span className="info-value">{flight.duration}</span>
</div>
 
              <div className="info-item">
<span className="info-label">💺 Asientos disponibles</span>
<span className="info-value">{flight.availableSeats}</span>
</div>
 
              <div className="info-item">
<span className="info-label">✈️ Aerolínea</span>
<span className="info-value">{flight.airline}</span>
</div>
 
              <div className="info-item">
<span className="info-label">💰 Precio por trayecto</span>
<span className="info-value price-highlight">

                  {formatPrice(flight.price, flight.currency)}
</span>
</div>
</div>
</div>
 
          <div className="action-buttons">
<button className="reserve-btn-large">

              🎫 Reservar Ahora
</button>
<button className="miles-btn">

              ⭐ Comprar con Millas
</button>
</div>
 
          <div className="additional-services">
<h3>🎁 Servicios Adicionales</h3>
<ul>
<li>✓ Check-in online 24 horas antes</li>
<li>✓ Selección de asientos</li>
<li>✓ Equipaje de mano incluido</li>
<li>✓ Entretenimiento a bordo</li>
<li>✓ Snacks y bebidas</li>
</ul>
</div>
</div>
</div>
</div>

  );

}
 
export default FlightDetail;
 