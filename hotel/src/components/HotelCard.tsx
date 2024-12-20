import React from 'react';
import { Hotel } from '../types/hotel';
import { Link } from 'react-router-dom';
import '../styles/HotelCard.css';

interface HotelCardProps {
    hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => (
    <>
        <Link to={`/hotels/${hotel.id}`} className="hotel-card-link">
            <div className="hotel-card">
                <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
                <div className="hotel-info">
                    <h3>{hotel.name}</h3>
                    <p>Location: {hotel.location}</p>
                    <p>Rating: {hotel.rating}</p>
                    <p>Travel Dates: {hotel.datesOfTravel.join(' - ')}</p>
                    <p>Board Basis :{hotel.boardBasis}</p>
                    <p>Number of Rooms: {hotel.rooms.length}</p>
                    <p>Room Type :{hotel.rooms.map((e) => e.roomType)}</p>
                </div>
            </div>
        </Link>       
    </>
);

export default HotelCard;
