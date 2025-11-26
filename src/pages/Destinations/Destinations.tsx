// src/pages/Destinations/Destinations.tsx

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { fetchAllDestinations, type Destination } from '../../services/api';

import Loading from '../../components/Loading/Loading';

import './Destinations.css';
 
function Destinations() {

  const [destinations, setDestinations] = useState<Destination[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
 
  useEffect(() => {

    const loadDestinations = async () => {

      try {

        setLoading(true);

        const data = await fetchAllDestinations();

        setDestinations(data);

      } catch (err) {

        setError(err instanceof Error ? err.message : 'Error cargando destinos');

      } finally {

        setLoading(false);

      }

    };
 
    loadDestinations();

  }, []);
 
  if (loading) return <Loading />;
 
  if (error) {

    return (
<div className="destinations-container">
<div className="error-message">
<h2>❌ Error</h2>
<p>{error}</p>
<button onClick={() => window.location.reload()} className="retry-btn">

            Reintentar
</button>
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
<div className="destinations-container">
<div className="destinations-header">
<h1>🌎 Explora Nuestros Destinos</h1>
<p>Descubre los mejores lugares para tu próxima aventura</p>
<p className="destinations-count">📍 {destinations.length} destinos disponibles</p>
</div>
 
      <div className="destinations-grid">

        {destinations.map(destination => (
<div key={destination.id} className="destination-card">
<div className="destination-image">
<img src={destination.image} alt={destination.name} />
</div>
<div className="destination-info">
<h3>{destination.name}</h3>
<p className="destination-code">Código: {destination.code}</p>
<p className="destination-description">{destination.description}</p>
<div className="destination-price">
<span className="price-label">Desde</span>
<span className="price">{formatPrice(destination.averagePrice, destination.currency)}</span>
</div>
 
              <Link to={`/destination/${destination.id}`} className="view-destination-btn">

                Ver destino →
</Link>
</div>
</div>

        ))}
</div>
</div>

  );

}
 
export default Destinations;
 