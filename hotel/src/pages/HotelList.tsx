import React, { useEffect, useState } from 'react';
import { fetchHotels } from '../services/api';
import { Hotel } from '../types/hotel';
import HotelCard from '../components/HotelCard';
import '../styles/HotelList.css';

const HotelsList = () => {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHotels()
          .then((data) => {
            setHotels(data);
            setLoading(false);
          })
          .catch(() => setLoading(false));
      }, []);

      if (loading) {
        return <div className="spinner"></div>;
      }
    return(
        <>
        
         <div className="hotels-list">
            {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
        </>
       
    )
}

export default HotelsList;
