import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HotelsList from './pages/HotelList';
import HotelDetails from './pages/HotelDetail';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
      <Routes>
        <Route path="/hotels" element={<HotelsList />} />
        <Route path="/hotels/:id" element={<HotelDetails/>} />
        <Route path="*" element={<Navigate to="/hotels" />} />
      </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
