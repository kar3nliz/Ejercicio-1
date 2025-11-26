// src/components/FlightCard/FlightCard.tsx

import { Link } from 'react-router-dom';

import type { Flight } from '../../services/api';

import './FlightCard.css';
 
interface FlightCardProps {

  flight: Flight;

}
 
function FlightCard({ flight }: FlightCardProps) {

  const formatPrice = (price: number, currency: string) => {

    return new Intl.NumberFormat('es-CO', {

      style: 'currency',

      currency: currency,

      minimumFractionDigits: 0

    }).format(price);

  };
 
  return (
<div className="flight-card">
<div className="flight-image">
<img src={flight.image} alt={flight.destination} />

        {flight.acumulatesMiles && (
<span className="miles-badge">⭐ Acumula millas</span>

        )}
</div>
<div className="flight-info">
<div className="flight-route">
<h3>{flight.destination}</h3>
<p className="flight-number">{flight.flightNumber}</p>
</div>
<div className="flight-details">
<div className="detail-item">
<span className="label">🛫 Salida:</span>
<span className="value">{flight.departureTime}</span>
</div>
<div className="detail-item">
<span className="label">🛬 Llegada:</span>
<span className="value">{flight.arrivalTime}</span>
</div>
<div className="detail-item">
<span className="label">⏱️ Duración:</span>
<span className="value">{flight.duration}</span>
</div>
<div className="detail-item">
<span className="label">💺 Disponibles:</span>
<span className="value">{flight.availableSeats} asientos</span>
</div>
</div>
 
        <div className="flight-price">
<p className="price-label">Por trayecto desde</p>
<p className="price">{formatPrice(flight.price, flight.currency)}</p>
</div>
 
        <Link to={`/flight/${flight.id}`} className="view-details-btn">

          Ver detalles y reservar
</Link>
</div>
</div>

  );

}
 
export default FlightCard;
 