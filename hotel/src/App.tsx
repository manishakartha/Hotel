import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HotelsList from './pages/HotelList';
import HotelDetails from './pages/HotelDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/hotels" element={<HotelsList />} />
        <Route path="/hotels/:id" element={<HotelDetails/>} />
        <Route path="*" element={<Navigate to="/hotels" />} />
      </Routes>
    </Router>
  );
};

export default App;
