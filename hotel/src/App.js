import React from 'react';
import { createBrowserRouter, RouterProvider,  Navigate } from 'react-router-dom';
import HotelDetail from './component/HotelDetail';
import HotelList from './component/HotelList';
import { ErrorBoundary } from './component/ErrorBoundary';

// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/hotels',
    element: <HotelList />,
  },
  {
    path: '/hotels/:id',
    element: <HotelDetail />,
  },
  {
    path: '*',
    element: <Navigate to="/hotels" />,
  },
]);

const App = () => {
  return (
    <ErrorBoundary> {/* Wrapping the RouterProvider with ErrorBoundary */}
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
