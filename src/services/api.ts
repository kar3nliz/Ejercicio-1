// src/services/api.ts
 
// API simulada de Avianca - Adaptada del proyecto Countries

export interface Flight {

  id: string;

  origin: string;

  destination: string;

  price: number;

  currency: string;

  duration: string;

  airline: string;

  flightNumber: string;

  departureTime: string;

  arrivalTime: string;

  availableSeats: number;

  image: string;

  acumulatesMiles: boolean;

}

export interface Destination {

  id: string;

  name: string;

  city: string;

  country: string;

  code: string;

  description: string;

  image: string;

  popularAttractions: string[];

  bestTimeToVisit: string;

  averagePrice: number;

  currency: string;

}

export interface Service {

  id: string;

  name: string;

  description: string;

  icon: string;

  category: 'checkin' | 'luggage' | 'entertainment' | 'food' | 'lounge' | 'miles';

  available: boolean;

}

// ---------------------------

//  DATOS DE VUELOS

// ---------------------------
 
const FLIGHTS_DATA: Flight[] = [

  {

    id: 'AV001',

    origin: 'Bogotá (BOG)',

    destination: 'Cali (CLO)',

    price: 79100,

    currency: 'COP',

    duration: '1h 15m',

    airline: 'Avianca',

    flightNumber: 'AV 8501',

    departureTime: '08:30',

    arrivalTime: '09:45',

    availableSeats: 45,

    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Cali%2C_Colombia_Skyline.jpg',

    acumulatesMiles: true

  },

  {

    id: 'AV002',

    origin: 'Bogotá (BOG)',

    destination: 'Medellín (MDE)',

    price: 80500,

    currency: 'COP',

    duration: '1h 10m',

    airline: 'Avianca',

    flightNumber: 'AV 8201',

    departureTime: '10:15',

    arrivalTime: '11:25',

    availableSeats: 32,

    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Medellin_-_panoramica.jpg',

    acumulatesMiles: true

  },

  {

    id: 'AV003',

    origin: 'Bogotá (BOG)',

    destination: 'Pereira (PEI)',

    price: 102400,

    currency: 'COP',

    duration: '1h 05m',

    airline: 'Avianca',

    flightNumber: 'AV 8301',

    departureTime: '14:45',

    arrivalTime: '15:50',

    availableSeats: 28,

    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Pereira_skyline.jpg',

    acumulatesMiles: true

  },

  {

    id: 'AV004',

    origin: 'Bogotá (BOG)',

    destination: 'Cartagena (CTG)',

    price: 156300,

    currency: 'COP',

    duration: '1h 40m',

    airline: 'Avianca',

    flightNumber: 'AV 8401',

    departureTime: '06:00',

    arrivalTime: '07:40',

    availableSeats: 18,

    image: 'https://plazabocagrande.com/wp-content/uploads/2024/04/cartagena.jpeg',

    acumulatesMiles: true

  },

  {

    id: 'AV005',

    origin: 'Bogotá (BOG)',

    destination: 'Santa Marta (SMR)',

    price: 145800,

    currency: 'COP',

    duration: '1h 35m',

    airline: 'Avianca',

    flightNumber: 'AV 8601',

    departureTime: '12:30',

    arrivalTime: '14:05',

    availableSeats: 22,

    image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Santa_Marta_Beach.jpg',

    acumulatesMiles: true

  },

  {

    id: 'AV006',

    origin: 'Bogotá (BOG)',

    destination: 'Barranquilla (BAQ)',

    price: 138900,

    currency: 'COP',

    duration: '1h 30m',

    airline: 'Avianca',

    flightNumber: 'AV 8701',

    departureTime: '16:00',

    arrivalTime: '17:30',

    availableSeats: 35,

    image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Barranquilla_City.jpg',

    acumulatesMiles: true

  }

];
 
// ---------------------------

//  DATOS DE DESTINOS

// ---------------------------
 
const DESTINATIONS_DATA: Destination[] = [

  {

    id: 'dest-cali',

    name: 'Cali',

    city: 'Cali',

    country: 'Colombia',

    code: 'CLO',

    description: 'La capital mundial de la salsa, conocida por su vida nocturna y clima cálido.',

    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Cali%2C_Colombia_Skyline.jpg',

    popularAttractions: ['Cristo Rey', 'Cerro de las Tres Cruces', 'Zoológico de Cali', 'Barrio San Antonio'],

    bestTimeToVisit: 'Todo el año',

    averagePrice: 79100,

    currency: 'COP'

  },

  {

    id: 'dest-medellin',

    name: 'Medellín',

    city: 'Medellín',

    country: 'Colombia',

    code: 'MDE',

    description: 'La ciudad de la eterna primavera.',

    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Medellin_-_panoramica.jpg',

    popularAttractions: ['Plaza Botero', 'Parque Arví', 'Comuna 13', 'Jardín Botánico'],

    bestTimeToVisit: 'Diciembre - Marzo',

    averagePrice: 80500,

    currency: 'COP'

  },

  {

    id: 'dest-pereira',

    name: 'Pereira',

    city: 'Pereira',

    country: 'Colombia',

    code: 'PEI',

    description: 'Corazón del eje cafetero.',

    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Pereira_skyline.jpg',

    popularAttractions: ['Termales Santa Rosa', 'Ukumarí', 'Salento'],

    bestTimeToVisit: 'Junio - Septiembre',

    averagePrice: 102400,

    currency: 'COP'

  },

  {

    id: 'dest-cartagena',

    name: 'Cartagena',

    city: 'Cartagena',

    country: 'Colombia',

    code: 'CTG',

    description: 'Ciudad amurallada y playas caribeñas.',

    image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Cartagena_de_Indias%2C_Colombia.jpg',

    popularAttractions: ['Ciudad Amurallada', 'Castillo San Felipe', 'Islas del Rosario'],

    bestTimeToVisit: 'Diciembre - Abril',

    averagePrice: 156300,

    currency: 'COP'

  }

];
 
// ---------------------------

//  SERVICIOS

// ---------------------------
 
const SERVICES_DATA: Service[] = [

  { id: 'srv-checkin', name: 'Check-in Online', description: 'Check-in desde 24h antes', icon: '✈', category: 'checkin', available: true },

  { id: 'srv-luggage', name: 'Equipaje Extra', description: 'Agrega maletas', icon: '🧳', category: 'luggage', available: true },

  { id: 'srv-miles', name: 'Lifemiles', description: 'Acumula millas', icon: '⭐', category: 'miles', available: true },

  { id: 'srv-lounge', name: 'Salas VIP', description: 'Acceso a salas VIP', icon: '👑', category: 'lounge', available: true },

  { id: 'srv-food', name: 'Comidas', description: 'Preselecciona tu comida', icon: '🍽', category: 'food', available: true },

  { id: 'srv-entertainment', name: 'Entretenimiento', description: 'Películas y música', icon: '🎬', category: 'entertainment', available: true }

];
 
 
// ENDPOINTS
 
export const API_ENDPOINTS = {

  ALL_FLIGHTS: '/api/flights',

  FLIGHT_BY_ID: '/api/flights',

  ALL_DESTINATIONS: '/api/destinations',

  DESTINATION_BY_ID: '/api/destinations',

  ALL_SERVICES: '/api/services',

  SEARCH_FLIGHTS: '/api/search/flights'

};
 
// FUNCIONES
 
export const fetchAllFlights = async (): Promise<Flight[]> => {

  await new Promise(r => setTimeout(r, 800));

  return FLIGHTS_DATA;

};
 
export const fetchFlightById = async (id: string): Promise<Flight | null> => {

  await new Promise(r => setTimeout(r, 500));

  return FLIGHTS_DATA.find(f => f.id === id) || null;

};
 
export const fetchAllDestinations = async (): Promise<Destination[]> => {

  await new Promise(r => setTimeout(r, 800));

  return DESTINATIONS_DATA;

};
 
export const fetchDestinationById = async (id: string): Promise<Destination | null> => {

  await new Promise(r => setTimeout(r, 500));

  return DESTINATIONS_DATA.find(d => d.id === id) || null;

};
 
export const fetchAllServices = async (): Promise<Service[]> => {

  await new Promise(r => setTimeout(r, 500));

  return SERVICES_DATA;

};
 
export const searchFlights = async (origin: string, destination: string): Promise<Flight[]> => {

  await new Promise(r => setTimeout(r, 1000));

  return FLIGHTS_DATA.filter(

    f =>

      f.origin.toLowerCase().includes(origin.toLowerCase()) &&

      f.destination.toLowerCase().includes(destination.toLowerCase())

  );

};

 